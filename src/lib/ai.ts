import { GoogleGenerativeAI } from '@google/generative-ai';
import { AIAnalysis, SearchQuery } from '@/types';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'AIzaSyDsPFr75dZeub52LvTfxH7_xmZ5FKwiHYQ');

export class AISearchEngine {
  private model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  async analyzeQuery(query: string): Promise<AIAnalysis> {
    try {
      const prompt = `
        Analyze this product search query and extract structured information:
        Query: "${query}"
        
        Return a JSON object with:
        - intent: What the user is looking for (one sentence)
        - keywords: Array of important keywords for search
        - category: Product category if identifiable (optional)
        - priceRange: Object with min/max if price mentioned (optional)
        - confidence: Confidence score 0-1
        
        Example response:
        {
          "intent": "Looking for wireless headphones under $100",
          "keywords": ["wireless", "headphones", "bluetooth"],
          "category": "Electronics",
          "priceRange": {"min": 0, "max": 100},
          "confidence": 0.9
        }
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // Fallback if JSON parsing fails
      return {
        intent: query,
        keywords: query.split(' ').filter(word => word.length > 2),
        confidence: 0.5
      };
    } catch (error) {
      console.error('AI analysis error:', error);
      return {
        intent: query,
        keywords: query.split(' ').filter(word => word.length > 2),
        confidence: 0.3
      };
    }
  }

  async enhanceSearchQuery(originalQuery: string, analysis: AIAnalysis): Promise<string> {
    try {
      const prompt = `
        Enhance this product search query for better e-commerce results:
        Original: "${originalQuery}"
        Analysis: ${JSON.stringify(analysis)}
        
        Create an optimized search query that will find relevant products.
        Include synonyms, brand names, and technical terms.
        Keep it concise but comprehensive.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim();
    } catch (error) {
      console.error('Query enhancement error:', error);
      return originalQuery;
    }
  }

  async generateSuggestions(query: string, results: any[]): Promise<string[]> {
    try {
      const prompt = `
        Based on the search query "${query}" and these results, suggest 3-5 related search terms:
        Results: ${results.slice(0, 3).map(r => r.title).join(', ')}
        
        Return as a JSON array of strings.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      return [];
    } catch (error) {
      console.error('Suggestion generation error:', error);
      return [];
    }
  }
}

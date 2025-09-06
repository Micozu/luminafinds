'use client';

import { useState } from 'react';
import { SearchResult, Product } from '@/types';
import { AISearchEngine } from '@/lib/ai';
import { InventoryAPI } from '@/lib/inventory-api';
import SearchInput from '@/components/SearchInput';
import SearchResults from '@/components/SearchResults';
import TelegramRequest from '@/components/TelegramRequest';
import { Sparkles, Zap, Search } from 'lucide-react';

export default function Home() {
  const [results, setResults] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');

  const aiEngine = new AISearchEngine();
  const inventoryAPI = new InventoryAPI();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setCurrentQuery(query);
    setResults(null);

    try {
      // Step 1: AI Analysis
      const analysis = await aiEngine.analyzeQuery(query);

      // Step 2: Enhanced Search Query
      const enhancedQuery = await aiEngine.enhanceSearchQuery(query, analysis);

      // Step 3: Search Products
      const searchResults = await inventoryAPI.searchProducts(enhancedQuery, {
        category: analysis.category,
        priceRange: analysis.priceRange
      });

      // Step 4: Generate Suggestions
      const suggestions = await aiEngine.generateSuggestions(query, searchResults.products);
      
      setResults({
        ...searchResults,
        suggestions
      });
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to simple search
      const fallbackResults = await inventoryAPI.searchProducts(query);
      setResults(fallbackResults);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (product: Product) => {
    // Open product in new tab
    window.open(product.productUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden min-h-[50vh] sm:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 via-transparent to-electric-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 w-full">
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
            {/* Logo/Title */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-electric-500 to-electric-600 rounded-xl sm:rounded-2xl shadow-lg shadow-electric-500/25 animate-pulse">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-electric-300 bg-clip-text text-transparent">
                Lumina Find
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 mb-3 sm:mb-4">
              AI-powered product search that understands what you&apos;re looking for, 
              even when you don&apos;t know exactly how to describe it.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4 sm:mt-6 md:mt-8">
              <div className="flex items-center gap-1.5 sm:gap-2 text-electric-300 bg-dark-800/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm hover:bg-electric-500/20 hover:text-white transition-all duration-300 ease-in-out cursor-pointer relative group overflow-hidden">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10" />
                <span className="text-xs sm:text-sm font-medium relative z-10">AI-Powered</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-electric-300 bg-dark-800/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm hover:bg-electric-500/20 hover:text-white transition-all duration-300 ease-in-out cursor-pointer relative group overflow-hidden">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10" />
                <span className="text-xs sm:text-sm font-medium relative z-10">Lightning Fast</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-electric-300 bg-dark-800/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm hover:bg-electric-500/20 hover:text-white transition-all duration-300 ease-in-out cursor-pointer relative group overflow-hidden">
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10" />
                <span className="text-xs sm:text-sm font-medium relative z-10">Smart Search</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12 sm:pb-16">
        {/* Search Section */}
        <section className="mb-6 sm:mb-8 md:mb-12">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
              What are you looking for?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-dark-300 max-w-2xl mx-auto px-2 sm:px-4">
              Find premium 1:1 replica products at unbeatable prices. Our AI understands 
              your needs and finds the best deals for luxury replicas.
            </p>
          </div>

          <div className="px-2 sm:px-4">
            <SearchInput
              onSearch={handleSearch}
              isLoading={isLoading}
              placeholder="e.g., LV wallet, Gucci bag, Chanel replica, designer shoes..."
            />
          </div>

        </section>

        {/* Results Section */}
        <section>
          <SearchResults
            results={results}
            isLoading={isLoading}
            query={currentQuery}
            onProductClick={handleProductClick}
          />
        </section>

        {/* Telegram Request Section */}
        <section className="mt-12 sm:mt-16 mb-12 sm:mb-16">
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <TelegramRequest 
              botToken="8324737071:AAFksLngzlnmNzBuSEMAMzbNUJaqoZLdrAw"
              chatId="6492630169"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-800 bg-dark-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-dark-400">
            <p className="text-sm">
              Powered by Gemini AI • Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

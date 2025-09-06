export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  imageUrl?: string;
  productUrl: string;
  source: string;
  category?: string;
  rating?: number;
  availability?: string;
}

export interface SearchQuery {
  query: string;
  filters?: {
    category?: string;
    priceRange?: {
      min: number;
      max: number;
    };
    availability?: string;
  };
}

export interface SearchResult {
  products: Product[];
  totalCount: number;
  searchTime: number;
  suggestions?: string[];
}

export interface AIAnalysis {
  intent: string;
  keywords: string[];
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  confidence: number;
}

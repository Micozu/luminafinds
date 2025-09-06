'use client';

import { SearchResult } from '@/types';
import ProductGrid from './ProductGrid';
import { Clock, Sparkles } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult | null;
  isLoading: boolean;
  query: string;
  onProductClick?: (product: any) => void;
}

export default function SearchResults({ results, isLoading, query, onProductClick }: SearchResultsProps) {
  if (!results && !isLoading) {
    return null;
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Results Header */}
      {results && (
        <div className="bg-dark-800/30 backdrop-blur-sm border border-dark-700 rounded-2xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-electric-500/20 rounded-lg">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-electric-400" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  Search Results for &quot;{query}&quot;
                </h2>
                <p className="text-dark-300 text-xs md:text-sm">
                  {results.totalCount} product{results.totalCount !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs md:text-sm text-dark-400">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              <span>{results.searchTime}ms</span>
            </div>
          </div>


          {/* Suggestions */}
          {results.suggestions && results.suggestions.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-white mb-2">Related searches:</h4>
              <div className="flex flex-wrap gap-2">
                {results.suggestions.map((suggestion, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-700 text-dark-300 text-sm rounded-full border border-dark-600 hover:border-electric-500/50 hover:text-electric-300 transition-colors duration-200 cursor-pointer"
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Product Grid */}
      <ProductGrid
        products={results?.products || []}
        isLoading={isLoading}
        onProductClick={onProductClick}
      />
    </div>
  );
}

'use client';

import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onProductClick?: (product: Product) => void;
}

export default function ProductGrid({ products, isLoading, onProductClick }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-4 md:p-6 animate-pulse"
          >
            <div className="w-full h-40 md:h-48 bg-dark-700 rounded-xl mb-4" />
            <div className="space-y-3">
              <div className="h-5 md:h-6 bg-dark-700 rounded-lg w-3/4" />
              <div className="h-3 md:h-4 bg-dark-700 rounded-lg w-full" />
              <div className="h-3 md:h-4 bg-dark-700 rounded-lg w-2/3" />
              <div className="flex justify-between items-center">
                <div className="h-6 md:h-8 bg-dark-700 rounded-lg w-16 md:w-20" />
                <div className="h-5 md:h-6 bg-dark-700 rounded-lg w-12 md:w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-dark-800 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
        <p className="text-dark-300">Try adjusting your search terms or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard product={product} onProductClick={onProductClick} />
        </div>
      ))}
    </div>
  );
}

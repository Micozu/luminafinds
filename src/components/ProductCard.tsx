'use client';

import { Product } from '@/types';
import { ExternalLink, Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { CurrencyConverter } from '@/lib/currency';

interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  const handleClick = () => {
    if (onProductClick) {
      onProductClick(product);
    } else {
      window.open(product.productUrl, '_blank');
    }
  };

  return (
    <div 
      className="
        bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-4 md:p-6
        hover:border-electric-500/50 hover:shadow-lg hover:shadow-electric-500/10
        transition-all duration-300 ease-in-out cursor-pointer
        card-hover group relative overflow-hidden
        hover:scale-[1.02] hover:-translate-y-1
      "
      onClick={handleClick}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-500/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl bg-dark-700">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={300}
            height={192}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center text-dark-400">
            <ShoppingCart className="w-12 h-12" />
          </div>
        )}
        
        {/* Rating Badge */}
        {product.rating && (
          <div className="absolute top-3 right-3 bg-dark-900/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs font-medium text-white">{product.rating}</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-white text-lg leading-tight line-clamp-2 group-hover:text-electric-300 transition-colors duration-200">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-dark-300 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Price and Source */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-electric-400">
              {CurrencyConverter.formatPrice(product.price, product.currency)}
            </span>
            {product.currency === 'USD' && (
              <span className="text-sm text-dark-300">
                ≈ {CurrencyConverter.getDisplayPrice(product.price, 'USD', 'EUR')}
              </span>
            )}
          </div>
          <div className="text-xs text-dark-400 bg-dark-700 px-2 py-1 rounded-lg">
            {product.source}
          </div>
        </div>

        {/* Availability */}
        {product.availability && (
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              product.availability === 'In Stock' ? 'bg-green-400' : 'bg-red-400'
            }`} />
            <span className="text-xs text-dark-300">{product.availability}</span>
          </div>
        )}

        {/* Action Button */}
        <button className="
          w-full mt-4 py-2 px-4 bg-gradient-to-r from-electric-500/20 to-electric-600/20
          border border-electric-500/30 text-electric-400 font-medium rounded-xl
          hover:from-electric-500/30 hover:to-electric-600/30 hover:border-electric-500/50
          transition-all duration-200 ease-in-out
          flex items-center justify-center gap-2
          group-hover:shadow-lg group-hover:shadow-electric-500/20
          hover:scale-105 active:scale-95
          relative overflow-hidden
        ">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500 ease-out" />
          <ExternalLink className="w-4 h-4" />
          View Product
        </button>
      </div>
    </div>
  );
}

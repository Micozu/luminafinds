'use client';

import { Sparkles } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingSpinner({ size = 'md', text = 'Searching...' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="relative">
        {/* Outer ring */}
        <div className={`
          ${sizeClasses[size]} border-2 border-electric-500/20 border-t-electric-500 
          rounded-full animate-spin
        `} />
        
        {/* Inner sparkle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className={`${sizeClasses[size]} text-electric-400 animate-pulse`} />
        </div>
      </div>
      
      {text && (
        <p className="text-electric-300 font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

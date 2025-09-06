'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, X } from 'lucide-react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export default function SearchInput({ 
  onSearch, 
  isLoading = false, 
  placeholder = "Search for products..." 
}: SearchInputProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`
          relative flex items-center bg-dark-800/50 backdrop-blur-sm border-2 rounded-xl sm:rounded-2xl
          transition-all duration-300 ease-in-out
          ${isFocused ? 'border-electric-500 shadow-lg shadow-electric-500/25 ring-2 ring-electric-500/20' : 'border-dark-600 hover:border-electric-500/50'}
          ${isLoading ? 'opacity-75' : ''}
          hover:shadow-md hover:shadow-electric-500/10
        `}>
          <div className="flex items-center pl-3 sm:pl-4">
            <Search className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
              isFocused ? 'text-electric-400' : 'text-dark-400'
            }`} />
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={isLoading}
            className="
              flex-1 px-3 sm:px-4 py-3 sm:py-4 bg-transparent text-white placeholder-dark-400
              focus:outline-none text-sm sm:text-base md:text-lg font-medium
              disabled:cursor-not-allowed
            "
          />
          
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 mr-2 text-dark-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="
              m-1.5 sm:m-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-electric-500 to-electric-600
              text-white font-semibold rounded-lg sm:rounded-xl
              hover:from-electric-600 hover:to-electric-700
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 ease-in-out
              flex items-center gap-1.5 sm:gap-2
              shadow-lg shadow-electric-500/25
              hover:shadow-xl hover:shadow-electric-500/40
              hover:scale-105 active:scale-95
              relative overflow-hidden
              text-xs sm:text-sm
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Search
              </>
            )}
          </button>
        </div>
        
        {isFocused && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-dark-800/95 backdrop-blur-sm border border-dark-600 rounded-xl shadow-xl">
            <div className="text-sm text-dark-300">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="font-medium">AI-Powered Search</span>
              </div>
              <p>Try searching for &quot;LV wallet&quot; or &quot;designer replica bags&quot;</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

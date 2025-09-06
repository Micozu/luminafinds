import { Product, SearchResult } from '@/types';

// Mock inventory API - replace with real e-commerce APIs
export class InventoryAPI {
  private mockProducts: Product[] = [
    {
      id: '1',
      title: 'LV Wallet - Premium Replica',
      description: 'High-quality 1:1 replica Louis Vuitton wallet with authentic design and premium materials',
      price: 5.74,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      productUrl: 'https://s.spblk.com/8j9d',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.9,
      availability: 'In Stock'
    },
    {
      id: '2',
      title: 'LV Messenger Bag - Premium Replica',
      description: 'Authentic-looking Louis Vuitton messenger bag replica with premium leather and signature LV monogram',
      price: 11.00,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      productUrl: 'https://s.spblk.com/8j9g',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.8,
      availability: 'In Stock'
    },
    {
      id: '3',
      title: 'Rolex Box - Premium Replica',
      description: 'High-quality Rolex watch box replica with authentic design and premium materials for luxury watch storage',
      price: 4.53,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f0d0b8?w=400',
      productUrl: 'https://s.spblk.com/8j9h',
      source: 'Premium Replicas',
      category: 'Accessories',
      rating: 4.7,
      availability: 'In Stock'
    },
    {
      id: '4',
      title: 'Moissanite Cartier Watch - Premium Replica',
      description: 'Luxury Cartier watch replica with genuine moissanite stones and authentic design, perfect for special occasions',
      price: 500.00,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f0d0b8?w=400',
      productUrl: 'https://s.spblk.com/8j9m',
      source: 'Premium Replicas',
      category: 'Watches',
      rating: 4.9,
      availability: 'In Stock'
    },
    {
      id: '5',
      title: 'Vinted Authentication Tag - Premium Replica',
      description: 'High-quality Vinted authentication tag replica for authenticating luxury items and designer products',
      price: 0.28,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      productUrl: 'https://s.spblk.com/8j9n',
      source: 'Premium Replicas',
      category: 'Accessories',
      rating: 4.6,
      availability: 'In Stock'
    },
    {
      id: '6',
      title: 'Budget Cartier Watches - Premium Replica',
      description: 'Affordable Cartier watch replicas with authentic design and quality materials, perfect for everyday wear',
      price: 14.95,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f0d0b8?w=400',
      productUrl: 'https://s.spblk.com/8j9o',
      source: 'Premium Replicas',
      category: 'Watches',
      rating: 4.5,
      availability: 'In Stock'
    },
    {
      id: '7',
      title: 'Budget Casio Watches - Premium Replica',
      description: 'Affordable Casio watch replicas with authentic design and reliable functionality, perfect for daily use',
      price: 2.12,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f0d0b8?w=400',
      productUrl: 'https://s.spblk.com/8j9q',
      source: 'Premium Replicas',
      category: 'Watches',
      rating: 4.4,
      availability: 'In Stock'
    },
    {
      id: '8',
      title: 'Budget Rolex Watch - Premium Replica',
      description: 'Affordable Rolex watch replica with authentic design and quality materials, budget grade luxury timepiece',
      price: 25.00,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f0d0b8?w=400',
      productUrl: 'https://s.spblk.com/8j9r',
      source: 'Premium Replicas',
      category: 'Watches',
      rating: 4.6,
      availability: 'In Stock'
    },
    {
      id: '9',
      title: 'Moncler Vezere Winter Jacket - Best Batch Replica',
      description: 'Premium Moncler Vezere winter jacket replica with best batch quality, authentic design and superior materials for cold weather',
      price: 210.00,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400',
      productUrl: 'https://s.spblk.com/8j9t',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.8,
      availability: 'In Stock'
    },
    {
      id: '10',
      title: 'Trapstar London Shooters Puffer Jacket - Premium Replica',
      description: 'Authentic Trapstar London Shooters puffer jacket replica with streetwear design and quality materials, perfect for urban fashion',
      price: 22.64,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400',
      productUrl: 'https://s.spblk.com/8j9v',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.5,
      availability: 'In Stock'
    },
    {
      id: '11',
      title: 'Canada Goose Gilet Puffer Jacket - Premium Replica',
      description: 'High-quality Canada Goose gilet puffer jacket replica with authentic design and premium materials for cold weather protection',
      price: 12.67,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400',
      productUrl: 'https://s.spblk.com/8ja1',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.6,
      availability: 'In Stock'
    },
    {
      id: '12',
      title: 'Dior B30-Three Shoes - Premium Replica',
      description: 'Authentic Dior B30-three shoes replica with luxury design and premium materials, perfect for fashion-forward individuals',
      price: 33.21,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8ja2',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.7,
      availability: 'In Stock'
    },
    {
      id: '13',
      title: 'Louboutin Shoes - Premium Replica',
      description: 'High-quality Louboutin shoes replica with iconic red sole and luxury design, perfect for special occasions',
      price: 33.21,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8ja8',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.8,
      availability: 'In Stock'
    },
    {
      id: '14',
      title: 'Jordan 1 Travis Scott "Barb" - Premium Replica',
      description: 'Authentic Jordan 1 Travis Scott collaboration replica featuring the iconic backward-facing Nike swoosh "barb" design, multiple colorways available',
      price: 48.30,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jaa',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.9,
      availability: 'In Stock'
    },
    {
      id: '15',
      title: 'Budget Jordan 4s - Premium Replica',
      description: 'High-quality Jordan 4 replica shoes with authentic design and premium materials, perfect for sneaker enthusiasts on a budget',
      price: 14.95,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jab',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.6,
      availability: 'In Stock'
    },
    {
      id: '16',
      title: 'Hoodrich Tracksuit - Premium Replica',
      description: 'Authentic Hoodrich tracksuit replica with premium materials and streetwear design, perfect for urban fashion enthusiasts',
      price: 5.17,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jan',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.5,
      availability: 'In Stock'
    },
    {
      id: '17',
      title: 'Corteiz Tee - Premium Replica',
      description: 'Authentic Corteiz t-shirt replica with premium materials and streetwear design, perfect for urban fashion enthusiasts',
      price: 6.64,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jaq',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.7,
      availability: 'In Stock'
    },
    {
      id: '18',
      title: 'LV Sunglasses - Premium Replica',
      description: 'Authentic Louis Vuitton sunglasses replica with premium materials and luxury design, perfect for fashion-forward individuals',
      price: 7.40,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jar',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.8,
      availability: 'In Stock'
    },
    {
      id: '19',
      title: 'PSD Boxers - Premium Replica',
      description: 'Authentic PSD boxers replica with premium materials and comfortable design, perfect for everyday wear',
      price: 4.38,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jas',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.6,
      availability: 'In Stock'
    },
    {
      id: '20',
      title: 'Lightning McQueen Crocs - Premium Replica',
      description: 'Authentic Lightning McQueen crocs replica with premium materials and fun Disney design, perfect for kids and adults',
      price: 6.80,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jau',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.7,
      availability: 'In Stock'
    },
    {
      id: '21',
      title: 'Chrome Hearts Cap - Premium Replica',
      description: 'Authentic Chrome Hearts cap replica with premium materials and luxury design, perfect for fashion-forward individuals',
      price: 8.76,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jav',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.8,
      availability: 'In Stock'
    },
    {
      id: '22',
      title: 'Chrome Hearts Zip Up Hoodie - Premium Replica',
      description: 'Authentic Chrome Hearts zip up hoodie replica with premium materials and luxury design, perfect for streetwear enthusiasts',
      price: 43.47,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jb1',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.9,
      availability: 'In Stock'
    },
    {
      id: '23',
      title: 'Chrome Hearts Pants - Premium Replica',
      description: 'Authentic Chrome Hearts pants replica with premium materials and luxury design, perfect for streetwear enthusiasts',
      price: 17.96,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jb2',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.7,
      availability: 'In Stock'
    },
    {
      id: '24',
      title: 'Stussy Football Jerseys - Premium Replica',
      description: 'Authentic Stussy football jerseys replica with premium materials and streetwear design, perfect for sports and fashion enthusiasts',
      price: 12.08,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jb3',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.6,
      availability: 'In Stock'
    },
    {
      id: '25',
      title: 'Birkenstock Light and Casual Toe Slippers - Premium Replica',
      description: 'Authentic Birkenstock light and casual toe slippers replica with premium materials and comfort design, perfect for everyday wear',
      price: 22.49,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jb5',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.8,
      availability: 'In Stock'
    },
    {
      id: '26',
      title: 'LV Bracelet - Premium Replica',
      description: 'Authentic Louis Vuitton bracelet replica with premium materials and luxury design, perfect for fashion-forward individuals',
      price: 0.91,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jb6',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.7,
      availability: 'In Stock'
    },
    {
      id: '27',
      title: 'Cheapest LV Belts - Premium Replica',
      description: 'Authentic Louis Vuitton belts replica with premium materials and luxury design, perfect for fashion-forward individuals',
      price: 1.82,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jb7',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.6,
      availability: 'In Stock'
    },
    {
      id: '28',
      title: 'LV Trio Bag - Premium Replica',
      description: 'Authentic Louis Vuitton trio bag replica with premium materials and luxury design, perfect for fashion-forward individuals',
      price: 20.83,
      currency: 'USD',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      productUrl: 'https://s.spblk.com/8jb9',
      source: 'Premium Replicas',
      category: 'Fashion',
      rating: 4.8,
      availability: 'In Stock'
    },
  ];

  async searchProducts(query: string, filters?: any): Promise<SearchResult> {
    const startTime = Date.now();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simple search implementation
    const searchTerms = query.toLowerCase().split(' ');
    const filteredProducts = this.mockProducts.filter(product => {
      const searchText = `${product.title} ${product.description}`.toLowerCase();
      return searchTerms.some(term => searchText.includes(term));
    });

    // Apply filters if provided
    let results = filteredProducts;
    if (filters) {
      if (filters.category) {
        results = results.filter(p => p.category === filters.category);
      }
      if (filters.priceRange) {
        results = results.filter(p => 
          p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
        );
      }
    }

    const searchTime = Date.now() - startTime;

    return {
      products: results,
      totalCount: results.length,
      searchTime,
      suggestions: this.generateSuggestions(query, results)
    };
  }

  private generateSuggestions(query: string, results: Product[]): string[] {
    const suggestions = [];
    const queryLower = query.toLowerCase();
    
    if (queryLower.includes('lv') || queryLower.includes('louis vuitton') || queryLower.includes('wallet') || queryLower.includes('messenger')) {
      suggestions.push('LV bags', 'Gucci wallet', 'Chanel replica', 'designer messenger bags');
    } else if (queryLower.includes('moncler') || queryLower.includes('jacket') || queryLower.includes('winter')) {
      suggestions.push('Moncler jackets', 'winter coats', 'luxury jackets', 'designer outerwear');
    } else if (queryLower.includes('canada goose') || queryLower.includes('gilet')) {
      suggestions.push('Canada Goose jackets', 'gilet jackets', 'puffer jackets', 'winter outerwear');
    } else if (queryLower.includes('dior') || queryLower.includes('b30') || queryLower.includes('shoes')) {
      suggestions.push('Dior shoes', 'B30 shoes', 'luxury shoes', 'designer footwear');
    } else if (queryLower.includes('louboutin') || queryLower.includes('red sole')) {
      suggestions.push('Louboutin shoes', 'red sole shoes', 'luxury heels', 'designer shoes');
    } else if (queryLower.includes('jordan') || queryLower.includes('travis scott') || queryLower.includes('barb') || queryLower.includes('j1')) {
      suggestions.push('Jordan 1 Travis Scott', 'J1 TS Barb', 'Travis Scott shoes', 'Jordan replicas');
    } else if (queryLower.includes('jordan 4') || queryLower.includes('j4') || queryLower.includes('budget jordan')) {
      suggestions.push('Jordan 4 shoes', 'Budget Jordan 4s', 'J4 replicas', 'affordable Jordan shoes');
    } else if (queryLower.includes('hoodrich') || queryLower.includes('tracksuit') || queryLower.includes('streetwear')) {
      suggestions.push('Hoodrich tracksuit', 'streetwear tracksuits', 'urban fashion', 'Hoodrich clothing');
    } else if (queryLower.includes('corteiz') || queryLower.includes('tee') || queryLower.includes('t-shirt')) {
      suggestions.push('Corteiz tee', 'Corteiz t-shirts', 'streetwear tees', 'urban t-shirts');
    } else if (queryLower.includes('lv sunglasses') || queryLower.includes('louis vuitton sunglasses') || queryLower.includes('designer sunglasses')) {
      suggestions.push('LV sunglasses', 'Louis Vuitton sunglasses', 'designer sunglasses', 'luxury eyewear');
    } else if (queryLower.includes('psd') || queryLower.includes('boxers') || queryLower.includes('underwear')) {
      suggestions.push('PSD boxers', 'designer boxers', 'luxury underwear', 'PSD clothing');
    } else if (queryLower.includes('lightning mcqueen') || queryLower.includes('crocs') || queryLower.includes('disney')) {
      suggestions.push('Lightning McQueen crocs', 'Disney crocs', 'character crocs', 'fun shoes');
    } else if (queryLower.includes('chrome hearts') || queryLower.includes('cap') || queryLower.includes('hat')) {
      suggestions.push('Chrome Hearts cap', 'designer caps', 'luxury hats', 'Chrome Hearts accessories');
    } else if (queryLower.includes('chrome hearts hoodie') || queryLower.includes('zip up hoodie') || queryLower.includes('luxury hoodie')) {
      suggestions.push('Chrome Hearts hoodie', 'zip up hoodies', 'luxury hoodies', 'designer streetwear');
    } else if (queryLower.includes('chrome hearts pants') || queryLower.includes('designer pants') || queryLower.includes('luxury pants')) {
      suggestions.push('Chrome Hearts pants', 'designer pants', 'luxury pants', 'streetwear bottoms');
    } else if (queryLower.includes('stussy') || queryLower.includes('football jerseys') || queryLower.includes('sports jerseys')) {
      suggestions.push('Stussy football jerseys', 'sports jerseys', 'football jerseys', 'Stussy clothing');
    } else if (queryLower.includes('birkenstock') || queryLower.includes('slippers') || queryLower.includes('casual shoes')) {
      suggestions.push('Birkenstock slippers', 'casual slippers', 'comfort shoes', 'Birkenstock footwear');
    } else if (queryLower.includes('lv bracelet') || queryLower.includes('louis vuitton bracelet') || queryLower.includes('designer bracelet')) {
      suggestions.push('LV bracelet', 'Louis Vuitton bracelet', 'designer bracelets', 'luxury jewelry');
    } else if (queryLower.includes('lv belts') || queryLower.includes('louis vuitton belts') || queryLower.includes('designer belts')) {
      suggestions.push('LV belts', 'Louis Vuitton belts', 'designer belts', 'luxury accessories');
    } else if (queryLower.includes('lv trio bag') || queryLower.includes('louis vuitton trio') || queryLower.includes('designer trio bag')) {
      suggestions.push('LV trio bag', 'Louis Vuitton trio bag', 'designer trio bags', 'luxury handbags');
    } else if (queryLower.includes('trapstar') || queryLower.includes('london shooters') || queryLower.includes('puffer')) {
      suggestions.push('Trapstar jackets', 'London Shooters', 'puffer jackets', 'streetwear');
    } else if (queryLower.includes('rolex') || queryLower.includes('watch') || queryLower.includes('box')) {
      suggestions.push('Rolex watches', 'budget Rolex', 'watch boxes', 'luxury watch accessories');
    } else if (queryLower.includes('cartier') || queryLower.includes('moissanite') || queryLower.includes('budget')) {
      suggestions.push('Cartier watches', 'moissanite jewelry', 'luxury watches', 'budget watches');
    } else if (queryLower.includes('casio')) {
      suggestions.push('Casio watches', 'budget watches', 'digital watches', 'affordable watches');
    } else if (queryLower.includes('vinted') || queryLower.includes('authentication') || queryLower.includes('tag')) {
      suggestions.push('authentication tags', 'Vinted tags', 'luxury tags', 'designer tags');
    } else if (queryLower.includes('replica') || queryLower.includes('fake')) {
      suggestions.push('1:1 replicas', 'designer replicas', 'luxury replicas');
    } else if (queryLower.includes('designer') || queryLower.includes('luxury')) {
      suggestions.push('designer replicas', 'luxury accessories', 'premium replicas');
    }
    
    return suggestions.slice(0, 3);
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.mockProducts.find(p => p.id === id) || null;
  }

  async getCategories(): Promise<string[]> {
    const categories = Array.from(new Set(this.mockProducts.map(p => p.category).filter(Boolean)));
    return categories as string[];
  }
}

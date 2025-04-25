import React, { useState } from 'react';
import { Sliders, Search, Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import Button from './ui/Button';
import { Card } from './ui/Card';

const ShopPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(true);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [availability, setAvailability] = useState<'all' | 'in-stock' | 'out-of-stock'>('all');

  // Get unique categories and features
  const categories = ['all', ...new Set(products.map(p => p.category))];
  const allFeatures = Array.from(new Set(products.flatMap(p => p.features)));

  // Get price range
  const maxPrice = Math.max(...products.map(p => p.price));
  const minPrice = Math.min(...products.map(p => p.price));

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = (product.discountPrice || product.price) >= priceRange[0] && 
                        (product.discountPrice || product.price) <= priceRange[1];
    const matchesRating = product.rating >= minRating;
    const matchesFeatures = selectedFeatures.length === 0 || 
      selectedFeatures.every(feature => product.features.includes(feature));
    const matchesAvailability = availability === 'all' ||
      (availability === 'in-stock' && product.stock > 0) ||
      (availability === 'out-of-stock' && product.stock === 0);

    return matchesSearch && matchesCategory && matchesPrice && 
           matchesRating && matchesFeatures && matchesAvailability;
  }).sort((a, b) => {
    const priceA = a.discountPrice || a.price;
    const priceB = b.discountPrice || b.price;

    switch (sortBy) {
      case 'price-low':
        return priceA - priceB;
      case 'price-high':
        return priceB - priceA;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return a.isNew ? -1 : 1;
      default:
        return a.isFeatured ? -1 : 1;
    }
  });

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([minPrice, maxPrice]);
    setSearchQuery('');
    setSelectedFeatures([]);
    setMinRating(0);
    setAvailability('all');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Shop</h1>
          <p className="text-gray-400">Browse our collection of premium lighting solutions</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-4">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                  >
                    Reset All
                  </Button>
                </div>
              </div>

              <div className="p-4 space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium text-white mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="form-radio text-blue-500 bg-gray-700 border-gray-600"
                        />
                        <span className="ml-2 capitalize">
                          {category === 'all' ? 'All Categories' : category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium text-white mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-1 bg-gray-700 border border-gray-600 rounded-md text-white text-sm"
                        placeholder="Min"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-3 py-1 bg-gray-700 border border-gray-600 rounded-md text-white text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium text-white mb-3">Minimum Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <label key={rating} className="flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === rating}
                          onChange={() => setMinRating(rating)}
                          className="form-radio text-blue-500 bg-gray-700 border-gray-600"
                        />
                        <span className="ml-2 flex items-center">
                          {rating}+ <Star size={14} className="ml-1 text-yellow-400 fill-current" />
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h3 className="font-medium text-white mb-3">Availability</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Items' },
                      { value: 'in-stock', label: 'In Stock' },
                      { value: 'out-of-stock', label: 'Out of Stock' }
                    ].map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="availability"
                          checked={availability === option.value}
                          onChange={() => setAvailability(option.value as typeof availability)}
                          className="form-radio text-blue-500 bg-gray-700 border-gray-600"
                        />
                        <span className="ml-2">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div>
                  <h3 className="font-medium text-white mb-3">Features</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {allFeatures.map(feature => (
                      <label key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature)}
                          onChange={() => toggleFeature(feature)}
                          className="form-checkbox text-blue-500 bg-gray-700 border-gray-600"
                        />
                        <span className="ml-2">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Sort */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full py-2 pl-10 pr-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-gray-400">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">No products found matching your criteria</p>
                <Button
                  variant="outline"
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
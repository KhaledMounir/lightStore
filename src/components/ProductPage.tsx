import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Info, Package, Check, X } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import ProductCard from './ProductCard';
import Button from './ui/Button';
import { useCart } from '../store/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button variant="primary" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product.id, quantity);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 bg-gray-800 rounded-md overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-400 mr-2">Category:</span>
                <span className="text-sm text-blue-400 capitalize">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              
              <div className="mb-6">
                {product.discountPrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-white mr-3">
                      {formatPrice(product.discountPrice)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <span className="ml-3 bg-red-900 text-red-300 text-sm px-2 py-1 rounded-md">
                      Save {formatPrice(product.price - product.discountPrice)}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-white">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 mb-6">{product.description}</p>
              
              <div className="flex items-center mb-6">
                <div className="mr-1">
                  <span className="text-sm text-gray-400">Availability:</span>
                </div>
                {product.stock > 0 ? (
                  <span className="text-green-400 flex items-center">
                    <Check size={16} className="mr-1" />
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-red-400 flex items-center">
                    <X size={16} className="mr-1" />
                    Out of Stock
                  </span>
                )}
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-gray-400">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-l-md flex items-center justify-center text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    max={product.stock}
                    className="w-12 h-8 text-center bg-gray-800 border-t border-b border-gray-700 text-white focus:outline-none"
                  />
                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-r-md flex items-center justify-center text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3 mb-8">
                <Button 
                  variant="primary" 
                  fullWidth 
                  leftIcon={<ShoppingCart size={18} />}
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                >
                  Add to Cart
                </Button>
                <Button variant="outline" leftIcon={<Heart size={18} />}>
                  Wishlist
                </Button>
                <Button variant="outline" leftIcon={<Share2 size={18} />}>
                  Share
                </Button>
              </div>
              
              {/* Key Features */}
              <div className="bg-gray-800 rounded-md p-4 mb-6">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <Info size={16} className="mr-2 text-blue-400" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="mr-2 mt-0.5 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-700 mb-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`pb-4 font-medium text-sm ${
                  activeTab === 'specifications'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>
          </div>
          
          <div className="mb-12">
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <p className="mb-4">{product.description}</p>
                <p>
                  Experience premium quality lighting with our {product.name}. 
                  Designed to enhance the ambiance of your space while providing 
                  optimal illumination, this product combines functionality with elegant aesthetics.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="bg-gray-800 rounded-md overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-700 last:border-b-0">
                        <th className="py-3 px-6 bg-gray-750 w-1/3 text-sm font-medium">
                          {key}
                        </th>
                        <td className="py-3 px-6 text-sm">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Customer Reviews</h3>
                  <Button variant="primary" size="sm">Write a Review</Button>
                </div>
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <p className="text-gray-400 mb-4">
                      This is a demo. In a real implementation, customer reviews would appear here.
                    </p>
                    <Button variant="outline" size="sm">
                      Load Reviews
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
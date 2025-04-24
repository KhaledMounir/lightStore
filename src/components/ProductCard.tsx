import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { Card, CardBody } from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { useCart } from '../store/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
  };
  
  // Format price with 2 decimal places
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  return (
    <Card hoverable className="h-full flex flex-col">
      <Link to={`/products/${product.id}`} className="flex flex-col h-full">
        <div className="relative">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="h-48 w-full object-cover"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge variant="success">New</Badge>
            )}
            {product.discountPrice && (
              <Badge variant="danger">
                {Math.round((1 - product.discountPrice / product.price) * 100)}% Off
              </Badge>
            )}
          </div>
        </div>
        
        <CardBody className="flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-200 font-medium">{product.name}</h3>
            <button className="text-gray-400 hover:text-gray-200 p-1">
              <Heart size={18} />
            </button>
          </div>
          
          <p className="text-gray-400 text-sm line-clamp-2 mb-2 flex-grow">
            {product.description}
          </p>
          
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-600"}>
                  ★
                </span>
              ))}
            </div>
            <span>({product.reviewCount})</span>
          </div>
          
          <div className="flex justify-between items-center mt-auto">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-gray-200 font-bold">
                    {formatPrice(product.discountPrice)}
                  </span>
                  <span className="text-gray-500 text-sm line-through">
                    {formatPrice(product.price)}
                  </span>
                </div>
              ) : (
                <span className="text-gray-200 font-bold">{formatPrice(product.price)}</span>
              )}
            </div>
            
            <Button 
              size="sm"
              variant="primary"
              leftIcon={<ShoppingCart size={16} />}
              onClick={handleAddToCart}
            >
              Add
            </Button>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ProductCard;
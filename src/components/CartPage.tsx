import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ShoppingBag, CreditCard, SignalLow as PaypalLogo } from 'lucide-react';
import { useCart } from '../store/CartContext';
import Button from './ui/Button';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeItem, getCartItemProduct } = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
          <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-gray-400" />
          <h1 className="text-2xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800 rounded-md overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-gray-750 text-gray-300 text-sm">
                  <tr>
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-center py-3 px-4">Quantity</th>
                    <th className="text-right py-3 px-4">Price</th>
                    <th className="text-right py-3 px-4">Total</th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map(item => {
                    const product = getCartItemProduct(item.productId);
                    if (!product) return null;
                    
                    const itemPrice = product.discountPrice || product.price;
                    const itemTotal = itemPrice * item.quantity;
                    
                    return (
                      <tr key={item.productId} className="border-b border-gray-700 last:border-b-0">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <Link to={`/products/${product.id}`}>
                              <img 
                                src={product.images[0]} 
                                alt={product.name} 
                                className="w-16 h-16 object-cover rounded-md mr-4"
                              />
                            </Link>
                            <div>
                              <Link 
                                to={`/products/${product.id}`} 
                                className="text-white hover:text-blue-400 font-medium"
                              >
                                {product.name}
                              </Link>
                              <p className="text-gray-400 text-sm capitalize">{product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 bg-gray-700 rounded-l-md flex items-center justify-center text-gray-400 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}
                              min="1"
                              max={product.stock}
                              className="w-12 h-8 text-center bg-gray-700 text-white focus:outline-none"
                            />
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              disabled={item.quantity >= product.stock}
                              className="w-8 h-8 bg-gray-700 rounded-r-md flex items-center justify-center text-gray-400 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          {product.discountPrice ? (
                            <div>
                              <span className="text-white font-medium">{formatPrice(product.discountPrice)}</span>
                              <span className="block text-gray-500 text-sm line-through">{formatPrice(product.price)}</span>
                            </div>
                          ) : (
                            <span className="text-white font-medium">{formatPrice(product.price)}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-right text-white font-medium">
                          {formatPrice(itemTotal)}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button 
                            onClick={() => removeItem(item.productId)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center">
              <Link to="/products" className="text-blue-400 hover:text-blue-300 flex items-center">
                <ChevronLeft size={16} className="mr-1" />
                <span>Continue Shopping</span>
              </Link>
              
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm">
                  Clear Cart
                </Button>
                <Button variant="outline" size="sm">
                  Update Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal:</span>
                    <span className="text-white">{formatPrice(cart.subtotal)}</span>
                  </div>
                  
                  {cart.discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discount:</span>
                      <span className="text-green-400">-{formatPrice(cart.discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping:</span>
                    <span className="text-white">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Total:</span>
                    <span className="text-xl font-bold text-white">{formatPrice(cart.total)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <Link to="/checkout">
                  <Button variant="primary" fullWidth size="lg" className="mb-4">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <div className="text-center text-sm text-gray-400 mb-4">
                  Secure checkout powered by Stripe
                </div>
                
                <div className="flex justify-center space-x-3 mb-4">
                  <CreditCard size={24} className="text-gray-400" />
                  <PaypalLogo size={24} className="text-gray-400" />
                </div>
                
                <div className="text-center text-xs text-gray-500">
                  By placing your order, you agree to our <Link to="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link> and <Link to="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
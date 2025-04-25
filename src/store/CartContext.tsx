import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Cart, CartItem, Product } from '../types';
import { getProductById } from '../data/products';

type CartAction = 
  | { type: 'ADD_ITEM'; productId: string; quantity?: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

const initialCart: Cart = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  discount: 0,
  total: 0
};

function calculateCartTotals(items: CartItem[]): Cart {
  let totalItems = 0;
  let subtotal = 0;
  let discount = 0;

  items.forEach(item => {
    const product = getProductById(item.productId);
    if (product) {
      totalItems += item.quantity;
      
      const itemTotal = item.quantity * product.price;
      subtotal += itemTotal;
      
      if (product.discountPrice) {
        discount += item.quantity * (product.price - product.discountPrice);
      }
    }
  });

  return {
    items,
    totalItems,
    subtotal,
    discount,
    total: subtotal - discount
  };
}

function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.productId === action.productId
      );
      
      const quantity = action.quantity || 1;
      
      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
      } else {
        updatedItems = [
          ...state.items,
          { productId: action.productId, quantity }
        ];
      }
      
      return calculateCartTotals(updatedItems);
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        item => item.productId !== action.productId
      );
      
      return calculateCartTotals(updatedItems);
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return cartReducer(state, { 
          type: 'REMOVE_ITEM', 
          productId: action.productId 
        });
      }
      
      const updatedItems = state.items.map(item =>
        item.productId === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      
      return calculateCartTotals(updatedItems);
    }
    
    case 'CLEAR_CART':
      return initialCart;
      
    default:
      return state;
  }
}

interface CartContextType {
  cart: Cart;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartItemProduct: (productId: string) => Product | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      // We need to recalculate totals in case product prices have changed
      const itemsOnly = parsedCart.items;
      if (itemsOnly?.length) {
        dispatch({ type: 'CLEAR_CART' });
        itemsOnly.forEach((item: CartItem) => {
          dispatch({ type: 'ADD_ITEM', productId: item.productId, quantity: item.quantity });
        });
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  function addItem(productId: string, quantity: number = 1) {
    dispatch({ type: 'ADD_ITEM', productId, quantity });
  }
  
  function removeItem(productId: string) {
    dispatch({ type: 'REMOVE_ITEM', productId });
  }
  
  function updateQuantity(productId: string, quantity: number) {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  }
  
  function clearCart() {
    dispatch({ type: 'CLEAR_CART' });
  }
  
  function getCartItemProduct(productId: string) {
    return getProductById(productId);
  }
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getCartItemProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
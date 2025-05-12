import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

import type { ProductType } from '../types';
import { contextProducts } from '../data/products';

interface CartContextType {
  cart: Array<ProductType>;
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Array<ProductType>>(contextProducts);

  const addProduct = (id: number) => {
    setCart(prevCart => prevCart.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }
      return product;
    }));
  }

  const removeProduct = (id: number) => {
    const product = cart.find(product => product.id === id);
    if (product && product.quantity > 0) {
      setCart(prevCart => prevCart.map(product => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }
        return product;
      }));
    }
  }

  const total = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
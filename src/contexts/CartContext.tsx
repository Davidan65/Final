import React, { createContext, useContext, useState } from 'react';

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (id: number, name: string, price: number) => void;
  addToCart: (item: { id: string | number; name: string; price: number; image?: string; quantity: number }) => void;
  removeItem: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (id: number, name: string, price: number) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { id, name, price, quantity: 1 }];
    });
  };

  const addToCart = (item: { id: string | number; name: string; price: number; image?: string; quantity: number }) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return currentItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...currentItems, item];
    });
  };

  const removeItem = (id: number | string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number | string, quantity: number) => {
    if (quantity < 1) return;
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, addToCart, removeItem, updateQuantity, clearCart, total }}>
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
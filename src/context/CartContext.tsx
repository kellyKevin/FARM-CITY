"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  category: "fresh" | "seedlings";
  price: number;
  unit: string;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
  generateWhatsAppMessage: (customerDetails?: { name?: string; location?: string; note?: string }) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("farm_city_cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("farm_city_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === newItem.id && i.unit === newItem.unit);
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id && i.unit === newItem.unit
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        );
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generateWhatsAppMessage = (customerDetails?: { name?: string; location?: string; note?: string }) => {
    let msg = `Hello Farm City, I would like to place an order:\n\n`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. ${item.name} - ${item.quantity} ${item.unit} (KSh ${(item.price * item.quantity).toLocaleString()})\n`;
    });
    msg += `\nTotal Estimated: KSh ${totalAmount.toLocaleString()}\n`;
    if (customerDetails?.name) msg += `Name: ${customerDetails.name}\n`;
    if (customerDetails?.location) msg += `Delivery Location: ${customerDetails.location}\n`;
    if (customerDetails?.note) msg += `Notes: ${customerDetails.note}\n`;
    msg += `\nPlease confirm availability and delivery fees.`;
    return encodeURIComponent(msg);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalAmount,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

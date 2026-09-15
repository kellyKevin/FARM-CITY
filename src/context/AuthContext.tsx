"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password?: string;
  deliveryAddress?: string;
  town?: string;
  county?: string;
  createdAt: string;
}

export interface UserOrder {
  id: string;
  userId: string;
  date: string;
  items: {
    id: string;
    name: string;
    quantity: number;
    unit: string;
    price: number;
    image?: string;
  }[];
  totalAmount: number;
  status: "Pending" | "Processing" | "Out for Delivery" | "Delivered" | "Cancelled";
  deliveryAddress: string;
  paymentMethod: string;
}

interface AuthContextType {
  currentUser: UserProfile | null;
  register: (data: Omit<UserProfile, "id" | "createdAt">) => { success: boolean; error?: string };
  login: (emailOrPhone: string, password?: string) => { success: boolean; error?: string };
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  userOrders: UserOrder[];
  addOrder: (order: Omit<UserOrder, "id" | "userId" | "date" | "status">) => UserOrder;
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = "farm_city_registered_users";
const CURRENT_USER_KEY = "farm_city_current_user";
const ORDERS_STORAGE_KEY = "farm_city_user_orders";
const FAVORITES_STORAGE_KEY = "farm_city_user_favorites";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [orders, setOrders] = useState<UserOrder[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load state on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const savedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      if (savedUsers) setUsers(JSON.parse(savedUsers));

      const savedCurrentUser = localStorage.getItem(CURRENT_USER_KEY);
      if (savedCurrentUser) setCurrentUser(JSON.parse(savedCurrentUser));

      const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (savedOrders) setOrders(JSON.parse(savedOrders));

      const savedFavs = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
    } catch (err) {
      console.error("Failed to load auth state from localStorage", err);
    }
  }, []);

  const register = (data: Omit<UserProfile, "id" | "createdAt">) => {
    // Validate if email or phone already exists
    const existing = users.find(
      (u) =>
        (data.email && u.email.toLowerCase() === data.email.toLowerCase()) ||
        (data.phone && u.phone === data.phone)
    );

    if (existing) {
      return { success: false, error: "An account with this email or phone number already exists." };
    }

    const newUser: UserProfile = {
      ...data,
      id: "usr_" + Date.now(),
      createdAt: new Date().toLocaleDateString("en-KE", { dateStyle: "medium" }),
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setCurrentUser(newUser);

    if (typeof window !== "undefined") {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    }

    return { success: true };
  };

  const login = (emailOrPhone: string, password?: string) => {
    const query = emailOrPhone.trim().toLowerCase();
    const user = users.find(
      (u) => u.email.toLowerCase() === query || u.phone.trim() === query
    );

    if (!user) {
      return { success: false, error: "No account found matching those credentials." };
    }

    if (password && user.password && user.password !== password) {
      return { success: false, error: "Incorrect password. Please try again." };
    }

    setCurrentUser(user);
    if (typeof window !== "undefined") {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    }

    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (!currentUser) return;

    const updated = { ...currentUser, ...data };
    setCurrentUser(updated);

    const updatedUsers = users.map((u) => (u.id === currentUser.id ? updated : u));
    setUsers(updatedUsers);

    if (typeof window !== "undefined") {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updated));
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    }
  };

  const addOrder = (orderData: Omit<UserOrder, "id" | "userId" | "date" | "status">) => {
    const newOrder: UserOrder = {
      ...orderData,
      id: "FC-ORD-" + Math.floor(100000 + Math.random() * 900000),
      userId: currentUser ? currentUser.id : "guest",
      date: new Date().toLocaleDateString("en-KE", { dateStyle: "medium" }),
      status: "Processing",
    };

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);

    if (typeof window !== "undefined") {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedOrders));
    }

    return newOrder;
  };

  const userOrders = orders.filter((o) => (currentUser ? o.userId === currentUser.id : false));

  const toggleFavorite = (productId: string) => {
    let updated: string[];
    if (favorites.includes(productId)) {
      updated = favorites.filter((id) => id !== productId);
    } else {
      updated = [...favorites, productId];
    }
    setFavorites(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        updateProfile,
        userOrders,
        addOrder,
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

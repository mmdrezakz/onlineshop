import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// provider
export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
});


  useEffect(() => {
    // هر بار که cartItems تغییر کرد، ذخیره کن
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (!item || !item.id) return;

    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    if (!id) return;
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ removeFromCart, addToCart, cartItems }}>
  {children}
</CartContext.Provider>

  );
};
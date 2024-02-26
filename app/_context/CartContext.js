"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [showMenu, setShowMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        showMenu,
        setShowMenu,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};
export { CartProvider, useCart };

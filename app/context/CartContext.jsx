"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load cart
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        console.log("LOADED CART FROM LOCAL STORAGE:", parsedCart);

        setCart(parsedCart);
      }
    } catch (error) {
      console.error("LOCAL STORAGE ERROR:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Save cart
  useEffect(() => {
    if (!hydrated) return;

    console.log("SAVING CART:", cart);

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  // ==========================================
  // ADD TO CART
  // ==========================================

  function addToCart(product, quantity) {
    const selectedQuantity = Number(quantity) || 1;

    console.log("ADDING PRODUCT:");
    console.log("Product:", product.title);
    console.log("Quantity:", selectedQuantity);

    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      // Product already exists
      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + selectedQuantity,
              }
            : item
        );
      }

      // New product
      return [
        ...previousCart,
        {
          ...product,
          quantity: selectedQuantity,
        },
      ];
    });
  }

  // ==========================================
  // INCREASE
  // ==========================================

  function increaseQuantity(id) {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // ==========================================
  // DECREASE
  // ==========================================

  function decreaseQuantity(id) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // ==========================================
  // REMOVE
  // ==========================================

  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  // ==========================================
  // CART COUNT
  // ==========================================

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  // ==========================================
  // CART TOTAL
  // ==========================================

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
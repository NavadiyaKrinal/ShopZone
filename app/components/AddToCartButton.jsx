"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function AddToCartButton({
  product,
  quantity,
}) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    console.log("=================================");
    console.log("PRODUCT:", product.title);
    console.log("QUANTITY BEING ADDED:", quantity);
    console.log("=================================");

    addToCart(product, quantity);

    alert(`${product.title} x ${quantity} added to cart!`);
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
    >
      🛒 Add to Cart
    </button>
  );
}
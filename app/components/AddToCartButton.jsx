"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../context/CartContext";

export default function AddToCartButton({
  product,
  quantity,
}) {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  function handleAddToCart() {
    console.log("=================================");
    console.log("PRODUCT:", product.title);
    console.log("QUANTITY BEING ADDED:", quantity);
    console.log("=================================");

    // Add product to cart
    addToCart(product, quantity);

    // Go to cart page
    router.push("/cart");
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
    >
      🛒 Add to Cart
    </button>
  );
}
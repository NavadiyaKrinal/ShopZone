"use client";

import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, cartTotal, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some products before proceeding to checkout.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col">

                  <h2 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-bold text-blue-600">
                    ${item.price}
                  </p>

                  <div className="mt-auto flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-9 w-9 rounded-lg border text-lg"
                    >
                      −
                    </button>

                    <span className="w-8 text-center font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-9 w-9 rounded-lg bg-blue-600 text-lg text-white"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-sm font-semibold text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Order Summary
            </h2>

            <div className="my-5 border-t border-gray-200 dark:border-gray-800" />

            <div className="flex justify-between">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="font-semibold">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-gray-500">
                Shipping
              </span>

              <span className="font-semibold text-green-600">
                FREE
              </span>
            </div>

            <div className="my-5 border-t border-gray-200 dark:border-gray-800" />

            <div className="flex justify-between">
              <span className="text-lg font-bold">
                Total
              </span>

              <span className="text-2xl font-extrabold text-blue-600">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}
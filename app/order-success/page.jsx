"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">

      <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-lg dark:border-gray-800 dark:bg-gray-900">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-extrabold">
          Order Placed!
        </h1>

        <p className="mt-3 leading-7 text-gray-500">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        <Link
          href="/products"
          className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>

      </div>

    </main>
  );
}
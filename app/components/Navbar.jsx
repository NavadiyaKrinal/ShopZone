"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Shop<span className="text-blue-600 dark:text-blue-400">Zone</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">

          {/* Home */}

          <Link
            href="/"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
          >
            Home
          </Link>

          {/* Products */}

          <Link
            href="/products"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
          >
            Products
          </Link>

          {/* Cart */}

          <Link
            href="/cart"
            className="relative ml-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
          >
            <span className="flex items-center gap-1.5">
              🛒 Cart
            </span>

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-xl p-2.5 text-xl text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">

          <div className="flex flex-col gap-1">

            {/* Home */}

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              🏠 Home
            </Link>

            {/* Products */}

            <Link
              href="/products"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              🛍️ Products
            </Link>

            {/* Cart */}

            <Link
              href="/cart"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              <span>🛒 Cart</span>

              {cartCount > 0 && (
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-2 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}
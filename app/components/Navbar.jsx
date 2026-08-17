"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Shop<span className="text-blue-600 dark:text-blue-400">Zone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">

          <Link
            href="/"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="relative rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-lg p-2 text-xl text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col gap-1">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              Products
            </Link>

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 font-medium hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              <span>🛒 Cart</span>

              <span className="rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
                {cartCount}
              </span>
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
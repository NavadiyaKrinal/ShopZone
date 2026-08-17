"use client";

import { useState } from "react";
import Link from "next/link";

import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";
import ProductPagination from "./ProductPagination";

export default function ProductBrowser({
  products,
  categories,
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  // ==============================
  // SEARCH + CATEGORY FILTER
  // ==============================

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const searchMatch =
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // ==============================
  // PAGINATION
  // ==============================

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex =
    (currentPage - 1) * productsPerPage;

  const endIndex =
    startIndex + productsPerPage;

  const displayedProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

  // ==============================
  // SEARCH
  // ==============================

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  // ==============================
  // CATEGORY
  // ==============================

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  // ==============================
  // PAGINATION
  // ==============================

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo(0, 0);
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

      <ProductSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section className="min-w-0 flex-1">

        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">

          <label
            htmlFor="product-search"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Search Products
          </label>

          <div className="relative">

            {/* Search Icon */}
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </div>

            {/* Input */}
            <input
              id="product-search"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by product name..."
              className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3.5 pl-12 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:bg-gray-800 dark:focus:ring-blue-900/30"
            />

            {/* Clear Button */}
            {searchTerm.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ×
              </button>
            )}

          </div>

          {/* Search Result */}
          <div className="mt-3 flex items-center justify-between">

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {searchTerm
                ? `${filteredProducts.length} products found`
                : `${products.length} products available`}
            </p>

            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Clear Search
              </button>
            )}

          </div>

        </div>

        <div className="mb-6 flex items-end justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Collection
            </p>

            <h2 className="mt-1 text-2xl font-bold capitalize text-gray-900 dark:text-white">
              {selectedCategory === "all"
                ? "All Products"
                : selectedCategory}
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Showing {displayedProducts.length} of{" "}
              {filteredProducts.length} products
            </p>

          </div>

        </div>

        {displayedProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {displayedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block h-full"
              >
                <ProductCard product={product} />
              </Link>
            ))}

          </div>

        ) : (

          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl dark:bg-gray-800">
              🔍
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              No Products Found
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Try searching with a different product name.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Clear Filters
            </button>

          </div>

        )}

        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

      </section>
    </div>
  );
}
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

export default function ProductBrowser({
  products = [],
  categories = [],
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const searchMatch =
        search === "" ||
        product.title.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }, [products, selectedCategory, searchTerm]);

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex =
    (currentPage - 1) * productsPerPage;

  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function clearSearch() {
    setSearchTerm("");
    setCurrentPage(1);
  }

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-full">

      {/* Search */}

      <div className="mb-6 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">

        <div className="mb-3 flex items-center justify-between">

          <label
            htmlFor="product-search"
            className="text-sm font-bold text-gray-900 dark:text-white"
          >
            Search Products
          </label>

          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="cursor-pointer text-xs font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Clear
            </button>
          )}

        </div>

        <div className="relative">

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

          <input
            id="product-search"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by product name..."
            className="w-full rounded-xl border border-gray-300 bg-gray-50 py-4 pl-12 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:bg-gray-800 dark:focus:ring-blue-900/30"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ×
            </button>
          )}

        </div>

        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          {searchTerm
            ? `${filteredProducts.length} products found`
            : `${products.length} products available`}
        </p>

      </div>

      {/* Categories */}

      <div className="mb-8 overflow-x-auto">

        <div className="flex min-w-max items-center gap-2">

          {/* All Products */}

          <button
            type="button"
            onClick={() => handleCategoryChange("all")}
            className={`cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white shadow-sm"
                : "border border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            All Products
          </button>

          {/* Categories */}

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold capitalize transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>

      {/* Collection */}

      <div className="mb-6 flex items-end justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
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

      {/* Products */}

      {displayedProducts.length > 0 ? (

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

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
            className="mt-5 cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Clear Filters
          </button>

        </div>

      )}

      {/* Pagination */}

      {totalPages > 1 && (
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

    </div>
  );
}
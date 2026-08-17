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
  const [currentPage, setCurrentPage] = useState(1);

  
  const productsPerPage = 6;

 

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );


  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex =
    (currentPage - 1) * productsPerPage;

  const endIndex =
    startIndex + productsPerPage;

  
  const displayedProducts =
    filteredProducts.slice(
      startIndex,
      endIndex
    );

  

  function handleCategoryChange(category) {
    setSelectedCategory(category);

    // Category change -> page 1
    setCurrentPage(1);
  }

  

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row">

    

      <ProductSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

    

      <section className="min-w-0 flex-1">

        {/* Header */}

        <div className="mb-6">

          <h2 className="text-2xl font-bold capitalize text-white">
            {selectedCategory === "all"
              ? "All Products"
              : selectedCategory}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Showing{" "}
            {displayedProducts.length} of{" "}
            {filteredProducts.length} products
          </p>

        </div>

      

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

  

        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

      </section>
    </div>
  );
}
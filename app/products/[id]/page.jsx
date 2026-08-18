"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import QuantitySelector from "@/app/components/QuantitySelector";
import AddToCartButton from "@/app/components/AddToCartButton";

export default function ProductDetailPage() {
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Product fetch error:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    if (params?.id) {
      fetchProduct();
    }
  }, [params?.id]);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Loading product...
          </p>
        </div>
      </main>
    );
  }

  // ==========================================
  // PRODUCT NOT FOUND
  // ==========================================

  if (!product) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Product Not Found
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            We couldn't find this product.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* =====================================
                PRODUCT IMAGE
            ====================================== */}

            <div className="flex min-h-[450px] items-center justify-center bg-gray-50 p-8 dark:bg-gray-800/50 sm:p-12">

              <img
                src={product.image}
                alt={product.title}
                className="max-h-[420px] max-w-full object-contain transition-transform duration-500 hover:scale-105"
              />

            </div>

            {/* =====================================
                PRODUCT DETAILS
            ====================================== */}

            <div className="p-6 sm:p-8 lg:p-12">

              {/* Category */}

              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                {product.category}
              </span>

              {/* Title */}

              <h1 className="mt-5 text-2xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-3xl">
                {product.title}
              </h1>

              {/* Rating */}

              {product.rating && (
                <div className="mt-4 flex items-center gap-3">

                  <span className="rounded-lg bg-yellow-50 px-3 py-1.5 text-sm font-bold text-gray-900 dark:bg-yellow-900/20 dark:text-white">
                    ⭐ {product.rating.rate}
                  </span>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {product.rating.count} reviews
                  </span>

                </div>
              )}

              {/* Price */}

              <p className="mt-6 text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                ${product.price}
              </p>

              {/* Divider */}

              <div className="my-6 border-t border-gray-200 dark:border-gray-800" />

              {/* Description */}

              <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                Description
              </h2>

              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                {product.description}
              </p>

              {/* Quantity */}

              <QuantitySelector
                quantity={quantity}
                price={product.price}
                onQuantityChange={setQuantity}
              />

              {/* Add To Cart */}

              <AddToCartButton
                product={product}
                quantity={quantity}
              />

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
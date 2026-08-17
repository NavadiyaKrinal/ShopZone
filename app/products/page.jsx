import Link from "next/link";

async function getProducts() {
  const response = await fetch(
    "https://fakestoreapi.com/products",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            ShopZone
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-gray-900 dark:text-white">
            All Products
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Explore our complete product collection.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >

              {/* Image */}
              <div className="flex h-56 items-center justify-center rounded-xl bg-gray-50 p-5 dark:bg-gray-800">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

              </div>

              {/* Details */}
              <div className="mt-4">

                <h2 className="line-clamp-2 min-h-[48px] font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </h2>

                <div className="mt-4 flex items-center justify-between">

                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    ${product.price}
                  </p>

                  <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-700">
                    View
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}
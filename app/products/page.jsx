import ProductBrowser from "../components/ProductBrowser";

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

  const categories = [
    ...new Set(
      products.map((product) => product.category)
    ),
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            ShopZone
          </p>

          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Products
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Explore our collection and find your favorite products.
          </p>

        </div>

        {/* Product Browser */}
        <ProductBrowser
          products={products}
          categories={categories}
        />

      </div>

    </main>
  );
}
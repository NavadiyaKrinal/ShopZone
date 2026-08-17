import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-gray-50 dark:bg-gray-950">

      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Welcome to ShopZone
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Find products you
            <span className="text-blue-600 dark:text-blue-400">
              {" "}love.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Explore our collection of products, choose your favorites,
            and add them to your shopping cart with ease.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/products"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Explore Products
            </Link>

            <Link
              href="/cart"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              View Cart
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}
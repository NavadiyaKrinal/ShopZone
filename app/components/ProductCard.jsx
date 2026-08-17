export default function ProductCard({ product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

      {/* Image */}
      <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-5 dark:bg-gray-800">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col pt-4">

        <h2 className="line-clamp-2 min-h-[48px] text-base font-semibold leading-6 text-gray-900 dark:text-white">
          {product.title}
        </h2>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Price
            </p>

            <p className="mt-1 text-xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price}
            </p>
          </div>

          <span className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-700">
            View
          </span>

        </div>
      </div>
    </div>
  );
}
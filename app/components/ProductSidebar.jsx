"use client";

export default function ProductSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-64">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">

        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Shop
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
            Categories
          </h2>
        </div>

        <div className="space-y-1">

          {/* All Products */}
          <button
            type="button"
            onClick={() => onCategoryChange("all")}
            className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            All Products
          </button>

          {/* API Categories */}
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium capitalize transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}

        </div>
      </div>
    </aside>
  );
}
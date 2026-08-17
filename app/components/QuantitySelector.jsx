"use client";

export default function QuantitySelector({
  quantity,
  price,
  onQuantityChange,
}) {
  const totalPrice = quantity * price;

  function decreaseQuantity() {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  }

  function increaseQuantity() {
    onQuantityChange(quantity + 1);
  }

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Quantity
      </p>

      <div className="flex items-center">

        {/* Minus */}
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantity === 1}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 text-xl font-bold text-gray-900 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          −
        </button>

        {/* Quantity */}
        <span className="flex h-10 w-14 items-center justify-center text-lg font-bold text-gray-900 dark:text-white">
          {quantity}
        </span>

        {/* Plus */}
        <button
          type="button"
          onClick={increaseQuantity}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white transition hover:bg-blue-700"
        >
          +
        </button>

      </div>

      {/* Total */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">

        <span className="text-sm text-gray-500 dark:text-gray-400">
          Total
        </span>

        <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
          ${(quantity * price).toFixed(2)}
        </span>

      </div>
    </div>
  );
}
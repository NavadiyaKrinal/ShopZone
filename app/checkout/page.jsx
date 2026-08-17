"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, cartTotal } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    localStorage.setItem(
      "checkoutDetails",
      JSON.stringify(form)
    );

    router.push("/order-success");
  }

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">

          <h1 className="text-2xl font-bold">
            Your cart is empty
          </h1>

          <button
            onClick={() => router.push("/products")}
            className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Go to Products
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-3xl font-extrabold">
          Checkout
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Customer Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:col-span-2"
          >

            <h2 className="text-xl font-bold">
              Delivery Information
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Full Address"
                required
                rows={4}
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 sm:col-span-2"
              />

            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Place Order
            </button>

          </form>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-5 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 rounded-lg bg-gray-50 object-contain p-2"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-semibold">
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

            </div>

            <div className="my-5 border-t border-gray-200 dark:border-gray-800" />

            <div className="flex justify-between">
              <span className="text-lg font-bold">
                Total
              </span>

              <span className="text-2xl font-extrabold text-blue-600">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
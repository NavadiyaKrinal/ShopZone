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

  if (name === "name") {
    const textOnly = value.replace(/[^a-zA-Z\s]/g, "");

    setForm((previous) => ({
      ...previous,
      name: textOnly,
    }));

    return;
  }

  if (name === "city" || name === "state") {
    const textOnly = value.replace(/[^a-zA-Z\s]/g, "");

    setForm((previous) => ({
      ...previous,
      [name]: textOnly,
    }));

    return;
  }
  if (name === "phone") {
    const numbersOnly = value.replace(/\D/g, "");

    if (numbersOnly.length > 10) {
      return;
    }

    setForm((previous) => ({
      ...previous,
      phone: numbersOnly,
    }));

    return;
  }

  if (name === "pincode") {
    const numbersOnly = value.replace(/\D/g, "");

    if (numbersOnly.length > 6) {
      return;
    }

    setForm((previous) => ({
      ...previous,
      pincode: numbersOnly,
    }));

    return;
  }

  setForm((previous) => ({
    ...previous,
    [name]: value,
  }));
}

  function handleSubmit(event) {
    event.preventDefault();

    // Empty cart
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Phone validation
    if (form.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Pincode validation
    if (form.pincode.length !== 6) {
      alert("Please enter a valid 6-digit pincode.");
      return;
    }

    // Save checkout details
    localStorage.setItem(
      "checkoutDetails",
      JSON.stringify(form)
    );

    // Redirect
    router.push("/order-success");
  }

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">

        <div className="text-center">

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Your cart is empty
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Add some products before proceeding to checkout.
          </p>

          <button
            type="button"
            onClick={() => router.push("/products")}
            className="mt-5 cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
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

        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            ShopZone
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-gray-900 dark:text-white">
            Checkout
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Enter your delivery information to place your order.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:col-span-2"
          >

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Delivery Information
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Please enter your delivery details below.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Full Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />
              </div>

              {/* Phone */}

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  maxLength={10}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />

                <p className="mt-1 text-xs text-gray-400">
                  {form.phone.length}/10 digits
                </p>
              </div>

              {/* Pincode */}

              <div>
                <label
                  htmlFor="pincode"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Pincode
                </label>

                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  inputMode="numeric"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  maxLength={6}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />

                <p className="mt-1 text-xs text-gray-400">
                  {form.pincode.length}/6 digits
                </p>
              </div>

              {/* City */}

              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  City
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />
              </div>

              {/* State */}

              <div>
                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  State
                </label>

                <input
                  id="state"
                  name="state"
                  type="text"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="Enter your state"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />
              </div>

              {/* Address */}

              <div className="sm:col-span-2">

                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Full Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your complete delivery address"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />

              </div>

            </div>

            <button
              type="submit"
              className="mt-6 w-full cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Place Order
            </button>

          </form>

          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Order Summary
            </h2>

            {/* Cart Items */}

            <div className="mt-5 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3"
                >

                  {/* Product Image */}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 shrink-0 rounded-lg bg-gray-50 object-contain p-2 dark:bg-gray-800"
                  />

                  {/* Product Details */}

                  <div className="min-w-0 flex-1">

                    <p className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  {/* Item Price */}

                  <p className="font-semibold text-gray-900 dark:text-white">
                    $
                    {(
                      Number(item.price) *
                      Number(item.quantity)
                    ).toFixed(2)}
                  </p>

                </div>
              ))}

            </div>

            {/* Divider */}

            <div className="my-5 border-t border-gray-200 dark:border-gray-800" />

            {/* Total */}

            <div className="flex items-center justify-between">

              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Total
              </span>

              <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                ${cartTotal.toFixed(2)}
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
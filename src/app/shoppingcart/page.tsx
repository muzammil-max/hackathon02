/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Cart = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-center">
              Shopping Cart
            </h1>
          </div>
          <div className="flex flex-col space-y-8">
            {/* Cart Items */}
            <div className="space-y-6">
              {/* First Item */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-6">
                <div className="flex items-center md:items-start md:flex-row flex-col w-full md:w-auto">
                  <img
                    src="/graystonevase.png"
                    alt="Graystone vase"
                    className="w-24 h-24 object-cover rounded-md shadow"
                  />
                  <div className="ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-lg font-medium">Graystone vase</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      A timeless ceramic vase with a tri-color grey glaze.
                    </p>
                    <p className="text-base font-semibold mt-2">£85</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button className="p-2 border rounded text-gray-500">
                    -
                  </button>
                  <span className="text-lg font-medium">1</span>
                  <button className="p-2 border rounded text-gray-500">
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold mt-4 md:mt-0">£85</p>
              </div>

              {/* Second Item */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-6">
                <div className="flex items-center md:items-start md:flex-row flex-col w-full md:w-auto">
                  <img
                    src="/whitevase.png"
                    alt="Basic white vase"
                    className="w-24 h-24 object-cover rounded-md shadow"
                  />
                  <div className="ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-lg font-medium">Basic white vase</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Beautiful and simple, this is one for the classics.
                    </p>
                    <p className="text-base font-semibold mt-2">£125</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button className="p-2 border rounded text-gray-500">
                    -
                  </button>
                  <span className="text-lg font-medium">1</span>
                  <button className="p-2 border rounded text-gray-500">
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold mt-4 md:mt-0">£125</p>
              </div>
            </div>

            {/* Subtotal and Checkout */}
            <div className="border-t pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Subtotal</h2>
                <p className="text-2xl font-semibold mt-4 md:mt-0">£210</p>
              </div>
              <p className="text-sm text-gray-500 mb-4 text-center md:text-left">
                Taxes and shipping are calculated at checkout
              </p>
              <div className="text-center">
                <button className="bg-indigo-900 hover:bg-indigo-950 duration-100 text-white w-full md:w-40 py-3">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

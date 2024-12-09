/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductListing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <h1 className="text-3xl font-semibold mb-8">All products</h1>
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 pr-8 mb-8 lg:mb-0">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Product type</h2>
              <div className="space-y-2">
                <div>
                  <input type="checkbox" id="furniture" />
                  <label htmlFor="furniture" className="ml-2 text-gray-700">
                    Furniture
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="homeware" />
                  <label htmlFor="homeware" className="ml-2 text-gray-700">
                    Homeware
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="light-fittings" />
                  <label
                    htmlFor="light-fittings"
                    className="ml-2 text-gray-700"
                  >
                    Light fittings
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="accessories" />
                  <label htmlFor="accessories" className="ml-2 text-gray-700">
                    Accessories
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Price</h2>
              <div className="space-y-2">
                <div>
                  <input type="radio" name="price" id="price1" />
                  <label htmlFor="price1" className="ml-2 text-gray-700">
                    £0 - £100
                  </label>
                </div>
                <div>
                  <input type="radio" name="price" id="price2" />
                  <label htmlFor="price2" className="ml-2 text-gray-700">
                    £101 - £250
                  </label>
                </div>
                <div>
                  <input type="radio" name="price" id="price3" />
                  <label htmlFor="price3" className="ml-2 text-gray-700">
                    £250 +
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Designer</h2>
              <div className="space-y-2">
                <div>
                  <input type="checkbox" id="designer1" />
                  <label htmlFor="designer1" className="ml-2 text-gray-700">
                    Robert Smith
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="designer2" />
                  <label htmlFor="designer2" className="ml-2 text-gray-700">
                    Liam Gallagher
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="designer3" />
                  <label htmlFor="designer3" className="ml-2 text-gray-700">
                    Biggie Smalls
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="designer4" />
                  <label htmlFor="designer4" className="ml-2 text-gray-700">
                    Thom Yorke
                  </label>
                </div>
              </div>
            </div>
          </aside>
          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="text-center">
                  <img
                    src={`/${index + 1}.png`}
                    alt={`Product ${index + 1}`}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-medium">The Dandy Chair</h3>
                  <p className="text-gray-700 mt-1">£250</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

import React from "react";
import { LuLeaf } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#322759] text-white p-8 md:p-16">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            The furniture brand for the future, with timeless designs
          </h1>
          <p className="text-lg md:text-xl">
            A new era in eco-friendly furniture with Axelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-[#322759] font-semibold rounded shadow hover:bg-gray-100 transition">
            View collection
          </button>
        </div>
        {/* Right Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/chair.png" // Replace with the path to your chair image
            alt="A stylish chair"
            className="w-2/3 md:w-full h-auto"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="p-8 md:p-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <CiDeliveryTruck className="mx-auto mb-4 text-3xl text-[#322759]" />
            <h3 className="font-semibold">Next day as standard</h3>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div>
            <FaRegCheckCircle className="mx-auto mb-4 text-3xl text-[#322759]" />
            <h3 className="font-semibold">Made by true artisans</h3>
            <p>
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          <div>
            <CiCreditCard1 className="mx-auto mb-4 text-3xl text-[#322759]" />
            <h3 className="font-semibold">Unbeatable prices</h3>
            <p>
              For our materials and quality, you won’t find better prices
              anywhere
            </p>
          </div>
          <div>
            <LuLeaf className="mx-auto mb-4 text-3xl text-[#322759]" />
            <h3 className="font-semibold">Recycled packaging</h3>
            <p>
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>

      {/* New Ceramics Section */}
      <div className="p-8 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          New ceramics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center hover:scale-110 transition-transform duration-150">
            <Link href="/product1">
              <img
                src="/chair1.png" // Replace with your product images
                alt="The Dandy Chair"
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">The Dandy Chair</h3>
              <p>£250</p>
            </Link>
          </div>
          <div className="text-center hover:scale-110 transition-transform duration-150">
            <Link href="/product3">
              <img
                src="/vase.png"
                alt="Rustic Vase Set"
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">Rustic Vase Set</h3>
              <p>£155</p>
            </Link>
          </div>
          <div className="text-center hover:scale-110 transition-transform duration-150">
            <Link href="/product4">
              <img
                src="/silkyvase.png"
                alt="The Silky Vase"
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">The Silky Vase</h3>
              <p>£125</p>
            </Link>
          </div>
          <div className="text-center hover:scale-110 transition-transform duration-150">
            <Link href="/product2">
              <img
                src="/lamp.png"
                alt="The Lucy Lamp"
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">The Lucy Lamp</h3>
              <p>£399</p>
            </Link>
          </div>
        </div>
        <div className="flex text-center justify-center mt-4">
          <button className="bg-slate-600 px-3 py-3 rounded text-white hover:bg-slate-800 duration-150">
            View Collection
          </button>
        </div>
      </div>

      {/* More Products Section */}
      <div className="mx-8 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our popular products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="w-full group">
            <img
              src="/sofa.webp"
              alt="sofa"
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="mt-4 text-[#2A254B] text-center">
              <p className="py-2">The popular suede sofa</p>
              <p>$980</p>
            </div>
          </div>
          <div className="w-full group">
            <img
              src="/chair.png"
              alt="chair"
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="mt-4 text-[#2A254B] text-center">
              <p className="py-2">The Dandy Chair</p>
              <p>$250</p>
            </div>
          </div>
          <div className="w-full group">
            <img
              src="/woodchair.webp"
              alt="wood chair"
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="mt-4 text-[#2A254B] text-center">
              <p className="py-2">The Wooden Chair</p>
              <p>$250</p>
            </div>
          </div>
        </div>
        <div className="flex text-center justify-center mt-4">
          <button className="bg-slate-600 px-3 py-3 rounded text-white hover:bg-slate-800 duration-150">
            View Collection
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center p-8">
        <h3 className="font-bold text-2xl md:text-3xl text-[#28213f]">
          Join the club and get the benefits
        </h3>
        <p className="mt-3">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-4 gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-gray-100 border border-gray-200 py-2 px-4 text-sm w-full md:w-auto"
          />
          <button className="bg-[#28213f] hover:bg-[#191526] duration-100 text-white font-bold py-2 px-4">
            Sign Up
          </button>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                From a studio in London to a global brand with over 400 outlets
              </h2>
              <p className="text-lg leading-relaxed">
                When we started Avion, the idea was simple: Make high-quality
                furniture affordable and available for the mass market.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Handmade and lovingly crafted furniture and homeware is what we
                live, breathe, and design, so our Chelsea boutique became the
                hotbed for the London interior design community.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 duration-100 text-white font-bold py-2 px-4 rounded mt-6">
                Get in Touch
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="./sofa2.png"
                alt="Avion Furniture"
                className="w-3/4 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

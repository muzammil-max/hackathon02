"use client";
import Link from "next/link";
import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for the hamburger menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const menuItems = [
    "Plant pots",
    "Ceramics",
    "Tables",
    "Chairs",
    "Crockery",
    "Tableware",
    "Cutlery",
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Avion
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden text-2xl text-gray-600 cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Center Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section - Utility Links and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* About Us */}
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-black transition"
          >
            About us
          </Link>
          {/* Contact */}
          <Link
            href="/products"
            className="text-sm font-medium text-gray-600 hover:text-black transition"
          >
            Products
          </Link>
          {/* Search Icon */}
          <CiSearch className="text-xl text-gray-600 hover:text-black cursor-pointer transition" />
          {/* Cart Icon */}
          <Link href="/shoppingcart">
            <CiShoppingCart className="text-xl text-gray-600 hover:text-black cursor-pointer transition" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-black transition"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

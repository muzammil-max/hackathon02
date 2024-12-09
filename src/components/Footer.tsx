import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#322759] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 duration-150 cursor-default">
                New arrivals
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Best sellers
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Recently viewed
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Popular this week
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                All products
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Crockery
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Furniture
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Homeware
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Plant pots
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Chairs
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="font-semibold mb-4">Our company</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 duration-150 cursor-default">
                About us
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Vacancies
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Contact us
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Privacy
              </li>
              <li className="hover:text-gray-400 duration-150 cursor-default">
                Returns policy
              </li>
            </ul>
          </div>

          {/* Mailing List */}
          <div>
            <h3 className="font-semibold mb-4">Join our mailing list</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 bg-[#4c3b6a] text-white border-none rounded-l w-full"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-[#322759] font-semibold rounded-r"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright 2024 Avion LTD</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a>
              <FaFacebook className="hover:text-blue-500 duration-100" />
            </a>
            <a>
              <FaLinkedin className="hover:text-blue-700 duration-100" />
            </a>
            <a>
              <FaInstagram className="hover:text-pink-500 duration-100" />
            </a>
            <a>
              <FaSkype className="hover:text-cyan-300 duration-100" />
            </a>
            <a>
              <FaXTwitter className="hover:text-black duration-100" />
            </a>
            <a>
              <FaPinterest className="hover:text-red-500 duration-100" />
            </a>

            {/* <a href="#" aria-label="LinkedIn">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/facebook-icon.svg" alt="Facebook" className="h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/instagram-icon.svg" alt="Instagram" className="h-5" />
            </a>
            <a href="#" aria-label="Skype">
              <img src="/skype-icon.svg" alt="Skype" className="h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/twitter-icon.svg" alt="Twitter" className="h-5" />
            </a>
            <a href="#" aria-label="Pinterest">
              <img src="/pinterest-icon.svg" alt="Pinterest" className="h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

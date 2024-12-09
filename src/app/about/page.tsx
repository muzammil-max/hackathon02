/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding
          customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="bg-indigo-700 w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-black bg-white hover:bg-black   hover:text-white duration-100 ">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img
            src="/main.png"
            alt="About main"
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <img
          src="/main2.png"
          alt="Service"
          className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually
            hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market. Handmade,
            and lovingly crafted furniture and homeware is what we live,
            breathe, and design so our Chelsea boutique became the hotbed for
            the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-xl">
          What makes our brand different
        </h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/Delivery.png",

              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/card1.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/leaf.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white  w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                height="50px"
                width="50px"
                className="mx-auto transition-transform duration-300 ease-in-out hover:scale-100 hover:translate-y-1"
              />
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
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
    </div>
  );
};

export default About;

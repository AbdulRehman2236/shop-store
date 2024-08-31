import React from "react";
import { ABOUT_IMG } from "../utils/constants";

const About = () => {
  return (
    <section className="dark:bg-gray-100 h-full min-h-[90vh] flex-col items-center justify-center dark:text-gray-800">
      <h1 className="font-bold text-center pt-8 text-2xl mb-8 sm:mb-0 sm:mt-0">ABOUT US</h1>

      <div className="container max-w-6xl sm:p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full sm:flex justify-center group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <div className="lg:col-span-4 md:col-span-5 sm:w-full sm:mb-4 flex items-center justify-center">
            <img src={ABOUT_IMG} alt="About Us" className="object-cover w-full h-48 sm:h-60 md:h-72 lg:h-96 rounded" />
          </div>

          <div className="lg:col-span-8 md:col-span-7 p-6 space-y-3">
            <span className="text-xs font-semibold dark:text-gray-600">
              Welcome to [Your Website Name], where we bring you an unparalleled online shopping experience. Our journey
              began with a simple idea: to offer our customers a diverse range of high-quality products at unbeatable
              prices, all from the comfort of their homes. At [Your Website Name], we believe that shopping should be
              easy, enjoyable, and accessible to everyone. Whether you’re looking for the latest trends, timeless
              classics, or the perfect gift, our carefully curated collections are designed to meet your needs and
              exceed your expectations.
            </span>

            <h3 className="text-xl font-bold">Our Mission</h3>
            <span className="text-xs font-semibold dark:text-gray-600">
              Our mission is to empower our customers by offering an extensive selection of quality products, excellent
              customer service, and a seamless online shopping experience. We strive to be a leader in the eCommerce
              industry, setting the standard for reliability, innovation, and customer satisfaction. Our goal is to make
              shopping not just a necessity, but a joy, bringing the best products from around the world right to your
              doorstep.
            </span>

            <h3 className="text-xl font-bold">Our Values</h3>
            <span className="text-xs font-semibold dark:text-gray-600">
              We’re committed to providing exceptional customer service, ensuring that every shopping experience is
              seamless and satisfying. Our team works tirelessly to source the best products, partner with trusted
              suppliers, and deliver your purchases quickly and reliably. We value transparency, trust, and quality, and
              these principles guide everything we do.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

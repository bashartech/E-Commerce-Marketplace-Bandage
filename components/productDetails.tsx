"use client";

import { useCart } from "@/components/cartContext";
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  image: string;
}

export default function ProductDetails({
  product,
}: {
  product: Product | null;
}) {
  const { addToCart } = useCart();

  if (!product) {
    return (
      <p className="text-center text-lg text-gray-600">
        Product not found. Please check the product name and try again.
      </p>
    );
  }

  return (
    
    <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="main my-8 md:my-14 w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-5 gap-5 md:grid-rows-4 p-6">
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={urlFor(product.image).width(170).height(138).url()}
              alt="Product thumbnail"
              width={170}
              height={138}
              className="object-cover rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div 
            className="col-span-full md:col-span-2 md:row-span-5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={urlFor(product.image).width(500).height(600).url()}
              alt={product.name}
              width={500}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="col-span-full md:col-span-2 md:row-span-5 flex flex-col justify-center items-start space-y-4">
            <motion.h1 
              className="text-2xl md:text-3xl font-semibold text-blue-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {product.name}
            </motion.h1>
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`bx bxs-star ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                ></i>
              ))}
              <span className="text-sm text-gray-600">
                ({product.ratingCount} Reviews) |{" "}
              </span>
              <span className="text-sm text-green-500">In Stock</span>
            </motion.div>
            <motion.p 
              className="text-2xl font-bold text-blue-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              ${product.price.toFixed(2)}
            </motion.p>
            <motion.p 
              className="text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {product.description}
            </motion.p>
            <div className="w-full h-px bg-gray-200 my-4"></div>
            <div className="space-y-4 w-full">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h2 className="text-lg text-blue-900 font-medium">Colors:</h2>
                <div className="flex space-x-2">
                  <motion.button 
                    className="w-6 h-6 bg-blue-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.button>
                  <motion.button 
                    className="w-6 h-6 bg-red-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.button>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <h2 className="text-lg font-medium text-blue-900">Size:</h2>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.button
                  className="bg-blue-900 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    addToCart({
                      id: product._id,
                      title: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.image,
                      description: product.description,
                    })
                  }
                >
                  Add to Cart
                </motion.button>
                <motion.button 
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
      
    </>
  );
}

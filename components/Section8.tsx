"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  image: any;
  slug: {
    current: string;
  };
}
export default function Section8() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchBar, setSearchBar] = useState<string>("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch('*[_type == "product"]');
        setProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const filterProduct = products.filter (product =>
product.name.toLowerCase().includes(searchBar.toLowerCase()   )
  )
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div id="shopItem" className="overflow-hidden">
        {/* <div className='mb-8 animate-fade-in'>
      <input 
        value={searchBar} 
        onChange={(e) => setSearchBar(e.target.value)} 
        placeholder='Enter a blog title'
        className="bg-gray-800 text-white border-gray-700 focus:border-teal-400 transition-all duration-300"
      />
    </div> */}
     <div className='mb-8 animate-fade-in w-full max-w-2xl mx-auto'>
      <div className="relative">
        <input 
          value={searchBar} 
          onChange={(e) => setSearchBar(e.target.value)} 
          placeholder='Search product categories...'
          className="w-full py-3 pl-4 pr-12 text-gray-800 bg-white border-2 border-gray-600 rounded-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {['Men', 'Women' ].map((category) => (
          <button
            key={category}
            onClick={() => setSearchBar(category)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
      <div className="lg:w-screen  flex justify-center items-center ">
        <div className="lg:w-[1124px] flex flex-col justify-center gap-10 lg:items-start items-center mt-5 h-full">
          <div className="text flex flex-col justify-start gap-3 items-center">
            <p>Made By Bashar All Right Reserved </p>
          </div>
          <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {filterProduct.length > 0 ? (
            filterProduct.map((item, index) => (
              <motion.div
                key={item._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 w-full">
                  {item.image ? (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <p className="text-gray-500">No image available</p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow p-6">
                  <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-1">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-green-600">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  {item.slug ? (
                    <Link href={`/shop/${item.slug.current || item.slug}`}>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                        View More
                      </button>
                    </Link>
                  ) : (
                    <p className="text-red-500 text-center">Product unavailable</p>
                  )}
                </div>
              </motion.div>
            ))
        ):(
            <p className="text-white col-span-full text-center animate-fade-in">No items found</p>  
        )
        
        }

      </div>
    </div>
          

        </div>
      </div>
    </div>
  );
}


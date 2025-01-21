
import { Suspense } from 'react';
import { client } from '@/sanity/lib/client';
import ProductDetails from "@/components/productDetails"; // Move ProductDetails to its own Client Component file
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import Section2 from '@/components/Section2';
import Section29 from '@/components/Section29';
import { motion } from 'framer-motion';


async function getProduct(productSlug: string) {
  const query = `
  *[_type == "product" && slug.current == $slug][0] {
    title,
    price,
    tags[],
    _id,
    discountPercentage,
    description,
    "slug": slug.current,
    "imageUrl": productImage.asset->url
  }`
      ; try {
    return await client.fetch(query, { slug: productSlug });
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// const ProductLoader = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-white">
//       <motion.div
//         className="w-32 h-32 border-t-4 border-blue-500 rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.h2
//         className="mt-8 text-2xl font-semibold text-blue-900"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//       >
//         Loading Product Details
//       </motion.h2>
//       <motion.div
//         className="mt-4 flex space-x-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.5 }}
//       >
//         {[0, 1, 2].map((index) => (
//           <motion.div
//             key={index}
//             className="w-3 h-3 bg-blue-500 rounded-full"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [1, 0.5, 1],
//             }}
//             transition={{
//               duration: 1,
//               repeat: Infinity,
//               delay: index * 0.2,
//             }}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

export default async function ProductPage({ params }: { params: { item: string } }) {
  const product = await getProduct(params.item);

  return (
    <>
    <div className='overflow-hidden'>
     <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      
      <Header2/>
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-white text-white p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-900">
          Product Details
          
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetails product={product} />
        </Suspense>
      </div>
      <div>
        <Section2/>
      <Section29/>
      </div>
        <Footer/>
    </div>
    {/* <div className='overflow-hidden'>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      
      <Header2 />
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-white text-white p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-900">
          Product Details
        </h1>
        <Suspense fallback={<ProductLoader />}>
          <ProductDetails product={product} />
        </Suspense>
      </div>
      <div>
        <Section2 />
        <Section29 />
      </div>
      <Footer />
    </div> */}
    </>
  );
}

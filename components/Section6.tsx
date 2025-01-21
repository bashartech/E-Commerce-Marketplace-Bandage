// import React from 'react'
import Header1b from './Header1b'
import Header2 from './Header2'
// import Image from "next/image";
// import Link from 'next/link';

// export default function Section6() {

//   return (
//     <div>
//         <link
//             href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
//             rel="stylesheet"
//           />
//       <Header1b/>
//       <Header2/>
//       <div>
//         <div className='lg:w-screen flex justify-center  items-center h-[92px]'
//         >
//             <div className='w-[1049px] h-full flex md:justify-between justify-around items-center'>
//             <h1 className='text-[20px] font-bold text-[#252B42]'>Shop</h1>
//             <div className='flex'>
//                 <h1 className=' text-[#252B42]'>Home</h1>
//                 <i className='bx bx-chevron-right text-2xl'  ></i>
//                 <h1>Shop</h1>
//             </div>
//             </div>

//         </div>
//         <div className='lg:w-screen lg:h-[271px] flex justify-center items-center'>
//         <Link href={"/shop#shopItem"}>
//             <div className='lg:w-[1088px] md:h-full'>
//                 <div className="items grid lg:grid-cols-5 md:grid-cols-2 gap-4">
               
//                 <Image
                
//                     src={"/images/img99.webp"}
//                     alt="hero image"
//                     width={348}
//                     height={300}
//                   ></Image>
               
               
//                   <Image
//                     src={"/images/img100.jpeg"}
//                     alt="hero image"
//                     width={348}
//                     height={300}
//                   ></Image>
               
               
//                   <Image
//                     src={"/images/img101.webp"}
//                     alt="hero image"
//                     width={348}
//                     height={300}
//                   ></Image>
//                   <Image
//                     src={"/images/img102.webp"}
//                     alt="hero image"
//                     width={348}
//                     height={300}
//                   ></Image>
//                   <Image
//                     src={"/images/img103.webp"}
//                     alt="hero image"
//                     width={348}
//                     height={300}
//                   ></Image>

//                 </div>

//             </div>
//         </Link>
//  </div>
 


//       </div>
//     </div>
//   )
// }

import Image from 'next/image';

const MyComponent = () => {
  return (
    <div className="">
       <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      <Header1b/>
      <Header2/>
      <div className="flex lg:hidden justify-center items-center py-8">
  <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
    Shop
  </h2>
</div>
      <div className="items lg:grid hidden  lg:grid-cols-5 md:grid-cols-2 gap-4">
        {[99, 100, 101, 102, 103].map((imgNum) => (
          <div key={imgNum} className="relative w-full aspect-square">
            <Image
              src={`/images/img${imgNum}.${imgNum === 100 ? 'jpeg' : 'webp'}`}
              alt={`Product image ${imgNum}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MyComponent;
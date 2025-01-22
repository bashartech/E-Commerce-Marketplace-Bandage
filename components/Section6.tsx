import Header1b from './Header1b'
import Header2 from './Header2'
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
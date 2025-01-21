// import { createClient } from '@sanity/client'
// import axios from 'axios'
// import dotenv from 'dotenv'
// import { fileURLToPath } from 'url'
// import path from 'path'

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') })
// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
//   apiVersion: '2021-08-31'
// })
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`)
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
//     const buffer = Buffer.from(response.data)
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop()
//     })
//     console.log(`Image uploaded successfully: ${asset._id}`)
//     return asset._id
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error)
//     return null
//   }
// }
// async function importData() {
//   try {
//     console.log('Fetching products from API...')
//     const response = await axios.get(
//       // ' https://fakestoreapi.com/products '
//       "https://template6-six.vercel.app/api/products"
//        )
//     const products = response.data
//     console.log(`Fetched ${products.length} products`)
//     for (const product of products) {
//       console.log(`Processing product: ${product.title}`)
//       let imageRef = null
//       if (product.imageUrl) {
//         imageRef = await uploadImageToSanity(product.imageUrl)
//       }
//       // const sanityProduct = {
//       //   _type: 'product',
//       //   name: product.title,
//       //   description: product.description,
//       //   price: product.price,
//       //   discountPercentage: 0,
//       //   priceWithoutDiscount: product.price,
//       //   rating: product.rating?.rate || 0,
//       //   ratingCount: product.rating?.count || 0,
//       //   tags: product.category ? [product.category] : [],
//       //   sizes: [],
//       //   image: imageRef ? {
//       //     _type: 'image',
//       //     asset: {
//       //       _type: 'reference',
//       //       _ref: imageRef,
//       //     },
//       //   } : undefined,
//       // }
//       const sanityProduct = {
//         _type: 'product',
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         discountPercentage: product.dicountPercentage || 0, // Note the typo in API response
//         tags: product.tags || [],
//         image: imageRef ? {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageRef,
//           },
//         } : undefined,
//         isNew: product.isNew || false,
//         _id: product._id,
//       }
//       console.log('Uploading product to Sanity:', sanityProduct.name)
//       const result = await client.create(sanityProduct)
//       console.log(`Product uploaded successfully: ${result._id}`)
//     }
//     console.log('Data import completed successfully!')
//   } catch (error) {
//     console.error('Error importing data:', error)
//   }
// }
// importData()




// import { createClient } from '@sanity/client'
// import axios from 'axios'
// import dotenv from 'dotenv'
// import { fileURLToPath } from 'url'
// import path from 'path'

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
//   apiVersion: '2021-08-31'
// })

// // async function uploadImageToSanity(imageUrl) {
// //   try {
// //     console.log(`Uploading image: ${imageUrl}`)
// //     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
// //     const buffer = Buffer.from(response.data)
// //     const asset = await client.assets.upload('image', buffer, {
// //       filename: imageUrl.split('/').pop()
// //     })
// //     console.log(`Image uploaded successfully: ${asset._id}`)
// //     return asset._id
// //   } catch (error) {
// //     console.error('Failed to upload image:', imageUrl, error)
// //     return null
// //   }
// // }

// // async function importData() {
// //   try {
// //     console.log('Fetching products from API...')
// //     const response = await axios.get("https://template6-six.vercel.app/api/products")
// //     const products = response.data
// //     console.log(`Fetched ${products.length} products`)

// //     for (const product of products) {
// //       console.log("All Products",product)
// //       console.log(`Processing product: ${product.title}`)

// //       let imageRef = null
// //        if (product.imageUrl) {
// //         imageRef = await uploadImageToSanity(product.imageUrl)
// //       }
// //       const sanityProduct = {
// //         _type: 'product',
// //         title: product.title,
// //         description: product.description,
// //         price: product.price,
// //         discountPercentage: product.dicountPercentage || 0, // Note the typo in API response
// //         tags: product.tags && Array.isArray(product.tags) ? product.tags : [],

// //         // image: imageAsset,
// //         image: imageRef ? {
// //           _type: 'image',
// //           asset: {
// //             _type: 'reference',
// //             _ref: imageRef,
// //           },
// //         } : undefined,
// //         isNew: product.isNew || false,
// //         _id: product._id,
// //       }

// //       // console.log('Uploading product to Sanity:', sanityProduct.title)
// //       // const result = await client.createOrReplace(sanityProduct)
// //       // console.log(`Product uploaded successfully: ${result._id}`)
// //       console.log("All product", product.imageUrl)
// //       console.log('Uploading product to Sanity:', sanityProduct.title);
// //       const result = await client.createOrReplace(sanityProduct);
// //       console.log(`Product uploaded successfully: ${result._id}`);

// //     }

// //     console.log('Data import completed successfully!')
// //   } catch (error) {
// //     console.error('Error importing data:', error)
// //   }
// // }

// // importData()

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     const asset = await client.assets.upload('image', bufferImage, {
//       filename: imageUrl.split('/').pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product) {
//   try {
//     const imageId = await uploadImageToSanity(product.imageUrl);

//     if (imageId) {
//       const document = {
//         _type: 'product',
//         title: product.title,
//         price: product.price,
//         productImage: {
//           _type: 'image',
//           asset: {
//             _ref: imageId,
//           },
//         },
//         tags: product.tags,
//         discountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
//         description: product.description,
//         isNew: product.isNew,
//       };

//       const createdProduct = await client.create(document);
//       console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
//     } else {
//       console.log(`Product ${product.title} skipped due to image upload failure.`);
//     }
//   } catch (error) {
//     console.error('Error uploading product:', error);
//   }
// }

// async function importProducts() {
//   try {
//     const response = await fetch('https://template6-six.vercel.app/api/products');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const products = await response.json();

//     for (const product of products) {
//       await uploadProduct(product);
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }

// importProducts();



import { createClient } from '@sanity/client';

const client = createClient({
  projectId:"9l8isk0g",
  dataset: 'produce',
  useCdn: true,
  apiVersion: '2025-01-13',
  token:"skW2jPCZH6AsnnlTunoCx3Fe0IJpNQYu8kQcML1hDLmOqq1Tmryt4h3rwgv6WUCODYrqnEC1ZAPLnDohzVVvoJWYwvNmm0t9GSjaD12cKP2sPxwWk0nYGrVaCTbjv0TaTsTJJgVLVCWvZzZxiv7BmLUfWF4mK05CH30GKeLD9ElgfvJF6qUh",
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();

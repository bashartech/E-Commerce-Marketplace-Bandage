export const fetchData = async(): Promise<void>=>{
    try {
        const res = await fetch("https://template6-six.vercel.app/api/products");
        if (!res.ok){
            throw new Error(`Failed to fetch products: ${res.statusText}`)
        }
        console.log(res)

        const {products} = await res.json()
        console.log(products)

        



    } catch (error) {
        
    }
}
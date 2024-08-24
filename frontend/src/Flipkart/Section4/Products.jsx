import { useEffect, useState } from "react";
import axios from "axios"
import ProductType from "./ProductType";


const Products = () => {
    let [products, setProducts] = useState([]);
    let [cloths , setCloths]=useState([])
    let [jewellery , setJewellery]=useState([])
    let [electronics , setElectronics]=useState([])

    const getProducts = async () => {
        try {
            let { data } = await axios.get("https://fakestoreapi.com/products")
            
          setCloths(data.filter((p)=>{
            return p.category.includes("cloth")
          }))
          setElectronics(data.filter((p)=>{
            return p.category.includes("electron")
          }))
          setJewellery(data.filter((p)=>{
            return p.category.includes("jewel")
          }))


        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProducts();
    })
    return (
        <>
            <ProductType products={cloths} type="CLOTHING" />
            <ProductType products={jewellery} type="JEWELLERY" />
            <ProductType products={electronics} type="ELECTRONICS" />
        </>

    )
}
export default Products
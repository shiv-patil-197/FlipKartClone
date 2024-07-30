import productStyle from "./ProductType.module.css"
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";



  const ProductType =({products, type})=>{


      return (
        <section className={productStyle.AllProductsSection}>
        <div className={productStyle.productsTitle}><h1>{type}</h1></div>
        <div className={productStyle.productsDiv}>
            {products.map(({ id, title, price, description, category, image, rating: { rate, count } }) => {
                return <div className={productStyle.productDiv} key={id}>
                    <div><img src={image} alt="" /></div>
                    <div><h3>{title.slice(0, 25)}...</h3></div>
                    <div><h4><FaRupeeSign />{price}</h4></div>
                    <div><span>{`${rate}`}</span><FaStar /></div>
                </div>
            })}
        </div>
        </section>
      )
  }
  export default ProductType
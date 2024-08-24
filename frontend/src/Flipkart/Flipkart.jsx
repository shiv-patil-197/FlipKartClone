import "./Flipkart.css"
import Section1_Navbar from "./Section1/Section1_Navbar"
import Section2_Categories from "./Section2/Section2_Categories";
import Section3_Images from "./Section3/Section3_Images";
import Products from "./Section4/Products";


function Flipkart() { 
    return (
        <>
        <div id="MainContainer">  
                <Section1_Navbar/>
                <Section2_Categories/>
                <Section3_Images/>
                <Products/>
        </div>
        </>
    )

}
 
export default Flipkart
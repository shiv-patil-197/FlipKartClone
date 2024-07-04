import categories from "../Catogories.json"
import { IoIosArrowDown } from "react-icons/io";
import Subcategory from "../SubCategory";
import "./Section2_Categories.css"


function Section2_Categories(){
console.log(categories);
  return(
    <div id="container2">
    <div id="box1" className="category">
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="" />
        <span>Grocery</span>
    </div>
    <div id="box2" className="category">
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="" />
        <span>Mobiles</span>
    </div>
    <div id="box3" className="category">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
        <div><span>Fashion</span><i className="icon"><IoIosArrowDown/></i></div>
         <Subcategory category={categories.Fashion} />
    </div>
    <div id="box4" className="category">
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="" />
        <div><span>Electronics</span><i className="icon"><IoIosArrowDown/></i></div>
        <Subcategory category={categories.Electronics}/>
    </div>
    <div id="box5" className="category"                >
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
        <div><span>Home& Furniture</span><i className="icon"><IoIosArrowDown/></i></div>
        <Subcategory category={categories["Home&Furniture"]}/>
    </div>
    <div id="box6" className="category">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" />
        <span>Appliences</span>
    </div>
    <div id="box7" className="category">
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" />
        <span>Travel</span>
    </div>
    <div id="box8" className="category">
        <img src="https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" alt="" />
        <div><span>Beauty Toys and More</span><i className="icon"><IoIosArrowDown/></i></div>
        <Subcategory category={categories.BeautyToys}/>
    </div>
    <div id="box9" className="category">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100" alt="" />
        <div><span>Two Wheelers</span><i className="icon"><IoIosArrowDown/></i></div>
        <Subcategory category={categories.TwoWheelers}/>
    </div>
</div>
  )
}
export default Section2_Categories
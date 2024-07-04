import SubnavBar from "../SubnavBar";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import categories from "../Catogories.json"
import "./Section1_Navbar.css"

function Section1_Navbar(){
return (
    <div id="container1">
                    <img id="logo" className="subclass" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" height="50%" width="10%" alt="" title="Flipkart" />
                    <div id="searchDiv" className="subclass">
                        <div id="d1">
                            <div title="Search Icon"><CiSearch/></div>
                        </div>
                        <div id="d2">
                            <input type="search" placeholder=" Search for Products, Brands and More" title="Search for Products, Brands and More" />
                        </div>
                    </div>
                    <div id="div1" className="subclass" >
                        <div id="has-subnavDIV">
                            <ul className="nav">
                                <li className="has-subnav">
                                    <div id="subDiv1">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />
                                        <Link to="/login"> <span>Login</span></Link>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="" />
                                    </div>
                                    <SubnavBar category={categories.Login}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="div2" className="subclass" title="Cart">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />
                        <span> Cart</span>
                    </div>
                    <div id="div3" className="subclass" title="Become a Seller">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" />
                        <span> Become a Seller</span>
                    </div>
                    <div id="div4" className="subclass">
                        <div>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" />
                        </div>
                        <SubnavBar category={categories.hamBurger} />
                    </div>
                </div>
  )
}
export default Section1_Navbar
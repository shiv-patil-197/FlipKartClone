import React, { useEffect, useRef } from "react";
import { bgImages } from "../bgImages";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import "./Section3_Images.css"



function Section3_Images(){
    let container3= useRef()
    let i = 0;
    function Navigate(e) {
        console.log(e)
        if (e.id == "btn2") {
            i = (i + 1) % bgImages.length;
        } else {
            i = (i - 1 + bgImages.length) % bgImages.length
        }
        container3.current.style.backgroundImage=bgImages[i].img;
       
    }

    useEffect(()=>{
        setInterval(()=>{
            i=(i+1)%bgImages.length;    
            // container3.style.backgroundImage=bgImages[i].img;
        },4000)
    },[]) 
    
  return(
    <div id="container3" style={{backgroundImage: "url('https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20')"}} ref={container3}>
                    <div id="container3_div1">
                        <div><button className="btn" id="btn1" onClick={Navigate}><IoChevronBack /></button></div>
                        <div><button className="btn" id="btn2" onClick={Navigate}><IoChevronForward /></button></div>
                    </div>
                    <div id="container3_div2">
                        <div id="SlidebarDiv">
                            <div id="innerDiv">
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                            </div>

                        </div>
                    </div>
                </div>
  )
}
export default Section3_Images

import React, { useEffect, useRef, useState } from "react";
import { bgImages } from "../bgImages";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import "./Section3_Images.css"


function Section3_Images() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);
      
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
        );
        resetInterval();
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? bgImages.length - 1 : prevIndex - 1
        );
        resetInterval();
        
      };

      const startSlide = () => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000); // Adjust the interval as needed (in milliseconds)
        
      };

      const resetInterval = () => {
        console.log(intervalRef);
        clearInterval(intervalRef.current);
        startSlide();
      };
    
      useEffect(() => {
        startSlide();
        return () => {
          clearInterval(intervalRef.current);
        };
      }, []);
    
    

  return (
    <div className="Slider">
           <div className="btnDiv" > 
             <button className="btn" id="btn_left" onClick={prevSlide}><IoChevronBack/></button>
            </div>
            <div className="slider_Image" ref={sliderRef} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
            {bgImages.map((image, index) => (
          <img key={index} className="slide" src={image.img} alt={`Slide ${index + 1}`} />
        ))}
               
            </div>
            <div className="btnDiv" onClick={nextSlide}> 
             <button className="btn" id="btn_right"><IoChevronForward/></button>
            </div>
    </div>
  )
}
export default Section3_Images

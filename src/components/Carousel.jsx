import React, { useState,useEffect,useRef } from "react";
import "../styles/css/Carousel.css";
const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
  
    
    

    const handlePrevClick = () => {
        if(carouselRef.current){
            const CountItems = carouselRef.current.querySelectorAll('.CarouselItem')
            setCurrentIndex(currentIndex === 0 ? CountItems.length - 1 : currentIndex - 1)
        }
      
    }
    const handleNextClick = () => {
        if(carouselRef.current){
            const CountItems = carouselRef.current.querySelectorAll('.CarouselItem')
            setCurrentIndex(currentIndex === CountItems.length - 1 ? 0 : currentIndex + 1)
        }
       
    }

    const adjustCarouselSize = () =>{
        if(carouselRef.current){
            const Carouselwidth = carouselRef.current.clientWidth;
            const items = carouselRef.current.querySelectorAll('.CarouselItem');
            const itemWidth = Carouselwidth / items;
            items.forEach(item => {
                item.style.width = `${itemWidth}px`
            })

        }
    }

    useEffect(() => {
        adjustCarouselSize();
        window.addEventListener('resize', adjustCarouselSize);
        return () => window.removeEventListener('resize', adjustCarouselSize);
      }, []);


    return (
        <div className="Carousel" >

            <div className="CarouselContainer" ref={carouselRef}>

                <div className="CarouselTrack"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >

                    <div className="CarouselItem">
                        <h1>About Me</h1>
                        <div className="LargeTextArea">
                            <p>Hi! I'm Thiago Siena. I study Computer Engineering and I'm passionate about technology. Music is also a big part of my life, I've been playing the guitar for 10 years. I also love playing online games and i love talking about these topics.</p>
                        </div>
                    </div>

                    <div className="CarouselItem">
                        <h1>Goals</h1>
                        <div className="LargeTextArea">
                            <p></p>
                        </div>
                    </div>

                    <div className="CarouselItem">
                        <h1>Current Learning</h1>
                        <div className="LargeTextArea">
                            <p></p>
                        </div>
                    </div>

                    

                </div>

            </div>

            <button className="CarouselButton prev" onClick={handlePrevClick}>‹</button>
            <button className="CarouselButton next" onClick={handleNextClick}>›</button>

        </div>

    )
}

export default Carousel;
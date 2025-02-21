import React, { useState, useEffect, useRef } from "react";
import { FaGuitar, FaGamepad, FaLaptop } from 'react-icons/fa';
import "../styles/css/Carousel.css";
const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);




    const handlePrevClick = () => {
        if (carouselRef.current) {
            const CountItems = carouselRef.current.querySelectorAll('.CarouselItem')
            setCurrentIndex(currentIndex === 0 ? CountItems.length - 1 : currentIndex - 1)
        }

    }
    const handleNextClick = () => {
        if (carouselRef.current) {
            const CountItems = carouselRef.current.querySelectorAll('.CarouselItem')
            setCurrentIndex(currentIndex === CountItems.length - 1 ? 0 : currentIndex + 1)
        }

    }

    const adjustCarouselSize = () => {
        if (carouselRef.current) {
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
                            <p>
                                Hi! I'm <span className="highlight">Thiago Siena</span>. I study <span className="highlight"><FaLaptop /> Computer Engineering</span> and I'm passionate about <span className="highlight">technology</span>. Music is also a big part of my life,
                                I've been playing the <span className="highlight">guitar <FaGuitar /></span> for 10 years. I also love playing <span className="highlight">online games <FaGamepad /></span> and I enjoy talking about these topics.
                                Recently, I've been working in the field of <span className="highlight">programmatic media</span>, and I'm really enjoying it. It's expanding my horizons and allowing me to learn new things.
                                Check out my <a href="https://github.com/thiagosiena"  target="_blank" rel="noreferrer" className="highlight">GitHub</a> for more!
                            </p>
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
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaGuitar, FaGamepad, FaLaptop } from 'react-icons/fa';
import "../styles/scss/Carousel.scss";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const userInteractedRef = useRef(false);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? 2 : prev - 1);
  }, []);

  const handleNextClick = useCallback(() => {
    setCurrentIndex(prev => prev === 2 ? 0 : prev + 1);
  }, []);


  return (
    <div className="carousel">
      <div className="carousel-container" ref={carouselRef}>
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="carousel-item">
            <h1>About Me</h1>
            <div className="large-text-area">
              <p>
                Hi! I'm <span className="highlight">Thiago Siena</span>. I study 
                <span className="highlight"><FaLaptop /> Computer Engineering</span> and I'm passionate about <span className="highlight">technology</span>. Music is also a big part of my life,
                I've been playing the <span className="highlight">guitar <FaGuitar /></span> for 10 years. 
                I also love playing <span className="highlight">online games <FaGamepad /></span> and I enjoy talking about these topics.
                Recently, I've been working in the field of <span className="highlight">programmatic media</span>, 
                and I'm really enjoying it. It's expanding my horizons and allowing me to learn new things.
                Check out my <a href="https://github.com/thiagosiena" target="_blank" rel="noreferrer" className="highlight">GitHub</a> for more!
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <h1>Goals</h1>
            <div className="large-text-area">
              <p>
                My current goals include mastering modern web development technologies, 
                contributing to open-source projects, and developing applications that 
                solve real-world problems. I'm particularly interested in the intersection 
                of technology and creativity.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <h1>Current Learning</h1>
            <div className="large-text-area">
              <p>
                Currently, I'm diving deeper into React ecosystem, Three.js for 3D web experiences, 
                and cloud technologies. I'm also exploring how to integrate AI tools into 
                creative workflows and looking at ways to make technology more accessible 
                through better UX design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-button prev" onClick={() => {
        handlePrevClick();
        handleUserInteraction();
      }}>‹</button>
      
      <button className="carousel-button next" onClick={() => {
        handleNextClick();
        handleUserInteraction();
      }}>›</button>

      <div className="carousel-indicators">
        {[0, 1, 2].map(index => (
          <button
            key={index}
            className={`carousel-indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              handleUserInteraction();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
import React, { useRef, useState, useEffect } from "react";
import "../styles/css/Header.css";
import { Link } from "react-router-dom";
import { DropDownItem, DropDown } from "./DropDown";
import Logo from "../imgs/App Logo Inspiraton 39.svg";
import Calculator from "../imgs/Icons/icons8-calculator-26.svg";
import Arrow from "../imgs/Icons/icons8-arrow-50.svg";
import { NavBar , NavItem } from "./NavBar";
import {HiMiniBars3} from 'react-icons/hi2';


const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

//Scroll Header and Dropdown animation

  const scrollheader = () =>{
    const hd = document.querySelector(".Header");
    
    if(window.scrollY >= 60){
      hd.classList.add("Header-scrolled");
    }
    else{
      hd.classList.remove("Header-scrolled");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollheader);
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
      window.removeEventListener("scroll", scrollheader);
    };
  }, []);
  
  // DropDown Works
  const [OpenDropDown, SetOpenDropDown] = useState(false);
  const handleDropDownClick = () => {
    SetOpenDropDown(!OpenDropDown);
  };
  const handleOverlay = (e) => {
    if (e.target === Overlay.current) handleDropDownClick();
  };
  const Overlay = useRef(null);

//NavBar Works
const  [OpenNavBar, SetOpenNavBar] = useState(false);
const handleNavClick = () =>{
  SetOpenNavBar(!OpenNavBar);
}

  return (
    <>
      <div className="Header">
        <div className="Content">
          {windowWidth > 640 ? (
            <>
              <img className="Logo" src={Logo} alt="logo" />
              <Link
                to="#"
                className={`Projects ${OpenDropDown ? "active" : ""}`}
                onClick={handleDropDownClick}
              >
                Projects

                <img className="Arrow" src={Arrow} alt="arrow" />

              </Link>

              {OpenDropDown ? (
                <>
                  <div className="DropDownWrapper">
                    <div
                      className="Overlay"
                      ref={Overlay}
                      onClick={handleOverlay}
                    >
                      <DropDown>
                        <DropDownItem
                          icon={Calculator}
                          alt={"icon"}
                          url={"/Calculator"}
                          text={"Calculator"}
                        />
                        <DropDownItem text={"test"} />
                      </DropDown>
                    </div>
                  </div>
                </>
              ) : null}
              <div className="About">About</div>
              <Link to="/Contact" className="Contact">
                Contact
              </Link>
            </>
          ) : (
            <>
              <HiMiniBars3  className={`NavIcon ${OpenNavBar ? "active" : ""}`} size={50} onClick={handleNavClick}/>
              {OpenNavBar ? (<NavBar>
                <NavItem text='test' />
                <NavItem text='test'  />
                <NavItem text='test'/>
              </NavBar>): null }
                
            
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

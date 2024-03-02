import React, { useRef, useState, useEffect } from "react";
import "../styles/css/Header.css";
import { Link } from "react-router-dom";
import { DropDownItem, DropDown } from "./DropDown";
import Logo from "../imgs/TS-removebg-preview (1).png";
import Calculator from "../imgs/Icons/icons8-calculator-26.svg";
import Arrow from "../imgs/Icons/icons8-arrow-50.svg";
import { NavBar, NavItem } from "./NavBar";
import { HiMiniBars3 } from 'react-icons/hi2';


const Header = () => {

  //making it responsive
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  //Scroll Header animation

  const scrollheader = () => {
    const hd = document.querySelector(".Header");

    if (window.scrollY >= 60) {
      hd.classList.add("Header-scrolled");
    }
    else {
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
  const [OpenNavBar, SetOpenNavBar] = useState(false);
  const handleNavClick = () => {
    SetOpenNavBar(!OpenNavBar);
  }
  const handleOverlay2 = (e) => {
    if (e.target === Overlay2.current) handleNavClick();

  };
  const Overlay2 = useRef(null);


  return (
    <>
      <div className="Header">
        <div className="Content">
          {windowWidth > 985 ? (
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
                  <div className="OverlayWrapper">

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
              <div className="About" ><a href="#segunda">About</a></div>
              <Link to="/Contact" className="Contact">
                Contact
              </Link>
            </>
          ) : (
            <>

              <HiMiniBars3 className={`NavIcon ${OpenNavBar ? "active" : ""}`} size={40} onClick={handleNavClick} />
              <img className="Logo" src={Logo} alt="logo" />
              {OpenNavBar ? (<>


                <div className="OverlayWrapper"
                  ref={Overlay2}
                  onClick={handleOverlay2}>
                  <div className="Overlay2">
                    <NavBar>
                      <NavItem text='Contact' url="/Contact" >

                      </NavItem>
                      <NavItem text='test' />
                      <NavItem text='test' />
                    </NavBar>

                  </div>
                </div>


              </>
              ) : null}


            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

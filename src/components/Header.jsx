import React, { useRef, useState, useEffect } from "react";
import "../styles/scss/Header.scss";
import { Link } from "react-router-dom";
import { DropDownItem, DropDown } from "./DropDown";
import Logo from "../imgs/TS-removebg-preview (1).png";
import CalculatorIcon from "../imgs/Icons/icons8-calculator-26.svg";
import Arrow from "../imgs/Icons/icons8-arrow-50.svg";
import { NavBar, NavItem } from "./NavBar";
import { HiMiniBars3 } from 'react-icons/hi2';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(false);

  const overlayRef = useRef(null);
  const overlay2Ref = useRef(null);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  const scrollHeader = () => {
    const header = document.querySelector(".Header");
    if (window.scrollY >= 60) {
      header.classList.add("Header-scrolled");
    } else {
      header.classList.remove("Header-scrolled");
    }
  };

  const handleDropDownClick = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) {
      setOpenDropDown(false);
    }
  };

  const handleNavClick = () => {
    setOpenNavBar(!openNavBar);
  };

  const handleOverlay2 = (e) => {
    if (e.target === overlay2Ref.current) {
      setOpenNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <>
      <div className="Header">
        <div className="Content">
          {windowWidth > 985 ? (
            <>
              <div className="Logo-Container">
                <Link className="Logo" to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>

              <div className="Buttons-Container">
                <Link to="/Contact" className="Contact">
                  Contact
                </Link>

                <Link to="#about" className="About">
                  About
                </Link>

                <div className={`Project ${openDropDown ? "active" : ""}`}>
                  <button
                    className="Projects-button"
                    onClick={handleDropDownClick}
                  >
                    Projects
                    <img className="Arrow" src={Arrow} alt="arrow" />
                  </button>

                  {openDropDown && (
                    <>
                      <DropDown isOpen={openDropDown}>
                        <DropDownItem
                          icon={CalculatorIcon}
                          alt="calculator icon"
                          url="/Calculator"
                          text="Calculator"
                        />
                        <DropDownItem text="test" />
                      </DropDown>

                      <div
                        className="Overlay"
                        ref={overlayRef}
                        onClick={handleOverlay}
                      />
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <HiMiniBars3
                className={`NavIcon ${openNavBar ? "active" : ""}`}
                size={40}
                onClick={handleNavClick}
              />

              <Link className="Logo" to="/">
                <img src={Logo} alt="logo" />
              </Link>

              {openNavBar && (
                <>
                  <div
                    className="Overlay-mobile"
                    ref={overlay2Ref}
                    onClick={handleOverlay2}
                  />

                  <NavBar isOpen={openNavBar}>
                    <NavItem text="Contact" url="/Contact" onClick={handleNavClick} />
                    <NavItem text="About" url="#about" onClick={handleNavClick} />
                    <NavItem
                      text="Projects"
                      onClick={() => {
                        handleNavClick();
                        handleDropDownClick();
                      }}
                    />
                  </NavBar>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
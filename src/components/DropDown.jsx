import React, { useCallback, useEffect } from "react";

import { Link } from "react-router-dom"
import "../styles/scss/DropDown.scss"

function DropDown({ children, isOpen }) {
  const scrollDropDown = useCallback(() => {
    const dropdown = document.querySelector(".DropDown")
    if (dropdown) {
      if (window.scrollY >= 60) {
        dropdown.classList.add("DropDown-scrolled")
      } else {
        dropdown.classList.remove("DropDown-scrolled")
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", scrollDropDown)
    return () => {
      window.removeEventListener("scroll", scrollDropDown)
    }
  }, [scrollDropDown])

  if (!isOpen) return null

  return (
    <div className="DropDown">
      <ul className="DropDown-list">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="DropDown-item">
            {child}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DropDownItem({ icon, alt, url, text }) {
  const content = (
    <>
      {icon && <img className="DropDown-icon" src={icon} alt={alt || `${text} icon`} />}
      <span className="DropDown-text">{text}</span>
    </>
  )

  return (
    <div className="DropDownItem">
      {url ? (
        <Link to={url} className="DropDown-link">
          {content}
        </Link>
      ) : (
        <div className="DropDown-content">
          {content}
        </div>
      )}
    </div>
  )
}

export { DropDown, DropDownItem }
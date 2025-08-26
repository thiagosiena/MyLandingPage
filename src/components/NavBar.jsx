import React from "react";
import { Link } from "react-router-dom";
import '../styles/scss/NavBar.scss';

function NavBar({ children, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className={`NavBar ${isOpen ? "open" : ""}`}>
      <ul className="NavBar-list">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="NavBar-item">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavItem({ icon, alt, url, text, onClick }) {
  const content = (
    <>
      {icon && <img className="NavBar-icon" src={icon} alt={alt || `${text} icon`} />}
      <span className="NavBar-text">{text}</span>
    </>
  );

  if (url) {
    return (
      <div className="NavItem">
        <Link to={url} className="NavBar-link" onClick={onClick}>
          {content}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="NavItem" onClick={onClick}>
        <div className="NavBar-content">
          {content}
        </div>
      </div>
    );
  }
}

export { NavBar, NavItem };
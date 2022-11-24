import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerToggler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="logo">
          <a href="#home">
            {/* <img src={Logo} alt="" /> */}
            <div className="logo_outeer">
              <div className="logo_inner">CHOINKI</div>
            </div>
          </a>
        </div>
        <ul className={`${isOpen ? "show__mobileMenu" : ""} navbar__links`}>
          {/* <a href="#about">
            <li className="navbar__item">O nas</li>
          </a> */}
          <a href="#pricing" onClick={() => setIsOpen(false)}>
            <li className="navbar__item">Cennik</li>
          </a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>
            <li className="navbar__item">Galeria</li>
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <li className="navbar__item">Kontakt</li>
          </a>
        </ul>
        <div className="hamburger" onClick={hamburgerToggler}>
          {!isOpen ? (
            <HiOutlineMenu className="hamburger__btn" />
          ) : (
            <MdOutlineClose className="hamburger__btn" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Header.css";
import { TbChristmasTree } from "react-icons/tb";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Header = () => {
  return (
    <header id="home">
      {/* <div className="phone">
        <BsFillTelephoneOutboundFill className="icon" />
        <h4>604 210 980</h4>
      </div> */}

      <div className="header__container">
        <h1 className="header__title"> Sprzedaż Choinek</h1>
        <h3 className="header__details">
          {" "}
          <TbChristmasTree className="header__icon" /> Jodła Kaukaska
        </h3>
        <h3 className="header__details">
          {" "}
          <TbChristmasTree className="header__icon" /> Świerk Srebrny
        </h3>
        <h3 className="header__details">
          {" "}
          <TbChristmasTree className="header__icon" /> Świerk Serbski
        </h3>
        <a href="#pricing">
          <button className="header__cta">Sprawdź ofertę</button>
        </a>
      </div>
      <div className="start__wrapper">
        <div className="start">
          <h3>PLANOWANE ROZPOCZĘCIE SEZONU</h3>
          <h3>5 - 8 grudnia 2022</h3>
          <h3>Uzależnione od warunków atmosferycznych</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

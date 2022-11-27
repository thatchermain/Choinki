import React from "react";
import "./Header.css";
import { TbChristmasTree } from "react-icons/tb";

const Header = () => {
  return (
    <header id="home">
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
      <div className="start__wrapper"></div>
    </header>
  );
};

export default Header;

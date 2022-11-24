import React from "react";
import "./Pricing.css";
import Img from "../assets/images/logo.png";
import Tree1 from "../assets/images/Duzaa.jpg";
import Tree2 from "../assets/images/jkrdoniczka.jpg";
import Tree3 from "../assets/images/mala.jpg";
import Tree4 from "../assets/images/duza.jpg";
import Tree5 from "../assets/images/standard.jpg";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h3 className="title">CENNIK</h3>
      <div className="wrapper">
        <div className="card__container">
          <div className="single__card">
            <div className="card__info">
              <p className="card__info-text">Jodła Kaukaska cięta</p>
              <p className="card__info-text">150cm - 170cm</p>
              <p className="card__info-text price">100zł</p>
              <p className="card__info-text">Mniejsza choinka</p>
            </div>
            <div className="card__img">
              <img src={Tree4} alt="" />
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="single__card">
            <div className="card__info">
              <p className="card__info-text">Jodła Kaukaska cięta</p>
              <p className="card__info-text">180cm - 200cm</p>
              <p className="card__info-text price">120zł</p>
              <p className="card__info-text text-big">Standardowa choinka</p>
            </div>
            <div className="card__img">
              <img src={Tree3} alt="" />
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="single__card">
            <div className="card__info">
              <p className="card__info-text">Jodła Kaukaska cięta</p>
              <p className="card__info-text">200cm - 220cm</p>
              <p className="card__info-text price">140zł</p>
              <p className="card__info-text text-biger">Duża choinka</p>
            </div>
            <div className="card__img">
              <img src={Tree5} alt="" />
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="single__card">
            <div className="card__info">
              <p className="card__info-text">Jodła Kaukaska cięta</p>
              <p className="card__info-text">230cm - 250cm</p>
              <p className="card__info-text price">160zł</p>
              <p className="card__info-text text-bigest">Ogromna choinka</p>
            </div>
            <div className="card__img">
              <img src={Tree1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="card__container">
          <div className="single__card">
            <div className="card__info">
              <p className="card__info-text">Jodła Kaukaska doniczka</p>
              <p className="card__info-text">120cm - 160cm</p>
              <p className="card__info-text price">120zł</p>
              <p className="card__info-text">Od początku rosnąca w doniczce</p>
            </div>
            <div className="card__img">
              <img src={Tree2} alt="" />
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="single__card">
            <div className="card__info">
              <p className="card__info-text">Świerk Serbski</p>
              <p className="card__info-text">100cm - 150cm</p>
              <p className="card__info-text price">35zł</p>
              <p className="card__info-text">Kopany z gruntu z korzeniem</p>
            </div>
            <div className="card__img">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>

        <div className="card__container">
          <div className="single__card">
            <div className="card__info">
              <p className="card__info-text">Świerk Srebrny doniczka</p>
              <p className="card__info-text">100cm - 150cm</p>
              <p className="card__info-text price">35zł</p>
              <p className="card__info-text">Kopany z gruntu z korzeniem</p>
            </div>
            <div className="card__img">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h2>DOWÓZ DO 5KM - GRATIS*</h2>
        <p>
          * Dowóz w godzinach wieczornych, gdy do dowozu w danym kierunku będzie
          minimum 5 szt.
        </p>
        <p></p>
      </div>
    </section>
  );
};

export default Pricing;

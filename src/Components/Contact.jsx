import React from "react";
import "./Contact.css";
import Wizytowka from "../assets/images/wizytowka.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact">
        <h2>KONTAKT</h2>
      </div>
      <div className="container">
        <div className="left">
          <h3>Tomasz Sacha</h3>
          <h3>ul. GOLIS 6</h3>
          <h3>33-111 Koszyce Wielkie</h3>
          <h3 className="contact__phone">
            {" "}
            <BsFillTelephoneOutboundFill className="icon" />
            <span>604 210 980</span>
          </h3>
          <a
            className="fb__link"
            href="https://www.facebook.com/people/Tomasz-Sacha/100075615355839/"
            target="_blank"
          >
            <div className="fb">
              <p>Odwiedź nas na</p>
              <FaFacebook className="icon" />
            </div>
          </a>
        </div>
        <div className="right">
          <img src={Wizytowka} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Contact.css";
import Wizytowka from "../assets/images/wizytowka.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

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
          <h3>Koszyce Wielkie</h3>
          <h3>
            {" "}
            <BsFillTelephoneOutboundFill /> 604 210 980
          </h3>
        </div>
        <div className="right">
          <img src={Wizytowka} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

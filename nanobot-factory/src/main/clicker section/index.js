import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./clicker.css";
import img from "../../assets/click-icon-1.png";

const Clicker = () => {
  const [Amount, setAmount] = useState(0);
  const handleClick = () => {
    setAmount(Amount + 1);
  };
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      const page = document.getElementById("upgrades");
      page.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="clicker-container"
      id="clicker"
      onWheel={(e) => {
        handleScroll(e);
      }}
    >
      <Count amount={Amount} />
      <button onClick={() => handleClick()}>
        <img className="click-icon" src={img} />
      </button>
    </div>
  );
};

const Count = (props) => {
  return (
    <div className="amount-container">
      <h1>
        {props.amount}
        <br /> Nanobots
      </h1>
    </div>
  );
};

export default Clicker;

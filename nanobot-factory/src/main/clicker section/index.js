import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { data } from "../other/data";
import { smoothScroll } from "../other/smoothscroll";
import "./clicker.css";
import img from "../../assets/click-icon-1.png";

const Clicker = () => {
  const [Amount, setAmount] = useState(0);
  const handleClick = () => {
    data.total_clicks += 1;
    data.current_amount = Amount + data.manual_value;
    setAmount(data.current_amount);
  };
  return (
    <div
      className="clicker-container"
      id="clicker"
      onWheel={(e) => smoothScroll("clicker", e)}
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
    <>
      <div className="amount-container">
        <h1>
          {props.amount}
          <br /> Nanobots
        </h1>
      </div>
    </>
  );
};

export default Clicker;

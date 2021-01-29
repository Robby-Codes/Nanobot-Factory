import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { data } from "../other/data";
import { formatNumbers } from "../other/formatnumbers";
import { smoothScroll } from "../other/smoothscroll";
import "./clicker.css";
import img from "../../assets/click-icon-1.png";
import UpgradeSection from "../upgrade section";

const HomePage = () => {
  return (
    <>
      <Clicker />
    </>
  );
};

const Clicker = () => {
  const [Amount, setAmount] = useState(0);
  const [rnumber, setRNumber] = useState(null);
  const handleClick = () => {
    data.total_clicks += 1;
    data.current_amount = Amount + data.manual_value;
    setRNumber(<RisingNumbers />);
    setAmount(data.current_amount);
  };

  return (
    <>
      <div
        className="clicker-container"
        id="clicker"
        onWheel={(e) => smoothScroll("clicker", e)}
      >
        <Count amount={Amount} />
        <button onClick={() => handleClick()}>
          <img className="click-icon" src={img} />
        </button>
        {rnumber}
      </div>
      <UpgradeSection updateAmount={() => setAmount(data.current_amount)} />
    </>
  );
};

const Count = (props) => {
  return (
    <>
      <div className="amount-container">
        <h1 className="amount">{formatNumbers(Math.floor(props.amount))}</h1>
        <h1>Nanobots</h1>
      </div>
    </>
  );
};

const RisingNumbers = () => {
  let xaxis = (Math.floor(Math.random() * 80) + 10).toString() + "%";
  const [styling, setStyling] = useState({
    transition: "all 1s",
    position: "absolute",
    bottom: "0",
    right: xaxis,
    opacity: "1",
  });
  return <h1>+1</h1>;
};

export default HomePage;

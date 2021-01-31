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
  const [rnumber, setRNumber] = useState();
  const handleClick = () => {
    let xaxis = (Math.floor(Math.random() * 80) + 10).toString() + "%";
    data.total_clicks += 1;
    data.current_amount = Amount + data.manual_value;
    setRNumber(
      <RisingNumbers
        xaxis={xaxis}
        number={data.manual_value}
        key={generateKey()}
      />
    );
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
        <button
          onClick={() => {
            handleClick();
          }}
        >
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

const RisingNumbers = ({ xaxis, number, key }) => {
  const [styling, setStyling] = useState({
    right: xaxis,
    opacity: "0",
  });
  return (
    <h1 key={key} className="rising-numbers" style={styling}>
      +{number}
    </h1>
  );
};

const generateKey = () => {
  return Math.floor(Math.random() * 1000);
};

export default HomePage;

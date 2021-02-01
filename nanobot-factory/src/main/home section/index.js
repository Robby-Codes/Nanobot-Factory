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
  const [number_1, setNumber_1] = useState();
  const [number_2, setNumber_2] = useState();
  const [number_3, setNumber_3] = useState();
  const [number_4, setNumber_4] = useState();
  const [number_5, setNumber_5] = useState();
  const [number_6, setNumber_6] = useState();
  const [number_7, setNumber_7] = useState();
  const [number_8, setNumber_8] = useState();
  const [number_9, setNumber_9] = useState();
  const [number_10, setNumber_10] = useState();
  const handleClick = () => {
    data.total_clicks += 1;
    data.current_amount = Amount + data.manual_value;
    numberOrder(
      setNumber_1,
      setNumber_2,
      setNumber_3,
      setNumber_4,
      setNumber_5,
      setNumber_6,
      setNumber_7,
      setNumber_8,
      setNumber_9,
      setNumber_10
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
        {number_1}
        {number_2}
        {number_3}
        {number_4}
        {number_5}
        {number_6}
        {number_7}
        {number_8}
        {number_9}
        {number_10}
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

let rising_count = 0;
const numberOrder = (
  setNumber_1,
  setNumber_2,
  setNumber_3,
  setNumber_4,
  setNumber_5,
  setNumber_6,
  setNumber_7,
  setNumber_8,
  setNumber_9,
  setNumber_10
) => {
  rising_count += 1;
  let new_xaxis = 0;
  if (rising_count % 2 === 0) {
    new_xaxis = Math.floor(Math.random() * 23) + 73;
  } else if (rising_count % 2 != 0) {
    new_xaxis = Math.floor(Math.random() * 23) + 5;
  }
  if (rising_count === 1) {
    setNumber_1(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={1}
      />
    );
    setNumber_2();
  } else if (rising_count === 2) {
    setNumber_2(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={2}
      />
    );
    setNumber_3();
  } else if (rising_count === 3) {
    setNumber_3(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={3}
      />
    );
    setNumber_4();
  } else if (rising_count === 4) {
    setNumber_4(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={4}
      />
    );
    setNumber_5();
  } else if (rising_count === 5) {
    setNumber_5(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={5}
      />
    );
    setNumber_6();
  } else if (rising_count === 6) {
    setNumber_6(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={6}
      />
    );
    setNumber_7();
  } else if (rising_count === 7) {
    setNumber_7(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={7}
      />
    );
    setNumber_8();
  } else if (rising_count === 8) {
    setNumber_8(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={8}
      />
    );
    setNumber_9();
  } else if (rising_count === 9) {
    setNumber_9(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={9}
      />
    );
    setNumber_10();
  } else if (rising_count === 10) {
    setNumber_10(
      <RisingNumbers
        xaxis={new_xaxis.toString() + "%"}
        number={formatNumbers(data.manual_value)}
        key={10}
      />
    );
    setNumber_1();
    rising_count = 0;
  }
};

export default HomePage;

import React, { useState } from "react";
import { data } from "../other/data";
import { formatNumbers } from "../other/formatnumbers";
import { smoothScroll } from "../other/smoothscroll";
import { images } from "../other/images";
import "./clicker.css";
import UpgradeSection from "../upgrade section";
import CoverPage from "./cover";

// Home Section Component
const HomePage = () => {
  return (
    <>
      <CoverPage />
      <Clicker />
    </>
  );
};

// Deciding whether or not to use custom smooth scroll function
// depending on the size of the device screen.
const checkWindowHeight = () => {
  var windowHeight = window.outerHeight;
  var windowWidth = window.innerWidth;
  if (windowHeight < 916 && windowWidth < 916) {
    document.getElementsByTagName("BODY")[0].style.overflowY = "scroll";
  } else {
    document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
  }
};

checkWindowHeight();
window.addEventListener("resize", () => checkWindowHeight());

// Displays click counter with amount and "clicker" button
const Clicker = () => {
  const [Amount, setAmount] = useState(0);
  const [numbers, setNumbers] = useState([null]);
  // Rerenders numbers to be animated on click
  const handleClick = () => {
    data.total_clicks += 1;
    data.current_amount = Amount + data.manual_value;
    numberOrder(numbers, setNumbers);
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
          <img className="click-icon" src={images.click_icon} alt="A nanobot" />
        </button>
        {numbers.map((number) => {
          return number;
        })}
      </div>
      <UpgradeSection updateAmount={() => setAmount(data.current_amount)} />
    </>
  );
};

// Displays number of nanobots
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

// Number component to be animated and displayed on click
const RisingNumbers = ({ xaxis, number, key }) => {
  const styling = {
    right: xaxis,
    opacity: "0",
  };
  return (
    <h1 key={key} className="rising-numbers" style={styling}>
      +{number}
    </h1>
  );
};

// Called on click to render a RisingNumbers component
let rising_count = 0;
const numberOrder = (numbers, setNumbers) => {
  rising_count += 1;
  let new_xaxis = 0;
  // Decides whether to render RisingNumbers component on the left
  // or right of the page.
  if (rising_count % 2 === 0) {
    new_xaxis = Math.floor(Math.random() * 23) + 73;
  } else if (rising_count % 2 !== 0) {
    new_xaxis = Math.floor(Math.random() * 23) + 5;
  }
  // Using setNumbers to add new component to numbers array causing a rerender.
  // Also stopping the array from getting too long.
  let arr = numbers;
  if (arr.length > 20) {
    arr.shift();
  }
  arr.push(
    <RisingNumbers
      xaxis={new_xaxis.toString() + "%"}
      number={formatNumbers(data.manual_value)}
      key={rising_count}
    />
  );
  setNumbers(arr);
};

export default HomePage;

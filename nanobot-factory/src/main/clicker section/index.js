import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./clicker.css";

const Clicker = () => {
  const [Amount, setAmount] = useState(0);
  const handleClick = () => {
    setAmount(Amount + 1);
  };
  return (
    <div className="clicker-container">
      <Count amount={Amount} />
      <button onClick={() => handleClick()}>Click Test</button>
    </div>
  );
};

const Count = (props) => {
  return (
    <div className="amount-container">
      <h1>{props.amount}</h1>
    </div>
  );
};

export default Clicker;

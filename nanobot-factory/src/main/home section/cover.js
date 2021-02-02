import React from "react";
import { data } from "../other/data";
import "./cover.css";
import img from "../../assets/click-icon-1.png";

const CoverPage = () => {
  const handleClick = () => {
    let page = document.getElementsByClassName("cover")[0];
    page.style.transition = "all 2s";
    page.style.transform = "translate(-100%, 0)";
    page.style.opacity = "0";
  };
  return (
    <div className="cover">
      <div className="cover-container">
        <div>
          <div className="heading-container">
            <h1>Nanobot Factory</h1>
            <img src={img} />
          </div>
          <div className="dec-line"></div>
        </div>
        <p>
          Create as many nanobots as possible! Make sure to purchase upgrades
          along the way to speed up your progress. You can check out your stats
          at any point as well.
        </p>
        <button onClick={() => handleClick()}>LETS GO!</button>
      </div>
      <small>Created By: Roberto Guerra</small>
    </div>
  );
};

export default CoverPage;

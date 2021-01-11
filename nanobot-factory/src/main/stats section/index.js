import React from "react";
import ReactDOM from "react-dom";
import "./stats.css";

const Stats = () => {
  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      const page = document.getElementById("upgrades");
      page.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className="stats-section"
        id="status"
        onWheel={(e) => handleScroll(e)}
      >
        <div className="stats-container">
          <div>
            <div>
              <p>Times Clicked</p>
              <h1>10,000</h1>
            </div>
            <div>
              <p>Current Nanobots Per Second</p>
              <h1>552,000</h1>
            </div>
            <div>
              <p>Age</p>
              <h1>2d:2h:2m</h1>
            </div>
          </div>
          <div>
            <div>
              <p>Total Nanobot Made</p>
              <h1>100,000,000,000</h1>
            </div>
            <div>
              <p>Total Nanobots Used For Upgrades</p>
              <h1>1,000,000,000</h1>
            </div>
            <div>
              <p>Current Nanobots</p>
              <h1>1,000,000,000</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

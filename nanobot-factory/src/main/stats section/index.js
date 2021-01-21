import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { data } from "../other/data";
import { smoothScroll } from "../other/smoothscroll";
import "./stats.css";

const StatsSection = () => {
  return (
    <>
      <div
        className="stats-section"
        id="status"
        onWheel={(e) => smoothScroll("status", e)}
      >
        <div className="stats-container">
          <div>
            <div>
              <p>Times Clicked</p>
              <h1>55</h1>
            </div>
            <div>
              <p>Nanobots Per Second</p>
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
              <p>Nanobots Used For Upgrades</p>
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

export default StatsSection;

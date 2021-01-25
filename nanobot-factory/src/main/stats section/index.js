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
            <ManualUpgradeStats />
            <OtherUpgradeStats />
            <OtherUpgradeStats />
            <OtherUpgradeStats />
          </div>
          <div>
            <TotalClicks />
            <NanoPerSec />
          </div>
          <div>
            <TimePlayed />
          </div>
        </div>
      </div>
    </>
  );
};

const ManualUpgradeStats = () => {
  return (
    <div className="upgrade-stats">
      <h1>Manual</h1>
      <p>Lv: 55</p>
      <p>
        55<sub>/click</sub>
      </p>
    </div>
  );
};

const OtherUpgradeStats = () => {
  return (
    <div className="upgrade-stats">
      <h1>title</h1>
      <p>Lv: 55</p>
      <p>
        55<sub>/sec</sub>
      </p>
    </div>
  );
};

const TotalClicks = () => {
  return (
    <div className="total-clicks-stat">
      <h1>Clicks: </h1>
      <p>5555</p>
    </div>
  );
};

const NanoPerSec = () => {
  return (
    <div className="nanopersec-stat">
      <h1>Nanobots Per Second: </h1>
      <p>5555</p>
    </div>
  );
};

const TimePlayed = () => {
  return (
    <div className="time-stat">
      <h1>Total Time Played </h1>
      <p>55</p>
    </div>
  );
};

export default StatsSection;

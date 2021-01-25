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
            <div className="upgrade-stat-2">
              <h1># of Clicks: </h1>
              <p>55</p>
            </div>
            <div className="upgrade-stat-3">
              <h1>Total Nanobots per Second: </h1>
              <p>55</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ManualUpgradeStats = () => {
  return (
    <div>
      <div className="upgrade-stat-1">
        <h1>Manual</h1>
        <p>Level: 55</p>
        <p>
          55<sub>/click</sub>
        </p>
      </div>
    </div>
  );
};

const OtherUpgradeStats = () => {
  return (
    <div>
      <div className="upgrade-stat-1">
        <h1>title</h1>
        <p>LV: 55</p>
        <p>
          55<sub>/sec</sub>
        </p>
      </div>
    </div>
  );
};

export default StatsSection;

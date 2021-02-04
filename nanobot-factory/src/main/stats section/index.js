import React, { useState, useEffect } from "react";
import { data } from "../other/data";
import { formatNumbers } from "../other/formatnumbers";
import { smoothScroll } from "../other/smoothscroll";
import "./stats.css";

const StatsSection = ({ time }) => {
  return (
    <>
      <div
        className="stats-section"
        id="status"
        onWheel={(e) => smoothScroll("status", e)}
      >
        <div className="stats-container">
          <div>
            <ManualUpgradeStats
              level={data.manual_level}
              mvalue={data.manual_value}
            />
            <OtherUpgradeStats
              title="Builder"
              level={data.builder_level}
              ovalue={data.builder_value}
            />
            <OtherUpgradeStats
              title="Foundry"
              level={data.foundry_level}
              ovalue={data.foundry_value}
            />
            <OtherUpgradeStats
              title="Swarm"
              level={data.swarm_level}
              ovalue={data.swarm_value}
            />
          </div>
          <div>
            <TotalClicks clicks={data.total_clicks} />
            <NanoPerSec nanos={data.nanobots_per_second} />
          </div>
          <div>
            <TimePlayed clock={time} />
          </div>
        </div>
      </div>
    </>
  );
};

const ManualUpgradeStats = ({ level, mvalue }) => {
  return (
    <div className="upgrade-stats">
      <h1>Manual</h1>
      <p>
        Level: <span>{level}</span>
      </p>
      <p>
        Value:{" "}
        <span>
          {formatNumbers(mvalue)}
          <sub>/click</sub>
        </span>
      </p>
    </div>
  );
};

const OtherUpgradeStats = ({ title, level, ovalue }) => {
  return (
    <div className="upgrade-stats">
      <h1>{title}</h1>
      <p>
        Level: <span>{level}</span>
      </p>
      <p>
        Value:{" "}
        <span>
          {formatNumbers(ovalue)}
          <sub>/sec</sub>
        </span>
      </p>
    </div>
  );
};

const TotalClicks = ({ clicks }) => {
  return (
    <div className="total-clicks-stat">
      <h1>Clicks: </h1>
      <p>{formatNumbers(clicks)}</p>
    </div>
  );
};

const NanoPerSec = ({ nanos }) => {
  return (
    <div className="nanopersec-stat">
      <h1>Automated Nanobots Per Second: </h1>
      <p>{formatNumbers(nanos)}</p>
    </div>
  );
};

const TimePlayed = ({ clock }) => {
  return (
    <div className="time-stat">
      <h1>Total Time Played </h1>
      <p>{clock}</p>
    </div>
  );
};

export default StatsSection;

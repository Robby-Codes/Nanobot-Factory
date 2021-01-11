import React from "react";
import ReactDOM from "react-dom";
import { data } from "../other/data";
import { smoothScroll } from "../other/smoothscroll";
import "./upgrade.css";
import super_img from "../../assets/supernano.png";
import click_img from "../../assets/click.png";
import factory_img from "../../assets/factory.png";
import swarm_img from "../../assets/swarm.png";

const Upgrade = () => {
  return (
    <div
      className="upgrade-container"
      id="upgrades"
      onWheel={(e) => {
        smoothScroll("upgrades", e);
      }}
    >
      <div className="stack u1">
        <div className="u-icon-container">
          <img className="upgrade-icon" src={click_img} />
        </div>
        <div className="dec-line"></div>
        <h1>Manual</h1>
        <p>
          Sacrifice nanobots for research! Figure out how to manually build more
          at a time.
        </p>
        <button>
          <p>2</p>
        </button>
      </div>
      <div className="stack u2">
        <div className="u-icon-container">
          <img className="upgrade-icon" src={super_img} />
        </div>
        <div className="dec-line"></div>
        <h1>Builder</h1>
        <p>
          Combine nanobots to create a super nanobot capable of creating other
          nanobots using materials around it!
        </p>
        <button>
          <p>2</p>
        </button>
      </div>
      <div className="stack u3">
        <div className="u-icon-container">
          <img className="upgrade-icon" src={factory_img} />
        </div>
        <div className="dec-line"></div>
        <h1>Foundry</h1>
        <p>
          Morph nanobots together to create a microscopic nanobot factory!
          Nanobots bring it materials to create many replicas.
        </p>
        <button>
          <p>2</p>
        </button>
      </div>
      <div className="stack u4">
        <div className="u-icon-container">
          <img className="upgrade-icon" src={swarm_img} />
        </div>
        <div className="dec-line"></div>
        <h1>Swarm</h1>
        <p>
          Fuse nanobots together into a swarm of flying super nanobots capable
          of finding materials and replicating!
        </p>
        <button>
          <p>2</p>
        </button>
      </div>
    </div>
  );
};

export default Upgrade;

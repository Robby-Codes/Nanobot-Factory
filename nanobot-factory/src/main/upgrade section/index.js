import React, { useState } from "react";
import ReactDOM from "react-dom";
import { data } from "../other/data";
import { smoothScroll } from "../other/smoothscroll";
import "./upgrade.css";
import super_img from "../../assets/supernano.png";
import click_img from "../../assets/click.png";
import factory_img from "../../assets/factory.png";
import swarm_img from "../../assets/swarm.png";
import StatsSection from "../stats section";

const UpgradeSection = ({ updateAmount }) => {
  return <Upgrade updateAmount={updateAmount} />;
};

const Upgrade = ({ updateAmount }) => {
  const [mprice, setMPrice] = useState(data.manual_price);
  return (
    <>
      <div
        className="upgrade-container"
        id="upgrades"
        onWheel={(e) => {
          smoothScroll("upgrades", e);
        }}
      >
        <DifferentUpgrades
          img={click_img}
          title="Manual"
          description="Sacrifice nanobots for research! Figure out how to manually build more
          at a time."
          price={mprice}
          updatePrice={() => setMPrice(data.manual_price)}
          updateAmount={updateAmount}
        />
        <DifferentUpgrades
          img={super_img}
          title="Builder"
          description="Combine nanobots to create a super nanobot capable of creating other
          nanobots using materials around it!"
        />
        <DifferentUpgrades
          img={factory_img}
          title="Foundry"
          description="Morph nanobots together to create a microscopic nanobot factory!
          Nanobots bring it materials to create many replicas."
        />
        <DifferentUpgrades
          img={swarm_img}
          title="Swarm"
          description="Fuse nanobots together into a swarm of flying super nanobots capable
          of finding materials and replicating!"
        />
      </div>
      <StatsSection />
    </>
  );
};

const DifferentUpgrades = ({
  img,
  title,
  description,
  price = 0,
  updatePrice,
  updateAmount,
}) => {
  const handleClick = () => {
    if (data.current_amount >= price) {
      data.current_amount -= price;
      data.manual_value += 1;
      data.manual_price *= 2;
      updatePrice();
      updateAmount();
      console.log(data);
    }
  };
  return (
    <div className="stack">
      <div className="u-icon-container">
        <img className="upgrade-icon" src={img} />
      </div>
      <div className="dec-line"></div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => handleClick()}>
        <p>{price}</p>
      </button>
    </div>
  );
};

export default UpgradeSection;

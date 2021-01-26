import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    mainAmountAndTimeCounter(updateAmount);
  }, []);
  return <Upgrade updateAmount={updateAmount} />;
};

const Upgrade = ({ updateAmount }) => {
  const [mprice, setMPrice] = useState(data.manual_price);
  const [bprice, setBPrice] = useState(data.builder_price);
  const [fprice, setFPrice] = useState(data.foundry_price);
  const [sprice, setSPrice] = useState(data.swarm_price);
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
          price={bprice}
          updatePrice={() => setBPrice(data.builder_price)}
          updateAmount={updateAmount}
        />
        <DifferentUpgrades
          img={factory_img}
          title="Foundry"
          description="Morph nanobots together to create a microscopic nanobot factory!
          Nanobots bring it materials to create many replicas."
          price={fprice}
          updatePrice={() => setFPrice(data.foundry_price)}
          updateAmount={updateAmount}
        />
        <DifferentUpgrades
          img={swarm_img}
          title="Swarm"
          description="Fuse nanobots together into a swarm of flying super nanobots capable
          of finding materials and replicating!"
          price={sprice}
          updatePrice={() => setSPrice(data.swarm_price)}
          updateAmount={updateAmount}
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
  price,
  updatePrice,
  updateAmount,
}) => {
  return (
    <div className="stack">
      <div className="u-icon-container">
        <img className="upgrade-icon" src={img} />
      </div>
      <div className="dec-line"></div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        onClick={() => handleClick(title, price, updatePrice, updateAmount)}
      >
        <p>{price}</p>
      </button>
    </div>
  );
};

const handleClick = (title, price, updatePrice, updateAmount) => {
  if (data.current_amount >= price) {
    if (title === "Manual") {
      data.manual_value += 1;
      data.manual_price *= 2;
      data.manual_level += 1;
    } else if (title === "Builder") {
      data.builder_value += 1;
      data.builder_price *= 3;
      data.builder_level += 1;
      data.nanobots_per_second =
        data.builder_value + data.foundry_value + data.swarm_value;
    } else if (title === "Foundry") {
      data.foundry_value += 5;
      data.foundry_price *= 5;
      data.foundry_level += 1;
      data.nanobots_per_second =
        data.builder_value + data.foundry_value + data.swarm_value;
    } else if (title === "Swarm") {
      data.swarm_value += 10;
      data.swarm_price *= 10;
      data.swarm_level += 1;
      data.nanobots_per_second =
        data.builder_value + data.foundry_value + data.swarm_value;
    }
    data.current_amount -= price;
    updatePrice();
    mainAmountAndTimeCounter(updateAmount);
  }
};

const watchTime = () => {
  data.seconds += 0.1;
  if (data.seconds === 60) {
    data.seconds = 0;
    data.minutes += 1;
  }
  if (data.minutes === 60) {
    data.minutes = 0;
    data.hours += 1;
  }
};

const mainAmountAndTimeCounter = (updateAmount) => {
  const builder = data.builder_value;
  const factory = data.foundry_value;
  const swarm = data.swarm_value;
  const fraction = (builder + factory + swarm) / 10;
  setInterval(() => {
    data.current_amount += fraction;
    updateAmount();
    watchTime();
  }, 100);
};

export default UpgradeSection;

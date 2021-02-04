import React, { useEffect, useState } from "react";
import { data } from "../other/data";
import { formatNumbers } from "../other/formatnumbers";
import { smoothScroll } from "../other/smoothscroll";
import "./upgrade.css";
import super_img from "../../assets/supernano.png";
import click_img from "../../assets/click.png";
import factory_img from "../../assets/factory.png";
import swarm_img from "../../assets/swarm.png";
import StatsSection from "../stats section";

// Upgrade Section Component.
const UpgradeSection = ({ updateAmount }) => {
  const [time, setTime] = useState("00:00:00");
  // Calls amountCounter, which should continue running forever
  useEffect(() => {
    amountCounter(updateAmount, setTime);
  }, []);
  return (
    <Upgrade
      updateAmount={updateAmount}
      time={time}
      updateTime={() => setTime}
    />
  );
};

// The different upgrades
const Upgrade = ({ updateAmount, time, updateTime }) => {
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
        <div className="upgrades">
          <DifferentUpgrades
            img={click_img}
            img_alt="Manual Upgrade"
            title="Manual"
            description="Sacrifice nanobots for research! Figure out how to manually build more
          at a time."
            price={mprice}
            updatePrice={() => setMPrice(data.manual_price)}
            updateAmount={updateAmount}
            updateTime={updateTime}
          />
          <DifferentUpgrades
            img={super_img}
            img_alt="Super Nanobot Upgrade"
            title="Builder"
            description="Combine nanobots to create a super nanobot capable of creating other
          nanobots using materials around it!"
            price={bprice}
            updatePrice={() => setBPrice(data.builder_price)}
            updateAmount={updateAmount}
            updateTime={updateTime}
          />
          <DifferentUpgrades
            img={factory_img}
            img_alt="Nanobot Foundry Upgrade"
            title="Foundry"
            description="Morph nanobots together to create a microscopic nanobot factory!
          Nanobots bring it materials to create many replicas."
            price={fprice}
            updatePrice={() => setFPrice(data.foundry_price)}
            updateAmount={updateAmount}
            updateTime={updateTime}
          />
          <DifferentUpgrades
            img={swarm_img}
            img_alt="Nanobot Swarm Upgrade"
            title="Swarm"
            description="Fuse nanobots together into a swarm of flying super nanobots capable
          of finding materials and replicating!"
            price={sprice}
            updatePrice={() => setSPrice(data.swarm_price)}
            updateAmount={updateAmount}
            updateTime={updateTime}
          />
        </div>
      </div>
      <StatsSection time={time} />
    </>
  );
};

// Used to create the different upgrades in Upgrade component
const DifferentUpgrades = ({
  img,
  img_alt,
  title,
  description,
  price,
  updatePrice,
  updateAmount,
  updateTime,
}) => {
  return (
    <div className="stack">
      <div className="u-icon-container">
        <img className="upgrade-icon" src={img} alt={img_alt} />
      </div>
      <div className="dec-line"></div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        onClick={() =>
          handleClick(title, price, updatePrice, updateAmount, updateTime)
        }
      >
        <p>{formatNumbers(price)}</p>
      </button>
    </div>
  );
};

// Checks for current amount and price to decide whether to upgrade or not
const handleClick = (title, price, updatePrice, updateAmount, updateTime) => {
  if (data.current_amount >= price) {
    if (title === "Manual") {
      data.manual_value *= 2;
      data.manual_price *= 5;
      data.manual_level += 1;
    } else if (title === "Builder") {
      data.builder_value += 10;
      data.builder_price *= 2;
      data.builder_level += 1;
      data.nanobots_per_second =
        data.builder_value + data.foundry_value + data.swarm_value;
    } else if (title === "Foundry") {
      data.foundry_value += 50;
      data.foundry_price *= 3;
      data.foundry_level += 1;
      data.nanobots_per_second =
        data.builder_value + data.foundry_value + data.swarm_value;
    } else if (title === "Swarm") {
      data.swarm_value += 100;
      data.swarm_price *= 4;
      data.swarm_level += 1;
      data.nanobots_per_second =
        data.builder_value + data.foundry_value + data.swarm_value;
    }
    data.current_amount -= price;
    updatePrice();
    amountCounter(updateAmount, updateTime);
  }
};

// Formats the time in HH:MM:SS
const formatTime = () => {
  data.seconds += 0.1;
  if (data.seconds >= 60) {
    data.seconds = 0;
    data.minutes += 1;
  }
  if (data.minutes >= 60) {
    data.minutes = 0;
    data.hours += 1;
  }
  let formattedSeconds = Math.floor(data.seconds).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: true,
  });
  let formattedMinutes = Math.floor(data.minutes).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: true,
  });
  let formattedHours = Math.floor(data.hours).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: true,
  });
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

// Runs indefinitely. Updates the displayed amount on the Home Section and the time in the Stats Section
const amountCounter = (updateAmount, updateTime) => {
  const builder = data.builder_value;
  const factory = data.foundry_value;
  const swarm = data.swarm_value;
  const fraction = (builder + factory + swarm) / 10;
  setInterval(() => {
    data.current_amount += fraction;
    updateAmount();
    updateTime(formatTime);
  }, 100);
};

export default UpgradeSection;

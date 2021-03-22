import React from "react";
import { images } from "../other/images";
import "./cover.css";

const CoverPage = () => {
  // Will remove the coverpage using an animation.
  const handleClick = () => {
    let page = document.getElementsByClassName("cover")[0];
    page.style.transition = "all 2s";
    page.style.transform = "translate(-100%, 0)";
    page.style.opacity = "0";
  };
  // String message for cover page, to later be animated
  let message =
    "Create as many nanobots as possible! Make sure to purchase upgrades along the way to speed up your progress. You can also check out you stats.";
  return (
    <div className="cover">
      <div className="cover-container">
        <div>
          <div className="heading-container">
            <h1>Nanobot Factory</h1>
            <img src={images.click_icon} alt="A nanobot" />
          </div>
          <div className="dec-line"></div>
        </div>
        {/* String turned to array and mapped onto seperate span tags to animate the individual characters*/}
        <p className="description">
          {message.split("").map((char, ind) => {
            let new_animation = charStyle();
            return char !== " " ? (
              <span style={new_animation} key={ind}>
                {char}
              </span>
            ) : (
              <span className="space" style={new_animation} key={ind}>
                {char}
              </span>
            );
          })}
        </p>
        <button onClick={() => handleClick()}>LETS GO!</button>
      </div>
      <small>Created By: Roberto Guerra</small>
    </div>
  );
};

// Animation for the cover text
let textDelay = 0;
function charStyle() {
  const textAnimation = {
    animation: `animateText 0.03s ${textDelay.toFixed(2)}s forwards`,
  };
  textDelay += 0.03;
  return textAnimation;
}

export default CoverPage;

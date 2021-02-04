import React from "react";
import "./cover.css";
import img from "../../assets/click-icon-1.png";

const CoverPage = () => {
  // Will remove the coverpage using an animation.
  const handleClick = () => {
    let page = document.getElementsByClassName("cover")[0];
    page.style.transition = "all 2s";
    page.style.transform = "translate(-100%, 0)";
    page.style.opacity = "0";
  };
  // Using span tag to animate individual letters in p tag.
  return (
    <div className="cover">
      <div className="cover-container">
        <div>
          <div className="heading-container">
            <h1>Nanobot Factory</h1>
            <img src={img} alt="A nanobot" />
          </div>
          <div className="dec-line"></div>
        </div>
        <p className="description">
          <span>C</span>
          <span>r</span>
          <span>e</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span className="space"> </span>
          <span>a</span>
          <span>s</span>
          <span className="space"> </span>
          <span>m</span>
          <span>a</span>
          <span>n</span>
          <span>y</span>
          <span className="space"> </span>
          <span>n</span>
          <span>a</span>
          <span>n</span>
          <span>o</span>
          <span>b</span>
          <span>o</span>
          <span>t</span>
          <span>s</span>
          <span className="space"> </span>
          <span>a</span>
          <span>s</span>
          <span className="space"> </span>
          <span>p</span>
          <span>o</span>
          <span>s</span>
          <span>s</span>
          <span>i</span>
          <span>b</span>
          <span>l</span>
          <span>e</span>
          <span>!</span>
          <br></br>
          <span>M</span>
          <span>a</span>
          <span>k</span>
          <span>e</span>
          <span className="space"> </span>
          <span>s</span>
          <span>u</span>
          <span>r</span>
          <span>e</span>
          <span className="space"> </span>
          <span>t</span>
          <span>o</span>
          <span className="space"> </span>
          <span>p</span>
          <span>u</span>
          <span>r</span>
          <span>c</span>
          <span>h</span>
          <span>a</span>
          <span>s</span>
          <span>e</span>
          <span className="space"> </span>
          <span>u</span>
          <span>p</span>
          <span>g</span>
          <span>r</span>
          <span>a</span>
          <span>d</span>
          <span>e</span>
          <span>s</span>
          <span className="space"> </span>
          <span>a</span>
          <span>l</span>
          <span>o</span>
          <span>n</span>
          <span>g</span>
          <span className="space"> </span>
          <span>t</span>
          <span>h</span>
          <span>e</span>
          <span className="space"> </span>
          <span>w</span>
          <span>a</span>
          <span>y</span>
          <br></br>
          <span>t</span>
          <span>o</span>
          <span className="space"> </span>
          <span>s</span>
          <span>p</span>
          <span>e</span>
          <span>e</span>
          <span>d</span>
          <span className="space"> </span>
          <span>u</span>
          <span>p</span>
          <span className="space"> </span>
          <span>y</span>
          <span>o</span>
          <span>u</span>
          <span>r</span>
          <span className="space"> </span>
          <span>p</span>
          <span>r</span>
          <span>o</span>
          <span>g</span>
          <span>r</span>
          <span>e</span>
          <span>s</span>
          <span>s</span>
          <span>.</span>
          <span className="space"> </span>
          <span>Y</span>
          <span>o</span>
          <span>u</span>
          <span className="space"> </span>
          <span>c</span>
          <span>a</span>
          <span>n</span>
          <span className="space"> </span>
          <span>a</span>
          <span>l</span>
          <span>s</span>
          <span>o</span>
          <span className="space"> </span>
          <span>c</span>
          <span>h</span>
          <span>e</span>
          <span>c</span>
          <span>k</span>
          <span className="space"> </span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <br></br>
          <span>y</span>
          <span>o</span>
          <span>u</span>
          <span>r</span>
          <span className="space"> </span>
          <span>s</span>
          <span>t</span>
          <span>a</span>
          <span>t</span>
          <span>s</span>
          <span className="space"> </span>
          <span>a</span>
          <span>t</span>
          <span className="space"> </span>
          <span>a</span>
          <span>n</span>
          <span>y</span>
          <span className="space"> </span>
          <span>p</span>
          <span>o</span>
          <span>i</span>
          <span>n</span>
          <span>t</span>
          <span>.</span>
        </p>
        <button onClick={() => handleClick()}>LETS GO!</button>
      </div>
      <small>Created By: Roberto Guerra</small>
    </div>
  );
};

export default CoverPage;

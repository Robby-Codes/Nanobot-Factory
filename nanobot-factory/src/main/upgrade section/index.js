import React from "react";
import ReactDOM from "react-dom";
import "./upgrade.css";
import img from "../../assets/click-icon-1.png";

const Upgrade = () => {
  return (
    <div className="upgrade-container">
      <div
        className="stack u1"
        onClick={() => {
          alert("Success!");
        }}
      >
        <div className="u-icon-container">
          <img className="upgrade-icon" src={img} />
        </div>
        <div className="dec-line"></div>
        <h1>Nano</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea
          ducimus fuga quia delectus deleniti ipsum eaque ex molestiae dolorum
          deserunt, nobis non recusandae adipisci possimus repudiandae aut nemo
          itaque.
        </p>
      </div>
      <div className="stack u2">
        <div className="u-icon-container">
          <img className="upgrade-icon" src={img} />
        </div>
        <div className="dec-line"></div>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea
          ducimus fuga quia delectus deleniti ipsum eaque ex molestiae dolorum
          deserunt, nobis non recusandae adipisci possimus repudiandae aut nemo
          itaque.
        </p>
      </div>
      <div className="stack u3">
        <div className="u-icon-container">
          <img className="upgrade-icon" src={img} />
        </div>
        <div className="dec-line"></div>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea
          ducimus fuga quia delectus deleniti ipsum eaque ex molestiae dolorum
          deserunt, nobis non recusandae adipisci possimus repudiandae aut nemo
          itaque.
        </p>
      </div>
      <div className="stack u4">
        <div className="u-icon-container">
          <img className="upgrade-icon" src={img} />
        </div>
        <div className="dec-line"></div>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea
          ducimus fuga quia delectus deleniti ipsum eaque ex molestiae dolorum
          deserunt, nobis non recusandae adipisci possimus repudiandae aut nemo
          itaque.
        </p>
      </div>
    </div>
  );
};

export default Upgrade;

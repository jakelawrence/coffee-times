import React, { Component } from "react";
import Coffee from "../../imgs/coffee.svg";
import "./head.css";

class Head extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="top">
          <div className="title">The Coffee Times</div>
          <div className="sub-title-container">
            <img src={Coffee} alt="" />
            <div className="sub-title">Giving you a latte news.</div>
            <img src={Coffee} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Head;

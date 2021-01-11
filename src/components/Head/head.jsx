import React, { Component } from "react";
import "./head.css";

class Head extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="top">
          <div className="title">The Coffee Times</div>
          <div className="sub-title">Giving you a latte news.</div>
        </div>
      </>
    );
  }
}

export default Head;

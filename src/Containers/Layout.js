import React, { Component } from "react";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import "./Layout.css";
import Footer from "./Footer";

const footerstyle = {
  minHeight: "100%",
  position: "relative",
  height: "50px",
  bottom: "0",
  clear: "both",
  backgroundColor: "darkred"
};

export default class Layout extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <NavBar></NavBar>
          </div>
        </div>
      </>
    );
  }
}

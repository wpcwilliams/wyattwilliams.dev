import React, { Component } from "react";

import About from "./About";

export default class Landing extends Component {
  componentDidMount() {
    document.title = "wyattwilliams.dev";
  }

  render() {
    return (
      <div>
        <About />
      </div>
    );
  }
}

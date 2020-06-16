import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default class NavBar extends Component {
  state = {
    activeLink: window.location.pathname,
  };

  updateState = () => {
    if (this.state.activeLink !== window.location.pathname) {
      this.setState({ activeLink: window.location.pathname });
    }
  };

  render() {

    return (
      <nav className="nav-bar sticky" onClick={this.updateState}>
        <span className="logo route">
          <NavLink exact to="/">
            <li>
              wyattwilliams.dev
              <div className="path">{this.state.activeLink}</div>
              <div className="blinking">|</div>
            </li>
          </NavLink>
        </span>
        <span className="nav-links route">
          <NavLink to="/projects" activeClassName="activeRoute">
            <li>PROJECTS</li>
          </NavLink>
          <NavLink to="/contact" activeClassName="activeRoute">
            <li>CONTACT</li>
          </NavLink>
          {/* <NavLink TODO
            to="/services"
            className="nav-links"
            activeClassName="activeRoute"
          >
            <li>SERVICES</li>
          </NavLink> */}
        </span>
      </nav>
    );
  }
}

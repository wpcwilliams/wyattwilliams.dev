import React, { Component } from "react";
import NavItem from "../Components/NavItem";
import { NavLink } from "react-router-dom";

import "./NavBar.css";


export default class NavBar extends Component {
  render() {
    const activeLinkStyle = {
        color: 'black'
    }
    return (
      <nav className="nav-bar">
        <span className="logo nav-links">
          <NavLink exact to="/">
            <li>wyattwilliams.dev</li>
          </NavLink>
        </span>
        <span className="nav-links">
          <NavLink to="/projects" activeClassName='activeRoute'>
            <li>PROJECTS</li>
          </NavLink>
          <NavLink to="/services" className="nav-links" activeClassName='activeRoute'>
            <li>SERVICES</li>
          </NavLink>
          <NavLink to="/contact" activeClassName='activeRoute'>
            <li>CONTACT</li>
          </NavLink>
        </span>
      </nav>
    );
  }
}

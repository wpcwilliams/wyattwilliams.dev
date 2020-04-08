import React, { Component } from "react";

import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="form-container">
        <h1>Contact</h1>
        <form className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" required placeholder="Your name..." />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" required placeholder="Your email..." />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input />
          </div>
          <label htmlFor="message">Message</label>
          <textarea required></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      company: "",
      message: "",
      submitEnabled: true,
      submitBox: "Submit",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitEnabled: false, submitBox: "Submitting..." });
    axios({
      method: "POST",
      url: "http://wyattwilliams.dev/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        this.resetForm();
        alert("Message sent successfully.");
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
      this.setState({ submitEnabled: true, submitBox: "Submit" });
    });
  };

  toggleSubmit() {
    this.setState({ submitEnabled: !this.state.submitEnable });
  }

  resetForm() {
    this.setState({ name: "", email: "", company: "", message: "" });
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onCompanyChange = (event) => {
    this.setState({ company: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <h2>CONTACT</h2>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              placeholder="Required..."
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              placeholder="Required..."
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              value={this.state.company}
              onChange={this.onCompanyChange}
            />
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            required
            placeholder="Required..."
            value={this.state.message}
            onChange={this.onMessageChange}
          />
          <input
            type="submit"
            disabled={!this.state.submitEnabled}
            value={this.state.submitBox}
          ></input>
        </form>
      </div>
    );
  }
}

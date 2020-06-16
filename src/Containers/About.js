import React, { Component } from "react";
import resume from "../files/Wyatt_Williams_Resume.pdf";
import List from "../Components/List";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-toggle">
        <div className="flex-container">
          <List
            class="container-text"
            items={[
              "I have a deep passion for solving problems, learning new things, and developing great software.",
              "If you feel that I might be a good fit for your company or project then I'd appreciate the opportunity to speak with you.",
              "To contact me please visit my contact page or email me directly at the email listed on my resume.",
            ]}
          />

          <div className="about-details-container">
            <div className="detail-item">
              <h1>SOFTWARE ENGINEERING</h1>
              <List
                items={[
                  "Applies object-oriented design principles and patterns to develop testable, maintainable, and secure software. ",
                  "Successfully applies Agile development, and Test-driven development methods.",
                  "Conducts independent or collaborative research to determine the optimal solution to a problem.",
                ]}
              />
            </div>
            <div className="detail-item">
              <h1>TOOLS & TECHNOLOGIES</h1>
              <List
                items={[
                  "Web: React, Redux, Node.js, jQuery, RESTful Design",
                  "Desktop: WPF, .NET Core",
                  "Database: MySQL, MongoDB, Entity Framework",
                  "Version Control: Git, Mercurial",
                  "Mobile: Android",
                ]}
              />
            </div>
            <div className="detail-item">
              <h1>CORE SKILLS</h1>
              <List
                items={[
                  "Able to acquire and apply new skills rapidly and genuinely interested in doing so.",
                  "Enjoys working with and learning from team-members.",
                  "Dependable, hardworking and self-motivated",
                  "Excellent verbal and written communication skills.",
                  "Passionate about building robust and impactful software solutions.",
                ]}
              />
            </div>
            <div className="detail-item">
              <h1>LANGUAGES</h1>
              <List items={["Java", "C#", "JavaScript", "HTML/CSS", "SQL"]} />
            </div>
          </div>

          <a href={resume} target="_blank">
            <div style={{ textAlign: "center" }}>
              <button>View Resume (PDF)</button>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

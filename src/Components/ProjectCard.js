import React, { Component, useEffect } from "react";

import List from "./List";
import "./ProjectCard.css";

/*
props:
    stack           - array[] of strings representing tech stack
    description     - array[] of strings with each entry item becoming a paragraph
    stackDetails    - string to add context to tech stack
    codeLink       - link to code for project
    codeLabel      - hyperlink text for code-link
    projectLink    - link to hosted project
    projectLabel   - hyperlink text for project-link
*/

export default class ProjectCard extends Component {
  render() {
    let description;
    if (this.props.description)
      description = this.props.description.map((item, index) => (
        <p key={index}>{item}</p>
      ));

    let codeLink = "";
    if (this.props.codeLink) {
      codeLink = (
        <a target="_blank" rel="noopener noreferrer" href={this.props.codeLink}>
          {this.props.codeLabel}
        </a>
      );
    }

    let projectLink = "";
    if (this.props.projectLink) {
      projectLink = (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.projectLink}
          >
            {this.props.projectLabel}
          </a>
          <br />
        </>
      );
    }

    return (
      <div className="project-card">
        <h2>{this.props.title}</h2>
        {description}
        {projectLink}
        <br />

        <h3>
          <strong>Tech Stack:</strong>
        </h3>
        <List items={this.props.stack} />
        <p>{this.props.stackDetails}</p>
        <br />

        {codeLink}
        {this.props.children}
      </div>
    );
  }
}

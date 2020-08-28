import React, { Component } from "react";
import ProjectCard from "../Components/ProjectCard";

import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="container-text projects-container">
          <ProjectCard
            title="Job Search App"
            stack={["jQuery", "Express", "Axios"]}
            description={[
              "Search Glassdoor.com more efficiently with this app. Features include paging, filtering and custom query lists.",
              "After searching click a location to view it on Google Maps or click a job title to view the full posting on Glassdoor.",
              "I am actively using and developing this project. Some features are currently not fully implemented.",
            ]}
            projectLink="http://www.wyattwilliams.dev/jobs"
            projectLabel="Find your next job here..."
          />
          <br />
          <ProjectCard
            title="wyattwilliams.dev"
            stack={["React", "React-Router", "Node", "Express"]}
            description={[
              "The frontend of this site was created with custom React code and styling.",
              "Node and Express were used on the backend for the contact page emailer.",
              "My primary goals in creating this website were clarity, responsiveness, and extensibility.",
            ]}
            codeLink="https://github.com/wpcwilliams/wyattwilliams.dev"
            codeLabel="View frontend code on Github"
          >
            <br />
            <a
              href="https://github.com/wpcwilliams/contact-mailer"
              target="_blank"
              rel="noopener noreferrer"
            >
              View backend code on Github
            </a>
          </ProjectCard>
          <br />
          <ProjectCard
            title="Movie Database CRUD App"
            stack={["jQuery", "PHP", "MySQL"]}
            description={[
              "I collected the data for this app with a Node script that connects to the OMDb RESTful API.",
              "This app includes create, read, update, and delete functionality. Sorting is available for each column.",
              "Please note: I have setup a cron job to clean the database on the hour every hour.",
            ]}
            projectLink="http://www.wyattwilliams.dev/movies"
            projectLabel="Try this project out"
          />
          <br />
          <ProjectCard
            title="URL-Shortening Service"
            stack={["jQuery", "Node", "Express", "MongoDb"]}
            description={[
              "A service to shorten a long URL for sharing like Bit.ly or similiar services.",
            ]}
            codeLink="https://github.com/wpcwilliams/url-shortener"
            codeLabel="View code on Github"
            projectLink="http://www.wyattwilliams.dev/link"
            projectLabel="Try this project out"
          />
          <br />
        </div>
      </div>
    );
  }
}

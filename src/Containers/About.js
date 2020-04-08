import React, { Component } from "react";
import { Link } from "react-router-dom";

import './About.css'

export default class About extends Component {
  clickHandler = () => {
    let resumeLink = "";

    return (
      <Link to="/me.JPG" target="_blank" download>
        Download
      </Link>
    );
  };

  render() {
    return (
      <div className='about-container'>
        <h1>About</h1>
        <textbox className='about-text'>
          Graduate in Computer Science from Eastern Washington University.
          Currently seeking exciting opportunities in software engineering. My
          interests range from web development to Passion for learning new
          things, solving problems, and developing great software. With an avid
          interest in music and music technology. If you feel I might be a good
          fit for your project or company then I'd welcome the opportunity to
          speak with you.
        </textbox>

        <img src="desktop.jpg" width="50%" ></img>
        <h1>CORE SKILLS</h1>
        <div className='about-text'>
            <ul>
               <li>Able to acquire and apply new skills rapidly and genuinely interested in doing so.</li>
               <li>Enjoys working with and learning from team-members. </li>
               <li>Dependable, hardworking and self-motivated.</li>
               <li>Excellent verbal and written communication skills.</li>
               <li>Passionate about building robust and impactful software solutions.</li>
            </ul>
        </div>

        <h1>LANGUAGES</h1>
        <div>
            <ul>
            {/* <li></li> */}

            </ul>
        </div>

        <h1>TOOLS AND TECHNOLOGIES</h1>
        <div>
            <ul>
            </ul>
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            href="/me.JPG"
            target="_blank"
            download="Wyatt_Williams_Resume.pdf"
          >
            Download Resume (PDF)
          </button>
        </div>
      </div>
    );
  }
}

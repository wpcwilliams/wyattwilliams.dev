import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';

import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='flex-container'>
        <div className='container-text projects-container'>
          <ProjectCard
            title='wyattwilliams.dev'
            stack={['React', 'React-Router', 'Node', 'Express']}
            description={[
              'The frontend of this site was created with custom React code and styling.',
              'Node and Express were used on the backend for the contact page emailer.',
              'My primary goals in creating this website were clarity, responsiveness, and extensibility.',
            ]}
            codeLink='https://github.com/wpcwilliams/wyattwilliams.dev'
            codeLabel='View frontend code on Github'
          >
            <br />
            <a href='https://github.com/wpcwilliams/wyattwilliams.dev'>
              View backend code on Github
            </a>
          </ProjectCard>
          <br />
          <ProjectCard
            title='URL-Shortening Service'
            stack={['jQuery', 'Node', 'Express', 'MongoDb']}
            description={['A service to shorten a long URL for sharing.']}
            codeLink='https://github.com/wpcwilliams/codeLink-shortener'
            codeLabel='View code on Github'
            projectLink='http://www.wyattwilliams.dev/link'
            projectLabel='Test out this project'
          />
          <br />
          <ProjectCard
            title='CRUD App'
            stack={['jQuery', 'PHP']}
            description={[
              'Simple CRUD app example using PHP with no styling applied.',
            ]}
            codeLink='https://github.com/wpcwilliams/wyattwilliams.dev'
            codeLabel='View code on Github'
          />
          <br />
          <ProjectCard
            title='Tetromino game'
            stack={['React', 'React-Router', 'Node', 'Express']}
            description={['Inspired by the classic game...']}
            codeLink='https://github.com/wpcwilliams/wyattwilliams.dev'
            codeLabel='View code on Github'
          />
          <br />
        </div>
      </div>
    );
  }
}

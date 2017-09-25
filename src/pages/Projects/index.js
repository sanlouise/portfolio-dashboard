import React from 'react';
import projects from '../../assets/data/projects.js';
import './styles.css';
import map from 'lodash/map';

const Projects = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="header text-center">
              <h4 className="title">Thank you for checking out my projects.</h4>
            </div>
            <div className="content projects container">
              <div className="row">
                {map(projects, (project) => (
                  <div className="col-xs-12 project" key={project.id}>
                    <div className="col-lg-6 col-sm-12">
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <ul>
                        {map(project.points, (point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <img src={project.src} />
                    </div>
                    <hr />
                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;

import React from 'react';
import projects from '../../assets/data/projects.js';
import './styles.css';
import map from 'lodash/map';
import github from '../../assets/images/github.png';
import { Link } from 'react-router-dom';

const Projects = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card projects">
            <div className="header text-center">
              <h2 className="title">Thank you for checking out my projects.</h2>
            </div>
            <div className="content container">
              <div className="row">
                {map(projects, (project) => (
                  <div className="project container" key={project.id}>
                    <hr className="divider"/>
                    <div className="col-md-5 col-sm-12 project-info">
                      <h3 className="title">{project.name}</h3>
                      <h5>Built with: <span className="technologies">{project.technologies}</span>
                      </h5>
                      <p>{project.description}</p>
                      <ul>
                        {map(project.points, (point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <a href={project.github}>View on Github <img className="github" src={github}/></a>
                    </div>
                    <div className="col-md-4 col-sm-12 project-image">
                      <img src={project.src} />
                    </div>
                  </div>

                ))}
              </div>
            </div>
            <div className="text-center">
              <Link to="/ios-projects">
                <button className="btn btn-default">
                  View My iOS Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;

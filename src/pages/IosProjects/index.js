import React from 'react';
import Iframe from 'react-iframe'
import projects from '../../assets/data/iosprojects.js';
import './styles.css';
import map from 'lodash/map';
import github from '../../assets/images/github.png';

const IosProjects = () => (
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
                    <div className="col-sm-4 col-xs-12 ios-project-info">
                      <h3 className="title">{project.name}</h3>
                      <p>{project.description}</p>
                      <ul>
                        {map(project.points, (point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <a href={project.github}>View on Github <img className="github" src={github}/></a>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <Iframe url={project.src} width="183px" height="391px" />
                    </div>
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

export default IosProjects;

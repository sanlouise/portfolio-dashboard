import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactSpinningLogo from '../assets/images/svgs/ReactSpinning';
import './styles.css';

const SideBar = ({
  location,
}) => (
  <div className="sidebar">
    <div className="sidebar-wrapper">
      <div className="logo">
        <ReactSpinningLogo className="App-logo text-center" alt="react logo" />
        <a href="/" className="simple-text">Sandra Hallie</a>
      </div>
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-user"></i>
            <p>About Me</p>
          </Link>
        </li>
        <li>
          <a href="https://resume.creddle.io/resume/ijhfjyvpew8">
            <i className="pe-7s-note2"></i>
            <p>Resume</p>
          </a>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : null}>
          <Link to="/projects">
            <i className="pe-7s-science"></i>
            <p>Projects</p>
          </Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : null}>
          <Link to="/contact">
            <i className="pe-7s-mail"></i>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);


export default withRouter(connect()(SideBar));

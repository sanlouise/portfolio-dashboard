import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import backgroundImage from '../assets/images/sidebar-5.jpg';

const SideBar = ({
  location,
  backgroundColor,
  enableBackgroundImage,
  backgroundImage
}) => (
  <div className="sidebar" data-color={backgroundColor} data-image={backgroundImage}>
    <div className="sidebar-wrapper">
      <div className="logo">
        <a href="" className="simple-text">
          Sandra Hallie
        </a>
      </div>

      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={location.pathname === '/profile' ? 'active' : null}>
          <Link to="/profile">
            <i className="pe-7s-user"></i>
            <p>User Profile</p>
          </Link>
        </li>
        <li className={location.pathname === '/profile' ? 'active' : null}>
          <Link to="/profile">
            <i className="pe-7s-user"></i>
            <p>Resume</p>
          </Link>
        </li>
        <li className={location.pathname === '/table' ? 'active' : null}>
          <Link to="/table">
            <i className="pe-7s-note2"></i>
            <p>React Projects</p>
          </Link>
        </li>
        <li className={location.pathname === '/typography' ? 'active' : null}>
          <Link to="typography">
            <i className="pe-7s-news-paper"></i>
            <p>Rails Projects</p>
          </Link>
        </li>
        <li className={location.pathname === '/icons' ? 'active' : null}>
          <Link to="/icons">
            <i className="pe-7s-science"></i>
            <p>iOS Projects</p>
          </Link>
        </li>
      </ul>
    </div>
    <div
      className="sidebar-background"
      style={{
        backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
      }}>
    </div>
  </div>
);

const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage
});

export default withRouter(
  connect(mapStateToProps)(SideBar)
);

import React from 'react';
import github from '../../assets/images/github-icon.png';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <p className="copyright text-center">
        © 2017 Sandra Hallie
        <a href="https://www.codewars.com/users/sanlouise">
          <img src="https://www.codewars.com/users/sanlouise/badges/small" alt="codewars"/>
          <a href="https://github.com/sanlouise"><img className="github" src={github}/></a>
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;

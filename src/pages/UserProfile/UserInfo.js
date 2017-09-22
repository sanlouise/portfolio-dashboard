import React from 'react';
import profileImage from '../../assets/images/profile-image.jpeg';
const UserInfo = () => (
  <div className="card card-user">
    <div className="image">
      <img src="https://static.pexels.com/photos/249798/pexels-photo-249798.png" alt="..." />
    </div>
    <div className="content">
      <div className="author">
        <a href="#">
          <img className="avatar" src={profileImage} alt="Sandra Hallie" />

          <h4 className="title">
            Sandra Hallie<br />
            <small>sanlouise</small>
          </h4>
        </a>
      </div>
      <p className="description text-center">
        "I am a React developer with a true love for JavaScript."
      </p>
    </div>
    <hr />
    <div className="text-center">
      <button href="#" className="btn btn-simple"><i className="fa fa-facebook-square"></i></button>
      <button href="#" className="btn btn-simple"><i className="fa fa-twitter"></i></button>
      <button href="#" className="btn btn-simple"><i className="fa fa-google-plus-square"></i></button>
    </div>
  </div>
);

export default UserInfo;

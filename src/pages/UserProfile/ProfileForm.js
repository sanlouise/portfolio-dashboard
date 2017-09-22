import React from 'react';

const ProfileForm = () => (
  <div className="card">
    <div className="header">
      <h4 className="title text-center">My Profile</h4>
    </div>
    <div className="content">
      <form>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Company</label>
              <input type="text" className="form-control" disabled="" placeholder="Company" defaultValue="Maybe your company!" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="Username" defaultValue="sanlouise" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="sandra.adamshallie@gmail.com" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="Sandra" defaultValue="Sandra" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Hallie" defaultValue="Hallie" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>City</label>
              <input type="text" className="form-control" placeholder="St. Petersburg, Florida" defaultValue="St. Petersburg, Florida" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Country</label>
              <input type="text" className="form-control" placeholder="United States" defaultValue="United States" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>About Me</label>
              <textarea rows="5" className="form-control" placeholder="I am a React developer." defaultValue="I am a React developer with a true love for JavaScript. When I'm not building out web or mobile apps, I'm either reading up on the latest JS framework or hacking away on Codewars."/>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default ProfileForm;

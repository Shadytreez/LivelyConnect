import React from "react";
var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          <link rel="stylesheet" href="css/styles.css" />
          <title> List of Events</title>
          <h1>LivelyConnect</h1>
          <div className="col-1">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action-hover" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
              <a className="list-group-item list-group-item-action-hover" id="list-host/joinevents-list" data-bs-toggle="list" href="#list-host/joinevents" role="tab" aria-controls="list-host/joinevents">Host/Join Events</a>
              <a className="list-group-item list-group-item-action-hover" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
              <a className="list-group-item list-group-item-action-hover" id="list-aboutus-list" data-bs-toggle="list" href="#list-aboutus" role="tab" aria-controls="list-aboutus">About Us</a>
              <a className="list-group-item list-group-item-action-hover" id="list-signinout-list" data-bs-toggle="list" href="#list-signinout" role="tab" aria-controls="list-signinout">Sign In/Log Out</a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="row1left col-5"><input className="form-control-lg" type="text" placeholder="First Event Title" readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Time/Location" readOnly />
              </div>
              <div className="row1right col-5"><img src="https://unsplash.com/photos/ydP30oqnYCc" alt="Random Image" width={300} height={140} /></div>
            </div>
            <div className="row">
              <div className="row2left col-5"><input className="form-control-lg" type="text" placeholder="Second Event Title" readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Time/Location" readOnly /></div>
              <div className="row2right col-5"><img src="https://unsplash.com/photos/ydP30oqnYCc" alt="Random Image" width={300} height={140} /></div>
            </div>
            {/* Force next columns to break to new line */}
            <div className="w-100" />
            <div className="row">
              <div className="row3left col-5"><input className="form-control-lg" type="text" placeholder="Third Event Title" readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Time/Location" readOnly /></div>
              <div className="row3right col-5"><img src="https://unsplash.com/photos/ydP30oqnYCc" alt="Random Image" width={300} height={140} /></div>
            </div>
            <div className="row">
              <div className="row4left col-5"><input className="form-control-lg" type="text" placeholder="Fourth Event Title" readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Time/Location" readOnly /></div>
              <div className="row4right col-5"><img src="https://unsplash.com/photos/ydP30oqnYCc" alt="Random Image" width={300} height={140} /></div>
            </div>
            <div className="row">
              <div className="row5left col-5"><input className="form-control-lg" type="text" placeholder="Fifth Event Title" readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Time/Location" readOnly /></div>
              <div className="row5right col-5"><img src="https://unsplash.com/photos/ydP30oqnYCc" alt="Random Image" width={300} height={140} /></div>
            </div> 
          </div>
        </div>
      );
    }
  });
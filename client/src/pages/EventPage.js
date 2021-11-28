import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Popup from 'reactjs-popup';
// const { Event } = require('../../../api/models/event');

// POP-UP EXAMPLE:

// <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>


// function getEventName(props) {
//     return Event.name
// }

// function getActivityType(props) {
//     return Event.activityType
// }

// function getDescription(props) {
//     return Event.description
// }

// function getZoomLink(props) {
//     return Event.link
// }

class EventPage extends Component {

    state = {
        name: '',//this.getEventName,
        activity: '', //this.getActivityType,
        description: '',//this.getDescription,
        zoom: '' //this.getZoomLink,
    }


    render() {
        return (
            <div style = {{ textAlign: 'center' }}>
                <div>
                    <img id = "banner" src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        style={{ height: 504.9, width: 897.6}}/>
                </div>
                <br/>
                <div className = "container">
                    <div>
                        <h2 id = 'eventName' size = '81'>This Is The Event Name</h2><br/><br/>
                    </div>
                    <div className = "row row-cols-2">
                        <div className = "col">
                            { /* Event name, description, activity type */}
                            <p id = 'activityType' rows= '2' cols= '80'>This is the event's activity type.</p><br/>
                            <p id = 'description' rows = '15' cols = '80'>This is the event description</p>
                            <br/><br/>
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <br/>
                            <text id = 'dateTime' placeholder = '' type = 'date'>Date of event.</text><br/><br/>
                            <a id = 'link' placeholder = 'Zoom Link' href = 'www.google.com'>Zoom link</a><br/><br/> {/* make zoom link taller */}
                            <button id = 'rsvp'>RSVP Event</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;
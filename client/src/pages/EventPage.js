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
                <div style ={{ marginBottom: 50 }}>
                    <img id = "banner" src = 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg'
                        style={{ height: 504.9, width: 897.6}}/>
                </div>
                <div className = "container" style = {{ marginBottom: 100 }}>
                    <div>
                        <h2 id = 'eventName' size = '81'>This Is The Event Name</h2><br/><br/>
                    </div>
                    <div className = "row row-cols-2">
                        <div className = "col"  style = {{ textAlign: 'left', marginLeft: 25 }}>
                            { /* Event name, description, activity type */}
                            <p id = 'activityType' rows= '2' cols= '75'>This is the event's activity type.</p><br/>
                            <p id = 'description' rows = '15' cols = '75'>This is the event description</p>
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <br/>
                            <text id = 'dateTime' placeholder = '' type = 'date' >Date of event.</text><br/><br/>
                            <a id = 'link' placeholder = 'Zoom Link' href = 'www.google.com'>Zoom link</a><br/><br/> {/* make zoom link taller */}
                            <button id = 'rsvp'>RSVP Event</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;
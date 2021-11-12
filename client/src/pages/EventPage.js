import React, { Component } from 'react';
// const { Event } = require('');

// function getEventName(props) {
//     return Event
// }

// function ActivityType(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

// function Description(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

// function ZoomLink(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

class EventPage extends Component {

    state = {
        name: '',
        activity: '',
        description: '',
        zoom: '',
    }


    render() {
        return (
            <div>
                <div id = 'banner'>  </div> { /* image of the banner */ }
                <div className = "row">
                    <div className = "container">
                        <div className = "col">
                            { /* Event name, description, activity type */}
                            <input id = 'eventName' placeholder = 'What is the name of the event?'/>
                            <input id = 'description' placeholder = 'What can we expect from this event?'/>
                            <input id = 'activityType' placeholder = 'What kind of activity is this?'/>
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <input id = 'dateTime' placeholder = '' type = 'date'/>
                            <button id = 'rsvp'>RSVP</button>
                            <input id = 'link' placeholder = 'Zoom Link'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;
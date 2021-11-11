import React, { Component } from 'react';
const { Event } = require('');

function EventName(props) {
    return (
        <div>

        </div>
    );
}

function ActivityType(props) {
    return (
        <div>
            
        </div>
    );
}

function Description(props) {
    return (
        <div>
            
        </div>
    );
}

function ZoomLink(props) {
    return (
        <div>
            
        </div>
    );
}

class CreateEventPage extends Component {

    state = {
        name: '',
        activity: '',
        description: '',
        zoom: '',
    }


    render() {
        return (
            <div>
                <div className = 'header'></div> { /* image of the banner  */ }
                <div className = "container">
                    <div className = "row row-cols-2">
                        <div className = "col">
                            { /* Event name, description, activity type */}
                            <input id = 'eventName' type = 'text' size = '50' placeholder = 'Name of the event:'/><br></br>
                            <textarea id = 'activityType' rows= '2' cols= '80' placeholder = 'What kind of activity is this?'></textarea><br></br>
                            <textarea id = 'description' rows = '15' cols = '80' placeholder = 'What can we expect from this event?'></textarea><br></br>
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <input id = 'dateTime' placeholder = '' type = 'date'/>
                            <button id = 'rsvp'>RSVP</button><br></br>
                            <input id = 'link' placeholder = 'Zoom Link'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEventPage;
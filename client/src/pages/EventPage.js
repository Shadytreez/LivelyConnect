import React, { Component } from 'react';
// import Popup from 'reactjs-popup';
const { Event } = require('../../../api/models/event');

// POP-UP EXAMPLE:

// <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>


function getEventName(props) {
    return Event.name
}

function getActivityType(props) {
    return Event.activityType
}

function getDescription(props) {
    return Event.description
}

function getZoomLink(props) {
    return Event.link
}

class EventPage extends Component {

    state = {
        name: this.getEventName,
        activity: this.getActivityType,
        description: this.getDescription,
        zoom: this.getZoomLink,
    }


    render() {
        return (
            <div>
                <div className = "banner" style={{ 
                    backgroundImage: 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg',
                    backgroundSize: '100% 100%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: 594, 
                    width: 1056,
                }}>  </div> { /* image of the banner */ }
                
                <div className = "container" style= {{ textAlign: 'center',}}>
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
                            <a id = 'link' placeholder = 'Zoom Link' href = 'google.com'>Zoom link</a><br/><br/> {/* make zoom link taller */}
                            <button id = 'rsvp'>RSVP Event</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;
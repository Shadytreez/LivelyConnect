import { Component } from "react";
const { Event } = require('../../../api/models/Event');

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

class EditEventPage extends Component{
    render() {
        return (
            <div>
                <div className = "banner" style={{ 
                    backgroundImage: `url(${this.state.bannerImg})`, 
                    backgroundSize: '100% 100%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: 594, 
                    width: 1056,
                    textAlign: 'center',
                     }}> 
                    <input placeholder = 'image URL' size = '50' type = 'text' style={{ marginTop: 100, alignItems: 'center' }} onChange={ this.imgURL }/>
                    {/* <button id = 'submitBanner' onClick={ this.imgChange }>Show image!</button> */}
                </div> { /* image of the banner  */ }

                <div className = "container" style= {{ textAlign: 'center',}}>
                    <div className = "row row-cols-2">
                        <div className = "col">
                            { /* Event name, description, activity type */}
                            <br/><br/>
                            <input id = 'eventName' type = 'text' size = '81' placeholder = 'Name of the event:'/><br/><br/>
                            <textarea id = 'activityType' rows= '2' cols= '80' placeholder = 'What kind of activity is this?'></textarea><br/><br/>
                            <textarea id = 'description' rows = '15' cols = '80' placeholder = 'What can we expect from this event?'></textarea>
                            <br/><br/>
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <br/><br/>
                            <input id = 'dateTime' placeholder = '' type = 'date'/><br/><br/>
                            <textarea id = 'link' rows = '5' placeholder = 'Zoom Link'/><br/><br/> {/* set max height */}
                            <button id = 'rsvp' onClick = { this.onClick }>Submit</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
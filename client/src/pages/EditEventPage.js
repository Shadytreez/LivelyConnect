import { Component } from "react";
// const { Event } = require('../../../api/models/Event');

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


// USE PUSH TO UPDATE

class EditEventPage extends Component{
    render() {
        return (
            <div style = {{ textAlign: 'center' }}>
                <div id = "banner" style={{ 
                    backgroundImage: `url(${this.state.bannerImg})`, 
                    backgroundSize: '100% 100%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: 504.9, // 1080 
                    width: 897.6   // 1920
                     }}> 
                    <input placeholder = 'image URL' size = '50' type = 'text' style={{ marginTop: 100, alignItems: 'center' }} onChange={ this.imgURL }/>
                </div> { /* image of the banner  */ }

                <div className = "container" style = {{ marginBottom: 100 }}>
                    <div className = "row row-cols-2">
                        <div className = "col">
                            { /* Event name, description, activity type */}
                            <br/><br/>
                            <input id = 'eventName' type = 'text' placeholder = 'Name of the event:' style = {{ width: '100%' }}/><br/><br/>
                            <textarea id = 'activityType' rows= '2' cols= '75' placeholder = 'What kind of activity is this?'></textarea><br/><br/>
                            <textarea id = 'description' rows = '15' cols = '75' placeholder = 'What can we expect from this event?'></textarea>
                            <br/><br/>
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <br/><br/>
                            <text><small><i>Please insert the hour according to the 24-hour clock. An input field highlighted red indicates that you have entered an invalid value.</i></small></text><br/>   
                            <DateTimePicker id = 'dateTime' maxDate = {new Date('December 31, 9999 23:59:59 GMT-04:00')}
                                hourPlaceholder = '23' minutePlaceholder = '59' format = "MM/dd/y @ HH:mm" 
                                monthPlaceholder = '01' dayPlaceholder = '31' yearPlaceholder = '2000'
                                disableCalendar = {true} disableClock = {true} require = {true}
                                
                                onChange = { this.handleDateChange } /><br/>
                            <p> <b>Date to display:</b><br/>
                                {this.state.dateTime} </p><br/>
                            <textarea id = 'zoomLink' rows = '5' cols = '23' placeholder = 'Zoom Link'/><br/><br/> {/* set max height */}
                            <button id = 'submit' onClick = { this.onClick }>Submit</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditEventPage;
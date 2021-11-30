import React, { Component } from 'react';
import DateTime from 'react-datetime';
import DateTimePicker from 'react-datetime-picker';
const isImageURL = require('valid-image-url');

class CreateEventPage extends Component {

    state = {
        bannerImg: 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg',
        eventName: '',
        activityType: '',
        description: '',
        dateTime: '',
        zoomLink: '',
        isOpen: true,
        hostUserName: '',
    }

    imgURL = (event) => {
        if(isImageURL(event.target.value)){
            this.setState({ bannerImg: event.target.value })
        }
        if(!event.target.value) {
            this.setState({ bannerImg: 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg'})
        }
    }

    handleChange = (event) => {
        if(event.target.id === 'eventName'){
            this.setState({ eventName: event.target.value })
        }
        else if(event.target.id === 'activityType'){
            this.setState({ activityType: event.target.value })
        }
        else if(event.target.id === 'description'){
            this.setState({ description: event.target.value })
        }
        else if(event.target.id === 'dateTime'){
            this.setState({ dateTime: event.target.value })
        }
        else if(event.target.id === 'zoomLink'){
            this.setState({ zoomLink: event.target.value })
        }
    }

    onClick = (event) => {
        const myData = {
            eventName: document.getElementById("eventName").value.trim(),
            activityType: document.getElementById("activitiyType").value.trim(),
            description: document.getElementById("description").value.trim(),
            dateTime: document.getElementById("dateTime").value.trim(),
            zoomLink: document.getElementById("zoomLink").value.trim(),
            bannerImg: this.state.bannerImg,
            isOpen: this.state.isOpen,
            hostUserName: 'Temporary host user.',
        }
          console.log(myData);
          fetch("/api/event/", {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData),
          })
          .then(res => {
            if(res.ok) {
              return res.json()
            }
            // throw new Error('Content validation');
          })
          .catch(err => {
            alert("Event name already exists.");
          }); 
    }

    handleDateChange = (date) => {
        if(date !== null){
            let dateTime = date.toDateString() + " at " + date.toLocaleTimeString('en-us').replace(':00 ', ' ');
            this.setState({ dateTime })
            console.log(dateTime)
        }
        else{
            this.setState({ dateTime: "" })
        }
        
    }

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

export default CreateEventPage;
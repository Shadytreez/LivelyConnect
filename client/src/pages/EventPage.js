import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
<<<<<<< HEAD

=======
import Attendee from '../components/Attendee';
>>>>>>> main
class EventPage extends Component {
    static contextType = AuthContext
    state = {
        bannerImg: 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg',
        eventName: '',
        activityType: '',
        description: '',
        dateTime: '',
        zoomLink: '',
        isOpen: true,
        currentUserName: '',
        participants: [],
        eventId: '',
        listOfAttendees: [],
        isRSVP: false,
<<<<<<< HEAD
=======
        hostUserName: ''
>>>>>>> main
    }

    async componentDidMount() {
<<<<<<< HEAD

=======
        //to get the infomation from the url and use that infomation to do a get requestion from the backend 
>>>>>>> main
        const queryString = window.location.search;
        console.log(queryString);
        
        const urlParams = new URLSearchParams(queryString);
        
        const id = urlParams.get('id')
        console.log(id);
        this.setState({ eventId: id })
<<<<<<< HEAD

=======
>>>>>>> main
        await fetch("/api/event/"+id)
        .then(response  => response.json())
        .then(responseJson  => {
            this.setState({
                bannerImg: responseJson.bannerImg, 
                eventName: responseJson.eventName, 
                activityType: responseJson.activityType, 
                description: responseJson.description, 
                dateTime: responseJson.dateTime,
                zoomLink: responseJson.zoomLink, 
                isOpen: responseJson.isOpen, 
                hostUserName: responseJson.hostUserName,
            })
            console.log(responseJson.bannerImg)
        })

<<<<<<< HEAD
        const auth = this.context
        // List of Attendees
        const listOfAttend = {
            event_id: this.state.eventId
        }
        fetch("/api/attending/listOfAttendees", {
            method: 'GET',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(listOfAttend),
        })
        .then(res => {
            if(res.ok) {
                this.setState({ listOfAttendees: res })
                for(let attendee in this.state.listOfAttendees){
                    if(auth.user.user_name === attendee.user_name){
                        this.setState({ isRSVP: true })
                    }
                }
                return res.json()
            }
        })
        .catch(err => {
            this.setState({ listOfAttendees: [] })
        }); 
    }

    // RSVP for event
    clickRSVP = (event) => {
        // add user to attendingTable
        const auth = this.context

        const myData = {
            event_id: this.state.eventId,
            user_name: auth.user.user_name,
            name: auth.user.name,
            user_linkedIn: auth.user.user_linkedIn,
            user_image: auth.user.user_image,
        }
          console.log(myData);
          fetch("/api/attending/", {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData),
          })
          .then(res => {
            if(res.ok) {
            window.location.reload();
            // return res.json()
            }
            // throw new Error('Content validation');
          })
          .catch(err => {
            alert("Unable to RSVP.");
          }); 
=======
        //this fetch is to get all of the attendees that rsvp for the event, but also to see if the user is rsvp or not
        const auth = this.context
        // List of Attendees
        console.log("testing to see if rsvp work")
        console.log(auth.user.user_name)
        const url = "/api/attending/" + this.state.eventId;
    try {
     const response = await fetch(url, {
       method: "GET"
     }).
     then(response => response.json())
     .then(responseJson => {
       console.log(responseJson);
       console.log('--------------');
       //console.log(response);
       this.setState({participants: responseJson});
       console.log(this.state.participants);
       console.log("amount of participants is " + this.state.participants.length);
     }).then(() =>{
       for(let i in this.state.participants){
         console.log(this.state.participants[i]);
         if(auth.user.user_name === this.state.participants[i].user_name){
            console.log("WE GOT A MATCH")
            this.setState({isRSVP: true})
        }
        var joined = this.state.listOfAttendees.concat(<Attendee card={this.state.participants[i]}/>);
        this.setState({ listOfAttendees: joined });
       }
     });
   } catch (err) {
     console.error(err.message);
   } 
>>>>>>> main
    }

       // RSVP for event
        clickRSVP = (event) => {
            // add user to attendingTable
            const auth = this.context

            const myData = {
                event_id: this.state.eventId,
                user_name: auth.user.user_name,
                name: auth.user.name,
                user_linkedIn: auth.user.linkedln,
                user_image: auth.user.image,
            }
            console.log(myData);
            fetch("/api/attending/", {
                method: 'POST',
                credentials: 'include',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(myData),
            })
            .then(res => {
                if(res.ok) {
                window.location.reload();
                // return res.json()
                }
                // throw new Error('Content validation');
            })
            .catch(err => {
                alert("Unable to RSVP.");
            }); 
        }

    render() {
        if(this.state.isRSVP){
            return (
                <div style = {{ textAlign: 'center' }}>
                    
                    <div style ={{ marginBottom: 50 }}>
                        <img id = "banner" src = {this.state.bannerImg}
                            style={{ height: 504.9, width: 897.6}}/>
                    </div>
    
                    <div className = "container" style = {{ marginBottom: 150 }}>
                        
                        <div>
                            <h2 id = 'eventName' size = '81'>Event Name: {this.state.eventName}</h2><br/><br/>
                        </div>
    
                        <div className = "row row-cols-2">
                            <div className = "col"  style = {{ textAlign: 'left', marginLeft: 25 }}>
                                { /* Event name, description, activity type */}
                                <p id = 'activityType' rows= '2' cols= '75'>Activity Types: {this.state.activityType}</p><br/>
                                <p id = 'description' rows = '15' cols = '75'>Description: {this.state.description}</p>
                            </div>
                            <div className = "col">
                                { /* time of event, day, zoom link, rsvp button */}
                                <br/>
                                <text id = 'dateTime' placeholder = '' type = 'date' >Date and Time: {this.state.dateTime}</text><br/><br/>
                                <a id = 'link' placeholder = 'Zoom Link' href = {this.state.zoomLink}>Zoom link</a><br/><br/> {/* make zoom link taller */}
                            </div>
<<<<<<< HEAD
                        </div>
                        <br/><br/><br/>
                        <div>                    
                            <h3 style = {{ borderRadius: 10, height: 40 }}>List of Attendees</h3>
                            {   this.state.listOfAttendees.map((attendee) => {
                                return 
                                <div>
                                    <a href = { attendee.user_linkedIn }>{ attendee.user_name }</a>
                                </div>
                            })
                            }
                        </div>
=======
                        </div>
                        <br/><br/><br/>
                        <div>                    
                            <h3 style = {{ borderRadius: 10, height: 40 }}>List of Attendees</h3>
                            {/* {   this.state.listOfAttendees.map((attendee) => {
                                return 
                                <div>
                                    <a href = { attendee.user_linkedIn }>{ attendee.user_name }</a>
                                </div>
                            })
                            } */}
                            {this.state.listOfAttendees}
                        </div>
>>>>>>> main
                    </div>
    
                </div>
            )
<<<<<<< HEAD
        }
        else {
=======
        }else{
>>>>>>> main
            return (
                <div style = {{ textAlign: 'center' }}>
                    
                    <div style ={{ marginBottom: 50 }}>
                        <img id = "banner" src = {this.state.bannerImg}
                            style={{ height: 504.9, width: 897.6}}/>
                    </div>

                    <div className = "container" style = {{ marginBottom: 150 }}>
                        
                        <div>
                            <h2 id = 'eventName' size = '81'>Event Name: {this.state.eventName}</h2><br/><br/>
                        </div>

                        <div className = "row row-cols-2">
                            <div className = "col"  style = {{ textAlign: 'left', marginLeft: 25 }}>
                                { /* Event name, description, activity type */}
                                <p id = 'activityType' rows= '2' cols= '75'>Activity Types: {this.state.activityType}</p><br/>
                                <p id = 'description' rows = '15' cols = '75'>Description: {this.state.description}</p>
                            </div>
                            <div className = "col">
                                { /* time of event, day, zoom link, rsvp button */}
                                <br/>
                                <text id = 'dateTime' placeholder = '' type = 'date' >Date and Time: {this.state.dateTime}</text><br/><br/>
                                <button id = 'rsvp' onClick ={ this.clickRSVP } style = {{ borderRadius: 10, height: 40 }}>
                                    RSVP Event
                                </button> {/* make RSVP disappear after clicking */}
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div>                    
                            <h3 style = {{ borderRadius: 10, height: 40 }}>List of Attendees</h3>
<<<<<<< HEAD
                            {   this.state.listOfAttendees.map((attendee) => {
=======
                            {/* {   this.state.listOfAttendees.map((attendee) => {
>>>>>>> main
                                return 
                                <div>
                                    <a href = { attendee.user_linkedIn }>{ attendee.user_name }</a>
                                </div>
                            })
<<<<<<< HEAD
                            }
=======
                            } */}
                            {this.state.listOfAttendees}
>>>>>>> main
                        </div>
                    </div>

                </div>
            )
        }
<<<<<<< HEAD
=======
        
>>>>>>> main
    }
}

export default EventPage;
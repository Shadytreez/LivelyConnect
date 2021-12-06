import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { AuthContext } from '../context/AuthContext';
import Popup from 'reactjs-popup';

// const { Event } = require('../../../api/models/event');

// POP-UP EXAMPLE:

// <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>

=======
import {Link} from 'react-router-dom';
>>>>>>> main
class EventPage extends Component {

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

<<<<<<< HEAD
    componentDidMount() {
        fetch("/api/event/:id", {method: "GET"})
        .then(res => res.json())
        .then(data => {
=======


    async componentDidMount() {
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        console.log(id);

        await fetch("/api/event/"+id)
        .then(response  => response.json())
        .then(responseJson  => {
>>>>>>> main
            this.setState({
                // bannerImg, eventName, activityType, description, dateTime,
                // zoomLink, isOpen, hostUserName

                bannerImg: responseJson.bannerImg, 
                eventName: responseJson.eventName, 
                activityType: responseJson.activityType, 
                description: responseJson.description, 
                dateTime: responseJson.dateTime,
                zoomLink: responseJson.zoomLink, 
                isOpen: responseJson.isOpen, 
                hostUserName: responseJson.hostUserName
            })
<<<<<<< HEAD
            console.log(data)
=======
            console.log(responseJson.bannerImg)
>>>>>>> main
        })
    }

    // RSVP for event
    onClick = (event) => {
        // add user to attendingTable
    }

    render() {
        return (
            <div style = {{ textAlign: 'center' }}>
                <div style ={{ marginBottom: 50 }}>
<<<<<<< HEAD
                    <img id = "banner" src = {this.bannerImg}
=======
                    <img id = "banner" src = {this.state.bannerImg}
>>>>>>> main
                        style={{ height: 504.9, width: 897.6}}/>
                </div>
                <div className = "container" style = {{ marginBottom: 100 }}>
                    <div>
<<<<<<< HEAD
                        <h2 id = 'eventName' size = '81'>This Is The Event Name {this.eventName} </h2><br/><br/>
=======
                        <h2 id = 'eventName' size = '81'>{this.state.eventName}</h2><br/><br/>
>>>>>>> main
                    </div>
                    <div className = "row row-cols-2">
                        <div className = "col"  style = {{ textAlign: 'left', marginLeft: 25 }}>
                            { /* Event name, description, activity type */}
<<<<<<< HEAD
                            <p id = 'activityType' rows= '2' cols= '75'>This is the event's activity type: {this.activityType}</p><br/>
                            <p id = 'description' rows = '15' cols = '75'>This is the event description: {this.description}</p>
=======
                            <p id = 'activityType' rows= '2' cols= '75'>{this.state.activityType}</p><br/>
                            <p id = 'description' rows = '15' cols = '75'>{this.state.description}</p>
>>>>>>> main
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <br/>
<<<<<<< HEAD
                            <text id = 'dateTime' placeholder = '' type = 'date' >Date of event: {this.dateTime}</text><br/><br/>
                            <a id = 'link' placeholder = 'Zoom Link' href = 'www.google.com'>Zoom link: {this.zoomLink}</a><br/><br/> {/* make zoom link taller */}
                            <Popup closeOnDocumentClick modal = {true} trigger={<button>Trigger</button>} position="top center"
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    padding: '5px',
                                    display: 'block',
                                    background: '#ffffff',
                                    border
                                }}>
                                <div>List of Participants!</div>
                            </Popup><br/>
                            <button id = 'rsvp' onClick = {this.onClick} >RSVP Event</button>
=======
                            <text id = 'dateTime' placeholder = '' type = 'date' >{this.state.dateTime}</text><br/><br/>
                            <a id = 'link' placeholder = 'Zoom Link' href = {this.state.zoomLink}>Zoom link</a><br/><br/> {/* make zoom link taller */}
                            <button id = 'rsvp'>RSVP Event</button>
>>>>>>> main
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


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
        participants: [],
    }

    async componentDidMount() {
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        console.log(id);

        await fetch("/api/event/"+id)
        .then(response  => response.json())
        .then(responseJson  => {
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
                hostUserName: responseJson.hostUserName,
                // attending: 
            })
            console.log(responseJson.bannerImg)
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
                    <img id = "banner" src = {this.state.bannerImg}
                        style={{ height: 504.9, width: 897.6}}/>
                </div>

                <div className = "container" style = {{ marginBottom: 100 }}>
                    
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
                            <button id = 'rsvp'>RSVP Event</button>
                        </div>
                    </div>

                </div>

                <div>
                    <ol>

                    </ol>
                </div>

            </div>
        )
    }
}

export default EventPage;
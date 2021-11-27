import React, { Component } from 'react';
const isImageURL = require('valid-image-url');

class CreateEventPage extends Component {

    state = {
        bannerImg: 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg',
        eventName: '',
        activityType: '',
        description: '',
        dateTime: '',
        zoomLink: '',
        isOpen: false,
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

    render() {
        return (
            <div>
                <div id = "banner" style={{ 
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
                            <textarea id = 'zoomLink' rows = '5' placeholder = 'Zoom Link'/><br/><br/> {/* set max height */}
                            <button id = 'submit' onClick = { this.onClick }>Submit</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEventPage;
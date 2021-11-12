import React, { Component } from 'react';
const isImageURL = require('valid-image-url');

class CreateEventPage extends Component {

    state = {
        bannerImg: 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg',
        name: '',
        activity: '',
        description: '',
        zoom: '',
    }

    imgURL = (event) => {
        if(isImageURL(event.target.value)){
            this.setState({ bannerImg: event.target.value })
        }else{
            this.setState({ bannerImg: 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg'})
        }
    }


    render() {
        return (
            <div>
                <div className = "banner" style={{ 
                    backgroundImage: `url(${this.state.bannerImg})`, 
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: 700, 
                    width: 1300,
                    alignItems: 'center',
                     }}> 
                    <input placeholder = 'image URL' size = '50' type = 'text' style={{ marginTop: 100 }} onChange={ this.imgURL }/>
                    {/* <button id = 'submitBanner' onClick={ this.imgChange }>Show image!</button> */}
                </div> { /* image of the banner  */ }

                <div className = "container">
                    <div className = "row row-cols-2">
                        <div className = "col">
                            { /* Event name, description, activity type */}
                            <br/><br/>
                            <input id = 'eventName' type = 'text' size = '50' placeholder = 'Name of the event:'/><br/><br/>
                            <textarea id = 'activityType' rows= '2' cols= '80' placeholder = 'What kind of activity is this?'></textarea><br/><br/>
                            <textarea id = 'description' rows = '15' cols = '80' placeholder = 'What can we expect from this event?'></textarea>
                            <br/><br/>
                        </div>
                        
                        <div className = "col">
                            { /* time of event, day, zoom link, rsvp button */}
                            <br/><br/>
                            <input id = 'dateTime' placeholder = '' type = 'date'/><br/><br/>
                            {/* <button id = 'rsvp'>RSVP</button><br/><br/> */}
                            <input id = 'link' placeholder = 'Zoom Link'/><br/><br/>
                            <button id = 'rsvp'>Submit</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEventPage;
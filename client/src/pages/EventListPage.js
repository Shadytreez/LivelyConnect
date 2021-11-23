import React from 'react';
//reusuing import from Event API
class EventListPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title: '',
            time: '',
            imageUrl: '',
            activity: '',
            eventLink: '',
            
        };
      }
    
    // function getEventTitle(props){
    //     return Event.title;
    // }
    // function getEventTime(props){
    //     return Event.time;
    // }
    // function getEventImage(props){
    //     return Event.imageUrl;
    // }
    // function getActivityType(props){
    //     return Event.activity
    // }
    // function getEventLink(props){
    //     return Event.eventLink;
    // }

    state = {
        title: '',
        time: '',
        imageUrl: '',
        activity: '',
        eventLink: '',
    }


    render() {
        return <div>
            <div className="container-fluid text center">
            <div className="row">
              <div className="row1left col-5">
                <input className="form-control-lg" type="text" placeholder="Event Title" value= {this.title} readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Time/Location" value= {this.time} readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Activity Type" value= {this.activity} readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Event Link" value= {this.eventLink} readOnly /><br />
              </div>
              <div className="row1right col-5"><img src={this.imageUrl} alt="" width={300} height={140} /></div>
            </div>

            </div>

        </div>
    }
}



export default EventListPage;
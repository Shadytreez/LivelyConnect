import React from 'react';

class EventCard extends React.Component {
    // constructor(props) {
    //     super(props); 
    //     this.state = {
    //         title: this.props.title,
    //         time: this.props.time,
    //         imageUrl: this.props.image,
    //         activity: this.props.activity,
    //         eventLink: this.props.eventLink,
            
    //     };
    //   }
    
      
  


    render() {
        return <div>
            <div className="container-fluid text center ">
            <div className="row border">
              <div className="row1left col-5">
                {/* <input className="form-control-lg" type="text" placeholder="Event Title" value= {this.state.title} readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Time/Location" value= {this.state.time} readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Activity Type" value= {this.state.activity} readOnly /><br />
                <input className="form-control-md" type="text" placeholder="Event Link" value= {this.state.eventLink} readOnly /><br /> */}
                <input className="form-control-lg" type="text" placeholder="Event Name" value= {this.props.card.eventName} readOnly /> <br />
                <input className="form-control-md" style={{width:250}} type="text" placeholder="Time/Location" value= {this.props.card.dateTime} readOnly /> <br />
                <input className="form-control-md" type="text" placeholder="Activity Type" value= {this.props.card.activityType} readOnly /> <br />
                <input className="form-control-md" type="text" placeholder="Event Link" value= {this.props.card.zoomLink} readOnly /> <br />
              </div>
              <div className="row1right col-5"><img src={this.bannerImg} alt="" width={505} height={140} /></div>
            </div>

            </div>

        </div>
    }
}
export default EventCard;
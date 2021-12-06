import React from 'react';
import { Redirect } from 'react-router-dom';
class EventCard extends React.Component {
    // constructor(props) {
    //     super(props); 
        state = {
            eventPage: false,
            redirectLink: "/event-page/?id="+this.props.card.id
        };
    //   }
    
      
    onClick = (event) => {
      console.log(this.state.redirectLink)
      this.setState({eventPage : true})
   }


    render() {
        if(this.state.eventPage) return <Redirect to={this.state.redirectLink} />;
        return <div onClick = { this.onClick }>
            <div >
            <div className="row border border-dark">
              <div className="row1left col-7">
                <h3> {this.props.card.eventName} </h3> <br />
                <p> {this.props.card.activityType} </p> <br />
                <p> {this.props.card.dateTime} </p> 
              </div>
              <div className="row1right col-5" style={{ 
                    backgroundImage: `url(${this.props.card.bannerImg})`, 
                    backgroundSize: '100% 100%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: 200, // 1080 
                    width: 505   // 1920
                     }}>
                {/* <img src={this.bannerImg} alt="" width={505} height={140} /> */}
              </div>
            </div>

            </div>

        </div>
    }
}
export default EventCard;
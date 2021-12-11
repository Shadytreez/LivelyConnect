import React from 'react';
import { Redirect } from 'react-router-dom';
class Attendee extends React.Component {
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
        // if(this.state.eventPage) return <Redirect to={this.state.redirectLink} />;
        return <div>
            <div >
            <a href = { this.props.card.user_linkedIn}>{ this.props.card.user_name }</a>
            <br />        
            </div>

        </div>
    }
}
export default Attendee;
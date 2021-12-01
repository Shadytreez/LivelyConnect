import React from 'react';
import EventCard from '../components/EventCard';
//reusuing import from Event API
class EventListPage extends React.Component {
   
    
  state = {
    event:[],
    listOfEvents:[]
  };

  async componentDidMount(){
    
  
    const url = "/api/event/";
    try {
     const response = await fetch(url, {
       method: "GET"
     }).
     then(response => response.json())
     .then(responseJson => {
       console.log(responseJson);
       console.log('--------------');
       //console.log(response);
       this.setState({event: responseJson});
       console.log(this.state.event);
       console.log("amount of event is " + this.state.event.length);
     }).then(() =>{
       for(let i in this.state.event){
         console.log(this.state.event[i]);
         var joined = this.state.listOfEvents.concat(<EventCard card={this.state.event[i]}/>);
         this.setState({ listOfEvents: joined });
       }
     });
   } catch (err) {
     console.error(err.message);
   } 
   console.log("----------------")
   console.log(this.state.listOfEvents)
     //if no campus in the database, so no campus
    // if(this.state.campus.length != 0){
    //   console.log("no campus");
    // }else{
    //  document.getElementById("emptyValue").style.display = "block";
    // }
    // console.log("testttererere")
    // fetch("/api/event/",{
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(posts => {
    //     console.log("poggg")
    //     // this.setState({
    //     //   loading: false,
    //     //   posts: posts.map((p,ii) => <Post {...p} key={ii} />),
    //     // });
    //   })
    //   .catch(err => console.log("API ERROR: ", err));


   };


    render() {
        return <div>
            <div className="container-fluid text center">
            {/* <EventCard title="dw" time="2:30" image="test" activity="game" eventLink="dwd"/>
            <EventCard title="vivian" time="4:30" image="test" activity="boba" eventLink="dwd"/>
            <EventCard title="apple" time="6:30" image="test" activity="tea" eventLink="dwd"/> */}
            {/* <h3 value="dwadsadsa"/> */}
            {this.state.listOfEvents}
            </div>

        </div>
    }
}



export default EventListPage;
import React from 'react';
import { Redirect } from 'react-router-dom';


class ProfilePage extends React.Component {
  
    state ={
        id:localStorage.getItem("id"),
        name: localStorage.getItem("name"),
        user: localStorage.getItem("user"),
        image: localStorage.getItem("image"),
        location: localStorage.getItem("location"),
        linkedlnUrl: localStorage.getItem("linkedln"),
        redirect: false,
        redirectPage: "",
    }

  async  componentDidMount(){
    if (localStorage.getItem("user") === "" || localStorage.getItem("user") === undefined){
        console.log("not logged in")
        this.setState({ 
            redirectPage: "/sign-in",
            redirect: true
         })
    }
  }
 

  render() {
    if(this.state.redirect) return <Redirect to={this.state.redirectPage} />;
    return (
      <div className="container">
          <div className = "row">
          <div class="col"> 
            <img src={localStorage.getItem("Url")}  width="400" height="400"/>
         </div>
         <div class="col "> 
            <ul>
             <li>User: {this.state.user}</li>
             <li>Name: {this.state.name}</li>
             <li>Linkedln: {this.state.linkedlnUrl}</li>
             <li>Location: {this.state.location}</li>
            </ul>
         </div>
         </div>
      </div>
      );
  }
}

export default ProfilePage;
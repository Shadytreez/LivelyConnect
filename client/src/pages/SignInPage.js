import React from 'react';
import { Redirect } from 'react-router-dom';


class SignInPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         UserName: '',
    //         Password: ''
    //       };
    // }
    state = {
        UserName: '',
        Password: '',
        success: false
      }  


  //to update the input fields when we type in them  
  handleChange = event => {
    if (event.target.id === 'UserName') {
        this.setState({ 
            UserName: event.target.value
         })
         console.log(this.state.name)
      } else {
        this.setState({ 
            Password: event.target.value
         })
         console.log(this.state.URL)
      }
    }

  //to check if both input fields are both field and sent the data to the backend to check 
  //TODO: Add the backend component to the page (GET REQUEST)  
  onFormSubmit = (event) => {
     event.preventDefault();
     if(document.getElementById('UserName').value.trim() ==="" || document.getElementById('Password').value.trim() ===""){
        alert("Please fill out all the infomation out");
     }else{
         this.setState({success:true})
     }
    }

  render() {
    if(this.state.success) return <Redirect to="/" />;
    return (
        <div>
            <h1>Sign in</h1>
            <form  onSubmit={this.onFormSubmit} >
                    <label for="UserName"/>UserName<br></br>
                    <input type="text" id="UserName" onChange={this.handleChange} value={this.state.UserName}/>  <br></br>
                    <label for="Password">Password</label><br></br>
                    <input type="password" id="Password" onChange={this.handleChange} value={this.state.Password}/> <br></br>
                    <input type="submit" value="Submit" ></input>
                </form>
            <h4>Sign up</h4>    
        </div>
      );
  }
}

export default SignInPage;
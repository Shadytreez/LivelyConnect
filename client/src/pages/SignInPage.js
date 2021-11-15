import React from 'react';
import { Redirect } from 'react-router-dom';


class SignInPage extends React.Component {
   
    state = {
        UserName: '',
        Password: '',
        success: false,
        signUp: false
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
  onFormSubmit = (event) => {
     event.preventDefault();
     if(document.getElementById('UserName').value.trim() ==="" || document.getElementById('Password').value.trim() ===""){
        alert("Please fill out all the infomation out");
     }else{
       const myData = {
        user: document.getElementById("UserName").value.trim(),
         password: document.getElementById("Password").value.trim()
       }
       const url = "/api/user/login/" + myData.user + "/"+ myData.password;
       fetch(url, {
        method: 'GET',
       }).then(response => response.json())
         .then(responseJson => {
        console.log("line 41", responseJson);
         if(responseJson === false){
           alert("wrong user and/or password");
         }else{
           
           localStorage.setItem("user",responseJson.user_name);
           localStorage.setItem("name", responseJson.currentBalance);
           localStorage.setItem("location", responseJson.location);
           localStorage.setItem("linkedln", responseJson.linkedln);
           localStorage.setItem("image", responseJson.image);
           console.log(localStorage.getItem("user"));
           console.log(localStorage.getItem("name"));
           console.log(localStorage.getItem("location"));
           console.log(localStorage.getItem("linkedln"));
           console.log(localStorage.getItem("image"));
         }   
      })
      .catch((error) => {
         console.log("Fail to sign in");
       });
     }
    }

    signUp = (event) => {
      this.setState({signUp:true})
    }

  render() {
    if(this.state.success) return <Redirect to="/" />;
    if(this.state.signUp) return <Redirect to="/sign-up" />;
    return (
      <div className="container-fluid text-center ">
        <h1>Sign in</h1>
            <form  onSubmit={this.onFormSubmit} >
                    <label for="UserName"/>UserName<br></br>
                    <input type="text" id="UserName" onChange={this.handleChange} value={this.state.UserName}/>  <br></br>
                    <label for="Password">Password</label><br></br>
                    <input type="password" id="Password" onChange={this.handleChange} value={this.state.Password}/> <br></br>
                    <input type="submit" value="Submit" ></input>
                </form>
            <h4 onClick={this.signUp} style={{ color: 'blue'}}>Sign up</h4> 
        </div>
      );
  }
}

export default SignInPage;
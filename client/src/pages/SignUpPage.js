import React from 'react';
import { Redirect } from 'react-router-dom';


class SignUpPage extends React.Component {
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
        ConfirmPassword: '',
        success: false,
        linkedln: '',
        FullName: '',
        state: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

      }  


  //to update the input fields when we type in them  
  handleChange = event => {
    if (event.target.id === 'UserName') {
        this.setState({ 
            UserName: event.target.value
         })
         console.log(this.state.name)
      } else if (event.target.id === 'Password'){
        this.setState({ 
            Password: event.target.value
         })
         console.log(this.state.URL)
      }else if(event.target.id === 'linkedln'){
        this.setState({ 
          linkedln: event.target.value
        })
        console.log(this.state.linkedln);
      }else if(event.target.id === 'FullName'){
        this.setState({ 
          FullName: event.target.value
        })
        console.log(this.state.FullName);
      }else{
        this.setState({ 
            ConfirmPassword: event.target.value
         })
      }
    }


  //to check if both input fields are both field and sent the data to the backend to check 
  //TODO: Add the backend component to the page (POST REQUEST)  
  onFormSubmit = (event) => {
     event.preventDefault(); 
     if(document.getElementById('UserName').value.trim() ==="" || document.getElementById('Password').value.trim() === "" || document.getElementById('ConfirmPassword').value.trim() ==="" || document.getElementById('linkedln').value.trim() ===""){
        alert("Please fill out all the infomation out");
     }else if(document.getElementById('Password').value !== document.getElementById('ConfirmPassword').value){
      alert("Passwords don't match");
     }else{
      var expression = /https?:\/\/(www\.linkedin\.com\/in\/)[-a-zA-Z0-9@:%._\+~#=]{2,256}\//g
      var regex = new RegExp(expression);
      var t = document.getElementById("linkedln").value.trim().toString();
      
      if (t.match(regex)) {
        const myData = {
          user_name: document.getElementById("UserName").value.trim(),
          name: document.getElementById("FullName").value.trim(),
          location: document.getElementById("State").value.trim(),
          linkedln: document.getElementById("linkedln").value.trim(),
          password: document.getElementById("Password").value.trim(),
          image: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        }
        console.log(myData);
        fetch("/api/user/", {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(myData),
        })
          .then(res => {
            if(res.ok) {
              return res.json()
            }
    
            throw new Error('Content validation');
          })
          .then(post => {
            this.setState({
              success: true,
            });
          })
          .catch(err => {
            alert("User already exist");
            this.setState({
              error: true,
            });
          }); 
      } else {
        alert("Not a valid linkedln Url");
      }
          
            
    }
  }

  render() {
    if(this.state.success) return <Redirect to="/" />;
    return (
        <div>
            <h1>Sign in</h1>
            <form  onSubmit={this.onFormSubmit} >
                    <label for="UserName"/>UserName<br></br>
                    <input type="text" id="UserName" onChange={this.handleChange} placeholder="John Doe UserName" value={this.state.UserName}/>  <br></br>
                    <label for="FullName"/>Full Name<br></br>
                    <input type="text" id="FullName" onChange={this.handleChange} placeholder="John Doe" value={this.state.FullName}/>  <br></br>
                    <label for="Password">Password</label><br></br>
                    <input type="password" id="Password" onChange={this.handleChange} value={this.state.Password}/> <br></br>
                    <label for="ConfirmPassword">Confirm Password</label><br></br>
                    <input type="password" id="ConfirmPassword" onChange={this.handleChange} value={this.state.ConfirmPassword}/> <br></br>
                    <label for="linkedln">Linkedln Url</label><br></br>
                    <input type="text" id="linkedln" onChange={this.handleChange} placeholder="https://www.linkedin.com/in/JohnDoe/" value={this.state.linkedln}/> <br></br>
                    <label for="State">State</label><br></br>
                    <select id="State" onChange={this.countryChange}>
                    {this.state.state.map(allCountries => {
                     return <option value={allCountries}>{allCountries}</option>;
                    })}
                    </select> <br></br>
                    <input type="submit" value="Submit" ></input>
                </form>   
        </div>
      );
  }
}

export default SignUpPage;
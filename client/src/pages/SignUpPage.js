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
        // currentState: "Alabama",
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
      }else{
        this.setState({ 
            ConfirmPassword: event.target.value
         })
      }
    }
    // countryChange = event => {
    //     if (event.target.value) {
    //       this.setState({currentState:event.target.value});
    //       console.log(this.state.currentState)
    //     }
    //   }; 

  //to check if both input fields are both field and sent the data to the backend to check 
  //TODO: Add the backend component to the page (POST REQUEST)  
  onFormSubmit = (event) => {
     event.preventDefault(); 
     if(document.getElementById('UserName').value.trim() ==="" || document.getElementById('Password').value.trim() === "" || document.getElementById('ConfirmPassword').value.trim() ===""){
        alert("Please fill out all the infomation out");
     }else{
         if(document.getElementById('Password').value !== document.getElementById('ConfirmPassword').value){
            alert("Pass word don't match"); 
         }else{
            // alert("it works"); 
            this.setState({success:true})
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
                    <input type="text" id="UserName" onChange={this.handleChange} value={this.state.UserName}/>  <br></br>
                    <label for="Password">Password</label><br></br>
                    <input type="password" id="Password" onChange={this.handleChange} value={this.state.Password}/> <br></br>
                    <label for="ConfirmPassword">Confirm Password</label><br></br>
                    <input type="password" id="ConfirmPassword" onChange={this.handleChange} value={this.state.ConfirmPassword}/> <br></br>
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
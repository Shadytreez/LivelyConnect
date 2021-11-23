import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
 
// class ProfilePage extends React.Component {
 
//     state ={
//         name: "",
//         user: "",
//         image: "",
//         location: "",
//         linkedlnUrl: "",
//         redirect: false,
//         redirectPage: "",
//     }
 
//   async  componentDidMount(){
//     // if (localStorage.getItem("user") === "" || localStorage.getItem("user") === undefined){
//     //     console.log("not logged in")
//     //     this.setState({
//     //         redirectPage: "/sign-in",
//     //         redirect: true
//     //      })
//     // }
//     const auth = useContext(AuthContext);
//   }
 
 
//   render() {
//     if(this.state.redirect) return <Redirect to={this.state.redirectPage} />;
//     return (
//       <div className="container">
//           <div className = "row">
//           <div class="col">
//             <img src={localStorage.getItem("Url")}  width="400" height="400"/>
//          </div>
//          <div class="col ">
//             <ul>
//              <li>User: {this.state.user}</li>
//              <li>Name: {this.state.name}</li>
//              <li>Linkedln: {this.state.linkedlnUrl}</li>
//              <li>Location: {this.state.location}</li>
//             </ul>
//          </div>
//          </div>
//       </div>
//       );
//   }
// }
 
// export default ProfilePage;
 
 
 
const ProfilePage = () => {
  const auth = useContext(AuthContext);
 
 
 
  return (
          <div className="container">
              <div className = "row">
              <div class="col">
                <img src={auth.user.image}  width="400" height="400"/>
             </div>
             <div class="col ">
                <ul>
                 <li>User: {auth.user.user_name}</li>
                 <li>Name: {auth.user.name}</li>
                 <li>Linkedln: {auth.user.linkedln}</li>
                 <li>Location: {auth.user.location}</li>
                </ul>
             </div>
             </div>
          </div>
          );
};
 
export default ProfilePage;


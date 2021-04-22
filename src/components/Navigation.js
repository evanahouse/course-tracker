import React from 'react'
import {Link,Redirect} from 'react-router-dom'

class Navigation extends React.Component {
    render(){
        return(
            <div className="navbar">
                {this.props.loggedIn ? 
                <div className="navLinks">
                    <Link to="/user" className="navBtn">my courses</Link>
                    <Link to="/browse" className="navBtn">browse</Link>
                    <Link to="/schedule" className="navBtn">schedule</Link>
                   </div> : <div></div> }
                <div className="navLogo">
                      <h1>course finder</h1>
                </div>
                {!this.props.loggedIn ? 
                <div className="logInBtn">
                    <Link to="/" className="registerBtn">register</Link>
                    <Link to="/login" className="loginBtn">login</Link>
                  </div>
                  :
                  <div className="logInBtn">
                  <Link to="/login" className="logOutBtn" onClick={(e) => this.props.handleLogout(e)}>logout</Link>
                </div>
                }
                
              </div>
        )
    }
}

export default Navigation
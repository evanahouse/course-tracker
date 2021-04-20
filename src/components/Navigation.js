import React from 'react'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render(){
        return(
            <div className="navbar">
                <div className="navLinks">
                    <Link to="/user" className="navBtn">my courses</Link>
                    <Link to="/courses" className="navBtn">find courses</Link>
                </div>
                <div className="navLogo">
                    <h1>course finder</h1>
                </div>
                <div className="logOut">
                    <Link to="/" className="navBtn">log out</Link>
                </div>
            </div>
        )
    }
}

export default Navigation
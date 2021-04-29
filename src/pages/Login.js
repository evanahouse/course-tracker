import React, {useState} from 'react'
import FormLogin from '../components/FormLogin'
import '../Form.css'
import {Link, Redirect} from 'react-router-dom'
import Logo from "../images/main.png"

const Login = (props) => {
    
    const[isSubmitted, setIsSubmitted] = useState(false)
    
    function submitForm(values) {
        setIsSubmitted(true)
        props.logIn(values)
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn"><Link to="/browse" className="navBtn">x</Link></span>
            <div className="form-content-left">
            <img src={Logo} alt="logo" className="form-img"/>

            </div>
            {/* Note form used in this project was inspired by Brian Design on Youtube in the public domain
              https://www.youtube.com/watch?v=KGFG-yQD7Dw&t=1230s&ab_channel=BrianDesign */}
             {!isSubmitted ? (<FormLogin submitForm={submitForm} />) : <Redirect to="/browse"/>}
        </div>
        </>
    )
}
export default Login

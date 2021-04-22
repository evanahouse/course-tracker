import React, {useState} from 'react'
import FormLogin from '../components/FormLogin'
import '../Form.css'
import {Link, Redirect} from 'react-router-dom'

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
                <img src="#" alt="#" className="form-img"/>
            </div>
             {!isSubmitted ? (<FormLogin submitForm={submitForm} />) : <Redirect to="/browse"/>}
        </div>
        </>
    )
}
export default Login

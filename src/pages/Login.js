import React, {useState} from 'react'
import FormLogin from '../components/FormLogin'
import '../Form.css'
import {Link, Redirect} from 'react-router-dom'

const Login = () => {
    
    const[isSubmitted, setIsSubmitted] = useState(false)
    
    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <>
        <div className="form-container">
            <span className="close-btn"><Link to="/browse" className="navBtn">x</Link></span>
            <div className="form-content-left">
                <img src="#" alt="#" className="form-img"/>
            </div>
            <FormLogin />
            {/* {!isSubmitted ? (<Redirect to="/browse"/>) : null} */}
        </div>
            
        
        </>
    )
}

export default Login

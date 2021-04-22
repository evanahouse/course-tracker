import React, {useState} from 'react'
import FormSignup from '../components/FormSignup'
import '../Form.css'
import {Link, Redirect} from 'react-router-dom'

const Validation = (props) => {
    
    const[isSubmitted, setIsSubmitted] = useState(false)
    
    function submitForm(values) {
        setIsSubmitted(true)
        props.register(values)
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn"><Link to="/browse" className="navBtn">x</Link></span>
            <div className="form-content-left">
                <img src="#" alt="#" className="form-img"/>
            </div>
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : <Redirect to="/browse"/>}
        </div>
            
        
        </>
    )
}

export default Validation

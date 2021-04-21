import React, {useState} from 'react'
import FormSignup from '../components/FormSignup'
import '../Form.css'
import {Link, Redirect} from 'react-router-dom'

const Validation = () => {
    
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
            <FormSignup />
            {/* {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : <FormSucess />} */}
        </div>
            
        
        </>
    )
}

export default Validation

import React, {useState} from 'react'
import FormSignup from '../components/FormSignup'
import FormSuccess from '../components/FormSuccess'
import '../Form.css'

const Validation = () => {
    
    const[isSubmitted, setIsSubmitted] = useState(false)
    
    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
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

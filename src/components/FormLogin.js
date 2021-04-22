import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import '../Form.css'
import {Link} from 'react-router-dom'


const FormLogin = ({submitForm}) => {
    const mode = "login"
    const {handleChange, values, handleSubmit, errors} = useForm(mode, submitForm, validate)
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Welcome back! Please enter your login information below.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">username</label>
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        className="form-input"
                        placeholder="enter your username"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">password</label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input"
                        placeholder="enter your password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
               
                <button className="form-input-btn" type="submit">login</button> 
            <span className="form-input-login">don't have an account? register <Link to="/">here</Link></span>
            </form>
        </div>
    )
}

export default FormLogin

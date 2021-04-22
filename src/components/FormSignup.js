import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import '../Form.css'
import {Link} from 'react-router-dom'

const FormSignup = ({submitForm}) => {
    const mode = "register"
    const {handleChange, values, handleSubmit, errors} = useForm(mode, submitForm, validate)
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Fill out the information below to create an account:</h1>
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
                    <label htmlFor="email" className="form-label">email</label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input"
                        placeholder="enter your email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
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
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">confirm password</label>
                    <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        className="form-input"
                        placeholder="confirm your password"
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">sign up</button> 
                <span className="form-input-login">already have an account? login <Link to="/login">here</Link></span>            </form>
        </div>
    )
}

export default FormSignup

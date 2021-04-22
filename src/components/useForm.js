import {useState, useEffect} from 'react'
const useForm = (mode, submitForm, validate) => {
    
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(mode, values))
        setIsSubmitting(true)
    }

    useEffect(() => {
        console.log(errors)
        if(Object.keys(errors).length === 0 && isSubmitting){
          submitForm(values)  
        }
        
    }, [errors, isSubmitting])

    return {handleChange, values, handleSubmit, errors}
}

export default useForm
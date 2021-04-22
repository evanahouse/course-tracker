export default function validateInfo(mode, values){
    let errors = {}

    //Username
    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    //Email
    if(!values.email && mode === "register"){
        errors.email = "Email required"
    } else if((!/^[A-Za-z]+/.test(values.email.trim())) && mode === "register") {
        errors.email = "Email address is invalid"
    }

    //Password
    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }

    //Confirm Password
    if(!values.password2 && mode === "register") {
        errors.password2 = "Password is required"
    } else if (values.password2 !== values.password && mode ==="register")  {
        errors.password2 = 'Passwords do not match'
    }
    return errors
}
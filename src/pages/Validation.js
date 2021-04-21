import React from 'react'
import '../Login.scss'

class Validation extends React.Component {
render(){
        return (
       
            <div class="form-structor">
	            <div class="signup">
		            <h2 class="form-title" id="signup"><span>or</span>register</h2>
		                <div class="form-holder">
                            <input type="text" class="input" placeholder="Name" />
                            <input type="email" class="input" placeholder="Email" />
                            <input type="password" class="input" placeholder="Password" />
		                </div>
		                <button class="submit-btn">sign up</button>
	            </div>
	            <div class="login slide-up">
		            <div class="center">
                        <h2 class="form-title" id="login"><span>or</span>log in</h2>
                        <div class="form-holder">
                            <input type="email" class="input" placeholder="Email" />
                            <input type="password" class="input" placeholder="Password" />
                        </div>
			        <button class="submit-btn">log in</button>
		            </div>
	            </div>
            </div>
        
        )
    }

}

export default Validation
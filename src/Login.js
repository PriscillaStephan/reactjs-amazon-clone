import React, { useState } from 'react';
import "./Login.css";
import {Link, useHistory}  from "react-router-dom";
import {auth} from "./firebase";

/**created by Priscilla Stephan*/

function Login() {
    //it allows to programatically change the url after they login
    const history =  useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 //firebase login ....
    const signIn = e => {
        //to prevent refresh when the user clicks submit 
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
       .catch(error => alert(error.message))
    }

   //firebase register ....
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo"
                    src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} 
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} 
                    onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Priscilla's Amazon-clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>

                <button onClick={register} className='login__registerButton'>Create your Priscilla's Amazon clone Account</button>

            </div>

        </div>
    )
}

export default Login

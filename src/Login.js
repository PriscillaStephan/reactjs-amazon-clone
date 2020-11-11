import React, { useState } from 'react';
  import "./Login.css";
import {Link}  from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        //to prevent refresh when the user clicks submit 
        e.preventDefault();

        //firebase login ....
    }

    const register = e => {
        e.preventDefault();

        //firebase register ....
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

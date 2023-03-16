import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useRef} from 'react'
import { auth, createUserWithEmailAndPassword } from '../firebase.js';
import "./SignupScreen.css";

function SignupScreen() {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

  return (
    <div className="signupScreen" >
        <form action="">
            <h1>Sign In</h1>
            <input ref={emailRef} type="Email" placeholder='Email' />
            <input ref={passRef} type="Password" placeholder='Password' />
            <button type='submit' onClick={signIn} >Sign In</button>

            
            <h4>
                <span className='signupScreen_gray'>New to Netflix? </span>
                <span className='signupScreen_link' onClick={register}> Sign up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen
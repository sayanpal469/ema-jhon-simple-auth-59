import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);


    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelPasswordBlur = (e) => {
        setPassword(e.target.value)
    }

    if(user) {
        navigate(from, {replace: true})
    }
    

    const handelSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <h1 className='title'>Login</h1>
            <form action="" onSubmit={handelSubmit}>
            <div className='input-area'>
                <label htmlFor="">Email</label>
                <input onBlur={handelEmailBlur} type="text" name='email' required/>
                <label htmlFor="">Password</label>
                <input onBlur={handelPasswordBlur} type="password" name='password' required/>
            </div>
            <p style={{color: 'red', textAlign: 'center'}}>{error?.message}</p>
            {
                loading && <p style={{textAlign: 'center'}}>Loading...</p>
            }
            <div className='form-btn'>
            <button className='login-btn'>Login</button>
            <p  onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }}>Forgot Password?</p>
            <p>New to ema-jhon? <Link className='form-link' to='/signup'>Create an account</Link></p>
            <p>Or</p>
            <button onClick={ () => signInWithGoogle()} type='submit' className='google-btn'>Continue With Google</button>
            </div>
            </form>
        </div>
    );
};

export default Login;
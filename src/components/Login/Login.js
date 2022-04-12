import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='title'>Login</h1>
            <div className='input-area'>
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>
            <div className='form-btn'>
            <button className='login-btn'>Login</button>
            <p>New to ema-jhon? <Link className='form-link' to='/signup'>Create an account</Link></p>
            <p>Or</p>
            <button className='google-btn'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;
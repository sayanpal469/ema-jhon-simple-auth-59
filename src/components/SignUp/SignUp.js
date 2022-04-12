import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='title'>Sign Up</h1>
            <div className='input-area'>
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="password" />
                <label htmlFor="">Confirm Password</label>
                <input type="password" />
            </div>
            <div className='form-btn'>
            <button className='login-btn'>Login</button>
            <p>Already have an account? <Link className='form-link' to='/login'>Log In</Link></p>
            <p>Or</p>
            <button className='google-btn'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;
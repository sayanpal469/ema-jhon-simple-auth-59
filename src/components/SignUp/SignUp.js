import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelPasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const handelConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value)
    }

    if(user) {
        navigate('/shop')
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setError('Password did not match')
            return;
        }

        if(password.length < 6) {
            setError('Password must be 6 charecters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <h1 className='title'>Sign Up</h1>
            <form onSubmit={handelSubmit}>
            <div className='input-area'>
                <label htmlFor="">Email</label>
                <input onBlur={handelEmailBlur} type="text" name='email' required/>
                <label htmlFor="">Password</label>
                <input onBlur={handelPasswordBlur} type="password"  name='password' required/>
                <label htmlFor="">Confirm Password</label>
                <input onBlur={handelConfirmPasswordBlur} type="password" name='confirm-password' required/>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <div className='form-btn'>
            <button className='login-btn'>Sign Up</button>
            <p>Already have an account? <Link className='form-link' to='/login'>Log In</Link></p>
            <p>Or</p>
            <button className='google-btn'>Continue With Google</button>
            </div>
            </form>
        </div>
    );
};

export default SignUp;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    //const navigate = useNavigate()


    const handelNameBlur = (e) => {
        setName(e.target.value)
    }

    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    
    const handelAddressBlur = (e) => {
        setAddress(e.target.value)
    }

    const handelPhoneBlur = (e) => {
        setPhone(e.target.value)
    }

    const handelCreateUser = (e) => {
        e.preventDefault();
    }
    return (
        <div className='form-container'>
            <h1 className='title'>Shipping Info</h1>
            <form onSubmit={handelCreateUser}>
            <div className='input-area'>
                <label htmlFor="">Your Name</label>
                <input onBlur={handelNameBlur} type="text" name='name' required/>

                <label htmlFor="">Email</label>
                <input onBlur={handelEmailBlur} type="text"  name='email' required/>

                <label htmlFor="">Address</label>
                <input onBlur={handelAddressBlur} type="text" name='adress' required/>

                <label htmlFor="">Phone</label>
                <input onBlur={handelPhoneBlur} type="number" name='phone' required/>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <div className='form-btn'>
            <button style={{marginBottom: '20px'}} className='login-btn'>Shippig</button>
            </div>
            </form>
        </div>
    );
};

export default Shipment;
import React from 'react';
import { useState } from 'react';
import styles from './login.module.css'
import { useNavigate } from "react-router-dom";


function LoginForm(props) {
    const [dataInput, setDataInput] = useState({username:'',password:''});
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target
        setDataInput(prevData => ({ ...prevData, [name]: value }))
        console.log(dataInput);
        console.log(value);
    }
    function handleCheckBox(e) {
        console.log(e.target.checked);
        setIsChecked(e.target.checked);

    }
    function handleSubmit(e) {
        e.preventDefault();
        navigate("/");
    }
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda quis, dolore, quo quisquam</p>
            <div className={styles.loginSpacer}></div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">User name</label>
                <input type="text" onChange={handleChange} name='username' id="username" placeholder='Enter Your User name' />
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} name='password' id="password" placeholder='Enter Your Password' />
                <div>
                    <input type="checkbox" onChange={handleCheckBox} name="rememberme" id="rememberme" />
                    <label htmlFor="rememberme">Remember Me</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        </>
    );
}

export default LoginForm;
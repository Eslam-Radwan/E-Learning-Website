import React from 'react';
import { useState } from 'react';

function LoginForm(props) {
    const [dataInput, setDataInput] = useState({username:'',password:''});
    const [isChecked, setIsChecked] = useState(false);
        
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
    
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda quis, dolore, quo quisquam</p>
            <div className={styles.loginSpacer}></div>
            <form action="">
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
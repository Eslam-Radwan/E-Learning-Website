import React from 'react';
import { useState } from 'react';

function SignupForm(props) {
    const [dataInput, setDataInput] = useState({username:'',email:'',password:''});
    const [isChecked, setIsChecked] = useState(false);
    

    function handleChange(e) {
        const {name, value} = e.target
        setDataInput(prevData =>({...prevData, [name]:value}))
        console.log(dataInput);
        console.log(value);
    }
    function handleCheckBox (e)
    {
        console.log(e.target.checked);
        setIsChecked(e.target.checked);

    }
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda quis, dolore, quo quisquam</p>
            <div className="signupSpacer"></div>
            <form action="">
                <label htmlFor="email">Email Address</label>
                <input type="email" onChange={handleChange} name="email" id="email" placeholder='Enter Your Email Address' />
                <label htmlFor="username">User name</label>
                <input type="text" onChange={handleChange}  id="username" name='username' placeholder='Enter Your User name' />
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} id="password" name='password' placeholder='Enter Your Password' />
                <div>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckBox} name="rememberme" id="rememberme" />
                    <label htmlFor="rememberme">Remember Me</label>
                </div>
                <input type="submit" value="Register" />
            </form>
        </>
    );
}

export default SignupForm;
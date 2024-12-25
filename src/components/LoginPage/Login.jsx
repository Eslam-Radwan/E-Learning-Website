import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useState } from 'react';
import "./Login.css"

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [mainPicture, setMainPicture] = useState('/images/small-girl-raising-hand.png');
    function loginButtonClicked(e) {
        setMainPicture("/images/small-girl-raising-hand.png");
        setIsLogin(true);
    }
    function registerButtonClicked(e) {
        setMainPicture("/images/girls-raising-hand.png");
        setIsLogin(false);
    }
    return (
        <div className='container'>
            <main>
                <div className='smallGirlImg'>
                    <img src={mainPicture} alt="" />
                </div>
                <div className='form'>
                    <h3>Welcome to our website</h3>
                    <div className='alterButtons '>
                        <button onClick={loginButtonClicked} style={isLogin ? { backgroundColor: "#49BBBD" } : { backgroundColor: "transparent" }} >Login</button>
                        <button onClick={registerButtonClicked} style={isLogin ? { backgroundColor: "transparent" } : { backgroundColor: "#49BBBD" }}>Register</button>
                    </div>
                    
                    {isLogin ?
                          <LoginForm />
                        : <SignupForm />}
                </div>
            </main>
        </div>
    );
}

export default Login;
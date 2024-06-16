import React from "react";
import './LoginForm.css';
import { FaLock, FaUser } from "react-icons/fa";
const LoginForm = () => {
    return(
        <div className="wrapper">
            <form action="">

                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="Password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label> <input type="checkbox" /> Remember me </label>
                    <a href="#">Forgot Password </a>
                </div>
                <center>
                    <button>
                 <a href="https://navgenius.durablesites.com/?pt=NjY2NGVhOWFiZDI1MTM5MTY5MzRmZTU1OjE3MTc5Mzk5NzUuMDM0OnByZXZpZXc=">
                Login</a>
                </button>
                </center>
                <div className="register-link">

                    <p> Don 't have an account? <a href="#">Register</a></p>
                </div>
            </form>
    </div>
    );
};

export default LoginForm;
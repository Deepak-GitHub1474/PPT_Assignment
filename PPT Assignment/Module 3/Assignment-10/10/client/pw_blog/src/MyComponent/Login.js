import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/user/login', { email, password })
            .then(res => {
                if (res.data === "Success") {
                    window.location.href = "/blog"
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="login">
            <form className="form-container" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="submit-btn">Submit</button>
                <div className="login-register-switch">
                    <span>Don't have account? <Link to="/user/register" className="link">Register</Link></span>
                </div>
            </form>
        </div>
    )
}


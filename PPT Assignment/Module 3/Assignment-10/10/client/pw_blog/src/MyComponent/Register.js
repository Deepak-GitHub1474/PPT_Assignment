import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Register() {

    const [username, setUsername] = React.useState()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/user/register', { username, email, password })
            .then(res => navigate('/user/login'))
            .catch(err => console.log(err))
    }

    return (
        <div className="registration">
            <form className="form-container" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name Eg. Deepak Chaudhary"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="email"
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
                    <span>Already have account? <Link to="/user/login" className="link">Login</Link></span>
                </div>
            </form>
        </div>
    )
}
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { userContext } from '../App'
import axios from 'axios'

export default function Navbar() {
    const user = useContext(userContext)
    const handleLogout = () => {
        axios.get('http://localhost:5000/logout')
            .then(res => {
                if (res.data === "Success")
                    window.location.href = "/user/login"
            }).catch(err => console.log(err))
    }

    return (
        <div className="navbar-container">
            {user.email ? (
                <nav className="header-container">
                    <li><Link to="/blog" className="header-link">Home</Link></li>
                    <li><Link to="/blog/add" className="header-link">Add Blog</Link></li>
                    <li><Link to="/myblog" className="header-link"> My Blog</Link></li>
                    <input type="button" onClick={handleLogout} value="Logout" className="logout-btn" />
                    <button className="welcome-btn">Welcome</button>
                </nav>
            ) : (
                <nav className="header-container">
                    <li className="header-link">Home</li>
                    <li className="header-link">Add Blog</li>
                    <li>
                        <Link to="/user/login" className="header-link">Login/</Link>
                        <Link to="/user/register" className="header-link">Register</Link></li>
                </nav>
            )}
        </div>
    );
}
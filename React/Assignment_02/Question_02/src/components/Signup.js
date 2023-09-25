import instagram_logo from './instagram-logo.png';

function Login({handlePage}) {
    return(
    <div className="container">
        <img src={instagram_logo} alt="Instagram Logo" className='instagram-logo'/>
        <form >
            <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Mobile Number of Email" />
            </div>
            <div className="form-group">
                <input type="text" id="username" name="username" placeholder="Full Name" />
            </div>
            <div className="form-group">
                <input type="text" id="email" name="email" placeholder="Phone number, username, or email" />
            </div>
            <div className="form-group">
                <input type="password" id="password" name="password" placeholder="Password" />
            </div>
        </form>
        <button type="submit" className="btn">Sign Up</button>
        <div className="links">
            <span>have an account?</span>
            <a href="../login/login.html" onClick={handlePage}>Log In</a>
        </div>
    </div>
    )
}
export default Login;
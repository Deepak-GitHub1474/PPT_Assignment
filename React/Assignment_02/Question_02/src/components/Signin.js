import instagram_logo from './instagram-logo.png';

function Signin({ handlePage }) {
    return (
        <div className="container">
            <img src={instagram_logo} alt="Instagram-logo" className='instagram-logo'/>
            <form>
                <div className="form-group">
                    <input type="text" id="username" name="username" placeholder="Phone number, username, or email" />
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="password" placeholder="Password" />
                </div>
            </form>
            <button type="button" className="btn">Sign in</button>
            <div className="links">
                <span>Don't have account?</span>
                <a href="../register/register.html" onClick={handlePage}>Sign up</a>
            </div>
        </div>
    )
}
export default Signin;
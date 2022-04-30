import { Link } from "react-router-dom"
import "./Auth.css";

export const Signup = () =>{
    return(
        <div>
             <main className="main-container">
        <div className="container">
          <h1>Sign-up</h1>
          <hr />
  
          <label><b>Email address</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
  
          <label><b>Password</b></label>
          <input
            type="password"
            placeholder="*******"
            name="psw"
            required
          />
  
          <label>
            <input
              type="checkbox"
              name="remember"
              className="checkbox"
            />
            I accept all terms and conditions
          </label>
          
          <p>
            By creating an account you agree to our
            <Link to="/signup" className="terms-condition">Terms & Privacy</Link>
          </p>
  
          <div className="clearfix">
            <button type="submit" className="btn"><Link className="signup-btn" to="/">
              Sign Up</Link></button>
          </div>
  
          <div className="have-account">
            <Link to="/login">Already have an account </Link>
          </div>
        </div>
    </main>
        </div>
    )
}

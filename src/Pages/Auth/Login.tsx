import { Link } from "react-router-dom";
import "./Auth.css";

export const Login = () => {
  return (
    <div>
      <main className="main-container">
        <div className="auth-container">
          <h1>Login</h1>
          <hr />

          <label>
            <b>Email address</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="*******"
            name="password"
            required
          />

          <div className="clearfix">
            <button type="submit" className="btn log-in-btn">
              <Link className="signup-btn" to="/">
                Login
              </Link>
            </button>
          </div>

          <div className="have-account">
            <Link to="/signup">Don't have an account </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

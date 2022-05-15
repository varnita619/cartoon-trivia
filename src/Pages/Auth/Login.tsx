import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuthServices } from "../../Services/useAuthServices";
import { toast } from "react-hot-toast";

export const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const { loginFunction } = useAuthServices();
  const navigate = useNavigate();

  const LoginHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      let response;
      response = await loginFunction(login.email, login.password);
      if (response) {
        navigate("/");
        toast.success("Logged in Successfully", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Error occured in logging in!", { position: "top-right" });
    }
  };

  const loginWithGuestHandler = async () => {
    let response;
    setLogin({
      email: "test@gmail.com",
      password: "test123",
    });
    response = await loginFunction("test@gmail.com", "test123");
    navigate("/");
    return response;
  };
  return (
    <div>
      <main className="main-container">
        <div className="auth-container">
          <h1>Login</h1>
          <hr />

          <label>
            <b>Email address</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            value={login.email}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="*******"
            name="password"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            value={login.password}
          />

          <div className="clearfix">
            <button
              type="submit"
              className="btn log-in-btn"
              onClick={(e) => LoginHandler(e)}
            >
              Login
            </button>
            <button
              type="submit"
              className="btn log-in-btn"
              onClick={() => loginWithGuestHandler()}
            >
              Login as Guest
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

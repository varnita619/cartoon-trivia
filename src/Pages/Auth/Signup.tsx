import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuthServices } from "../../Services/useAuthServices";
import { toast } from "react-hot-toast";

export const Signup = () => {
  const navigate = useNavigate();
  const {signupFunction} = useAuthServices();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });


  const signupHandler = async (name: string, email: string, password: string) => {
    try {
        const response = await signupFunction(name, email, password)
        if (response) {
            navigate('/rules')
            toast.success("User Signedup Successfully",{position:'top-right'})

        }
    } catch (error) {
        console.error(error)
    }
}

  return (
    <div>
      <main className="main-container">
        <div className="auth-container">
          <h1>Sign-up</h1>
          <hr />

          <label>
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            onChange={(e) =>
              setSignup((prev) => ({
                ...prev,
                name: e.target.value,
              }))}
          />

          {/* <label>
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            required
            onChange={(e) => setSignup({ ...signup, lastName: e.target.value })}
          /> */}

          <label>
            <b>Email address</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            // onChange={(e) => setSignup({ ...signup, email: e.target.value })}
            onChange={(e) =>
              setSignup((prev) => ({
                ...prev,
                email: e.target.value,
              }))}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="*******"
            name="password"
            required
            onChange={(e) =>
              setSignup((prev) => ({
                ...prev,
                password: e.target.value,
              }))}
          />

          <label>
            <input type="checkbox" name="remember" className="checkbox" />I
            accept all terms and conditions
          </label>

          <p>
            By creating an account you agree to our
            <Link to="/signup" className="terms-condition">
              Terms & Privacy
            </Link>
          </p>

          <div className="clearfix">
            <button
              type="submit"
              className="btn"
              onClick={() =>
                signupHandler(
                  signup.name,
                  // signup.lastName,
                  signup.email,
                  signup.password
                )
              }
            >
              Sign Up
            </button>
          </div>

          <div className="have-account">
            <Link to="/login">Already have an account </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

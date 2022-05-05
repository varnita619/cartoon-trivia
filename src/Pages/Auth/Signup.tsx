import { useState } from "react";
import { collection, where, query, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../../Context/AuthContext";
import { signupFunction } from "../../AllFunctions/AllFunctions";
import { db } from "../../Config/firebaseConfig";

export const Signup = () => {
  const navigate = useNavigate();
  const { setAuthToken, setAuthUser } = useAuth();
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });


  const signupHandler =  async( firstName: string, lastName: string, email: string, password: string) => {
    try {
      const response =  signupFunction( firstName, lastName, email, password);
      console.log("aiuasgdiusa")
      if (response) {
        const responseUser: any = response;
        // console.log(responseUser)
        localStorage.setItem(
          "token",
          JSON.stringify(responseUser?.accessToken)
        );
        setAuthToken(responseUser?.accessToken);
        // const queries = query(
        //   collection(db, "users"),
        //   where("uid", "==", responseUser.uid)
        // );
        // const querySnapshot =  getDocs(queries);
        // querySnapshot.forEach((doc) => {
        //   const userObj: any = doc.data();
        //   localStorage.setItem("user", JSON.stringify(userObj));
        //   setAuthUser(userObj);
        // });

        navigate('/rules');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            placeholder="Enter First Name"
            name="firstname"
            required
            onChange={(e) =>
              setSignup({ ...signup, firstName: e.target.value })
            }
          />

          <label>
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            required
            onChange={(e) => setSignup({ ...signup, lastName: e.target.value })}
          />

          <label>
            <b>Email address</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="*******"
            name="password"
            required
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
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
                  signup.firstName,
                  signup.lastName,
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

import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, where, query, getDocs } from "firebase/firestore";
import "./Auth.css";
import { useAuth } from "../../Context/AuthContext";
import { loginFunction } from "../../AllFunctions/AllFunctions";
import { db } from "../../Config/firebaseConfig";
import { toast } from "react-hot-toast";

export const Login = () => {
  const [login, setLogin] = useState({email:"", password:""});
  const navigate = useNavigate();
  const { setAuthToken, setAuthUser } = useAuth();
  

  const LoginHandler = async(e: FormEvent) =>{
      e.preventDefault();
      try{
        let response;
        if ((e.target as HTMLInputElement).innerText === 'Login as Guest') {
          setLogin({
              email: "test@gmail.com",
              password: "test123",
          });
          response = await loginFunction('test@gmail.com', 'test123')
      } else {
          response = await loginFunction(login.email, login.password)
      }
      if (response) {
          const responseUser: any = response?.user;
          localStorage.setItem('token', JSON.stringify(responseUser?.accessToken));

          setAuthToken(responseUser?.accessToken)
          const queries = query(
              collection(db, 'users'),
              where("uid", '==', responseUser.uid)
          )
          const querySnapshot = await getDocs(queries);
          querySnapshot.forEach((doc) => {
              const userObj: any = doc.data();
              setAuthUser(userObj);
              localStorage.setItem("user", JSON.stringify(userObj))
          })
          navigate('/')
          toast.success("Logged in Successfully",{position:'bottom-right'})

      }
      }catch(error){
        console.log(error)
      }
  }
  return (
    <div>
      <main className="main-container">
        <div className="auth-container">
          <h1>Login</h1>
          <hr />

          <label>
            <b>Email address</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={(e) => setLogin({...login, email: e.target.value})} />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="*******"
            name="password"
            required
            onChange={(e) => setLogin({...login, password: e.target.value})}
          />

          <div className="clearfix">
            <button type="submit" className="btn log-in-btn" onClick={(e)=> LoginHandler(e)}>
                Login
            </button>
            <button type="submit" className="btn log-in-btn" onClick={(e)=> LoginHandler(e)}>
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

import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header className="nav-bar">
        <div className="nav-bar_row">
          <div className="nav-bar_section--align-start">
            <button className="nav-bar_action-item"> </button>
            <span className="nav-bar_heading">Quizyy</span>
          </div>

          <div className="nav-bar_section--align-end">
            <button className="login-btn">
              <Link className="anchor-btn" to="/login">
                Login
              </Link>
            </button>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiQ63wXcfaE7w3wFexsqcuvwGwevpQHfEvw&usqp=CAU"
              alt="user"
              className="nav-user-image"
            />
          </div>
        </div>
      </header>
    </>
  );
};

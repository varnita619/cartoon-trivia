import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <div className="heading-container">
        <h1 className="heading">Welcome to the Cartoon Trivia!!</h1>
        <p className="subheading">Play Quizzes and have fun...</p>
      </div>

      <div className="main-container">
        <div className="shadow-card">
          <div className="card-image">
            <img
              src="https://variety.com/wp-content/uploads/2014/05/doraemon2.jpg?w=1024"
              alt="card"
            />
          </div>

          <div className="shadow-card-details">
            <h4>Doraemon</h4>
            <p>Are you a doraemon lover? Play this for fun!!</p>
          </div>
          <div className="card-btn">
            <Link to="/rules">Play Now</Link>
          </div>
        </div>

        <div className="shadow-card">
          <div className="card-image">
            <img
              src="https://i1.wp.com/media.premiumtimesng.com/wp-content/files/2020/04/Tom-and-Jerry-e1587475883217.jpg?resize=800%2C570&ssl=1"
              alt="card"
            />
          </div>

          <div className="shadow-card-details">
            <h4>Tom And Jerry</h4>
            <p>
              Have you enjoyed watching this cartoon? Refresh your memories by
              playing this!
            </p>
          </div>
          <div className="card-btn">
            <Link to="/rules.html">Play Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

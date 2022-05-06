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
              src="https://res.cloudinary.com/dqgqdj4jf/image/upload/v1651855959/Cartoon-Trivia/doraemon2_uxw2px.jpg"
              alt="card"
            />
          </div>

          <div className="shadow-card-details">
            <h4>Doraemon</h4>
            <p>It is a Japanese manga series. Are you a doraemon lover? Play this for fun!!</p>
          </div>
          <div className="card-btn">
            <Link to="/rules">Play Now</Link>
          </div>
        </div>

        <div className="shadow-card">
          <div className="card-image">
            <img
              src="https://res.cloudinary.com/dqgqdj4jf/image/upload/v1651855945/Cartoon-Trivia/Tom-and-Jerry-e1587475883217_wbuxgl.jpg"
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

        <div className="shadow-card">
          <div className="card-image">
            <img
              src="https://res.cloudinary.com/dqgqdj4jf/image/upload/v1651856365/Cartoon-Trivia/58907574_403_unvj7c.jpg"
              alt="card"
            />
          </div>

          <div className="shadow-card-details">
            <h4>Mickey Mouse</h4>
            <p>
              Mickey Mouse is an American animated cartoon character co-created
              in 1928.
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

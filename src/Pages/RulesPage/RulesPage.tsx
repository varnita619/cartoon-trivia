import { Link } from "react-router-dom";
import "./RulesPage.css";

export const RulesPage = () => {
  return (
    <>
      <main className="rules-wrapper">
        <div className="container">
          <div className="rules-heading">
            <h2>Rules</h2>
          </div>

          <div className="rules">
            <p>
              <i className="fas fa-star"></i>There are total 5 no. of questions.
            </p>

            <p>
              <i className="fas fa-star"></i>Each correct answer gives you 5 points.
            </p>

            <p>
              <i className="fas fa-star"></i>There is no negative marking.
            </p>

            <p>
              <i className="fas fa-star"></i>To win the quiz you need atleast 70%.
            </p>
          </div>

          <div className="primary-button button">
            <Link className="rules-btn" to="/questions">
              Play Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

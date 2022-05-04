import { Link } from "react-router-dom";
import "./Questions.css";

export const Questions = () => {
  return (
    <>
      <main className="questions-wrapper">
        <div className="questions-container">
          <div className="questions-heading">
            <h3>Question: 1/5</h3>
            <p>Score: 0</p>
          </div>

          <div className="question">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              corporis.
            </h2>
          </div>

          <div className="options-container">
            <p className="option">Lorem ipsum dolor sit.</p>
            <p className="option">Lorem ipsum dolor sit.</p>
            <p className="option">Lorem ipsum dolor sit.</p>
            <p className="option">Lorem ipsum dolor sit.</p>
          </div>

          <div className="btn-container">
            <div className="primary-button button">
              <Link className="quit-btn" to="/">
                Quit
              </Link>
            </div>
            <div className="primary-button button">
              <Link className="next-btn" to="/questions">
                Next
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

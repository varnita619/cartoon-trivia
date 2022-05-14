import "./Questions.css";
import { useQuizContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Questions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    quizState: { currentQuizzes },
    quizDispatch,
  } = useQuizContext();
  const [currentOption, setCurrentOption] = useState<any>("");
  const { question, option } = currentQuizzes[currentIndex] || {};
  const navigate = useNavigate();

  const nextQuestionHandler = () => {
    if (currentIndex === currentQuizzes.length - 1) {
      navigate("/result");
    }
    console.log(currentIndex, currentQuizzes.length);
    setCurrentIndex(currentIndex + 1);
    quizDispatch({ type: "SELECT_OPTION", payload: currentOption });
  };

  const previousQuestionHandler = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const optionHandler = (eachOption: any) => {
    setCurrentOption(eachOption);
  };

  return (
    <>
      <main className="questions-wrapper">
        {currentQuizzes?.length === 0 ? (
          ""
        ) : (
          <div className="questions-container">
            <div className="questions-heading">
              <h3>Question: {currentIndex + 1}/5</h3>
              <p>Score: 0</p>
            </div>
            <div>
              <div className="question">
                <h2>{question}</h2>
              </div>

              <div className="options-container">
                {option.map((eachOption: any, i: string) => (
                  <div key={i}>
                    <p
                      className="option"
                      onClick={() => optionHandler(eachOption)}
                    >
                      {eachOption.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="btn-container">
                <div className="primary-button button">
                  {currentIndex === 0 ? (
                    <Link className="quit-btn" to="/rules">
                      Back
                    </Link>
                  ) : (
                    <Link
                      className="quit-btn"
                      to=""
                      onClick={() => previousQuestionHandler()}
                    >
                      Previous
                    </Link>
                  )}
                </div>
                <div className="primary-button button">
                  <button
                    className="next-btn"
                    onClick={() => nextQuestionHandler()}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

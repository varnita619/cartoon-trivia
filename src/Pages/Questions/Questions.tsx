import { Link } from "react-router-dom";
import "./Questions.css";
import { useQuizContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Questions = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    quizState: { currentQuizzes },
    quizDispatch,
  } = useQuizContext();
  const [currentOption, setCurrentOption] = useState<any>("");
  const { question, option } = currentQuizzes[currentIndex] || {};

  const nextQuestionHandler = () => {
    if (currentIndex === currentQuizzes.length - 1) {
      navigate("/result");
    }
    setCurrentIndex(currentIndex + 1);
    quizDispatch({ type: "SELECT_OPTION", payload: currentOption });
  };


  const previousQuestionHandler = () => {
    setCurrentIndex(currentIndex - 1);
  };
  return (
    <>
      <main className="questions-wrapper">
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
              <p className="option">{eachOption.value}</p>
              ))}
            </div>
       

            <div className="btn-container">
              <div className="primary-button button">
                <Link
                  className="quit-btn"
                  to=""
                  onClick={() => previousQuestionHandler()}
                >
                  Quit
                </Link>
              </div>
              <div className="primary-button button">
                <Link
                  className="next-btn"
                  to=""
                  onClick={() => nextQuestionHandler()}
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

import "./Result.css";
import { useQuizContext } from "../../Context";
import { useNavigate } from "react-router-dom";

export const Result = () => {
  const {
    quizState: { currentQuizzes, selectedOption },
    quizDispatch,
  } = useQuizContext();
  const navigate = useNavigate();

  console.log(selectedOption);

  const submitHandler = () => {
    quizDispatch({ type: "RESET_OPTION" });
    navigate("/", { replace: true });
  };

  const score = selectedOption.reduce(
    (score: number, currentOption: any) =>
      currentOption.isCorrect ? score + 10 : score,
    0
  );

  return (
    <>
      <main className="questions-wrapper">
        <div className="result-container">
          <div className="result-heading">
            <h1>Quiz Result</h1>
            {score < 30 ? (
              <div>
                <h3>You Lost 😞 Better Luck next time!! </h3>
                <p>Your Score is: {score}/50</p>
              </div>
            ) : (
              <div>
                <h3 className="result-message">Congratulations🎉 You Won!! </h3>
                <p className="final-score">Your Score is: {score}/50</p>
              </div>
            )}
          </div>

          {currentQuizzes.map((eachQuestion: any, questionIndex: string) => (
            <div key={questionIndex}>
              <div className="questions-heading">
                <h3>Question: {questionIndex + 1}/5</h3>
                <p>
                  {selectedOption[questionIndex] === "" ? (
                    <span className="wrong-option"> Not Attempted</span>
                  ) : (
                    ""
                  )}
                </p>
              </div>

              <div className="question">
                <h2>{eachQuestion.question}</h2>
              </div>

              <div className="final-options-container">
                <div>
                  {eachQuestion.option.map((eachOption: any, i: number) => (
                    <div key={i}>
                      {eachOption.isCorrect ? (
                        <p className="option correct-option">
                          {eachOption.value}
                        </p>
                      ) : (
                        <p
                          className={`option ${
                            selectedOption[questionIndex].value ===
                            eachOption.value
                              ? "wrong-option"
                              : ""
                          }`}
                        >
                          {eachOption.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <button className="submit-btn" onClick={() => submitHandler()}>
            Submit
          </button>
        </div>
      </main>
    </>
  );
};

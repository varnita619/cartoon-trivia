import "./Result.css";
import { useQuizContext } from "../../Context";
import { Link } from "react-router-dom";

export const Result = () => {
  const {
    quizState: { currentQuizzes, selectedOption },
  } = useQuizContext();

  const getScore = () => {
    let score = 0;

    for (let i = 0; i < currentQuizzes.length; i++) {
      if (selectedOption[i].isCorrect === true) {
        score = score + 10;
      }
    }

    return score;
  };

  return (
    <>
      <main className="questions-wrapper">
        <div className="result-container">
          <div className="heading">
            <h1>Quiz Result</h1>
            <h3>Congratulations🎉 You Won!! </h3>
            <p>Your Score is: {getScore()}/50</p>
            <button className="home-btn">
              <Link to="/" className="home-link">Go To Home</Link>
            </button>
          </div>

          {currentQuizzes.map((eachQuestion: any, questionIndex: string) => (
            <div key={questionIndex}>
              <div className="questions-heading">
                <h3>Question: {questionIndex + 1}/5</h3>
              </div>

              <div className="question">
                <h2>{eachQuestion.question}</h2>
              </div>

              <div className="final-options-container">
                <div>
                  {eachQuestion.option.map((eachOption: any, i: number) => (
                    <div key={i}>
                      {eachOption.isCorrect === true ? (
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
        </div>
      </main>
    </>
  );
};

import "./Result.css";

export const Result = () => {
  return (
    <>
      <main className="questions-wrapper">
        <div className="result-container">
          <div className="heading">
            <h1>Quiz Result</h1>
            <h3>Congratulations🎉 You Won!! </h3>
            <p>Your Score is: 20/25</p>
          </div>

          {/* <!-- Question 1 --> */}
          <div className="questions-heading">
            <h3>Question: 5/5</h3>
            <p>Score: 16/25</p>
          </div>

          <div className="question">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              corporis.
            </h2>
          </div>

          <div className="final-options-container">
            <p className="option">Lorem ipsum dolor sit.</p>
            <p className="option correct-option">Lorem ipsum dolor sit.</p>
            <p className="option">Lorem ipsum dolor sit.</p>
            <p className="option wrong-option">Lorem ipsum dolor sit.</p>
          </div>

          {/* <!-- Question 2 --> */}
          <div className="questions-heading">
            <h3>Question: 5/5</h3>
            <p>Score: 16/25</p>
          </div>

          <div className="question">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              corporis.
            </h2>
          </div>

          <div className="options-container">
            <p className="option correct-option">Lorem ipsum dolor sit.</p>
            <p className="option">Lorem ipsum dolor sit.</p>
            <p className="option wrong-option">Lorem ipsum dolor sit.</p>
            <p className="option">Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </main>
    </>
  );
};

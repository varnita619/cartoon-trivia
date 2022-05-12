import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useAuth, useQuizContext } from "../../Context";

const HomePage = () => {
  const {
    quizState: { categories, quizzes },
    quizDispatch,
    setCategoryQuiz,
  } = useQuizContext();
  const { token } = useAuth();
  const navigate = useNavigate();

  const playQuizHandler = (categoryTitle: string) => {
    if (token) {
      navigate("/rules");

      const categoryBasedQuiz = quizzes?.filter(
        ({ category }: { category: string }) => category === categoryTitle
      );
      setCategoryQuiz(categoryBasedQuiz);

      type answerType = {
        ans: string;
      };

      //Getting answers of filter quizzes
      const allAnswer = categoryBasedQuiz?.map((each: answerType) => each.ans);
      quizDispatch({ type: "SET_ANSWERS", payload: allAnswer });

      quizDispatch({ type: "GET_FILTER_QUIZ", payload: categoryBasedQuiz });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="heading-container">
        <h1 className="heading">{categories.title}</h1>
        <p className="subheading">{categories.about}</p>
      </div>

      <div className="main-container">
        {categories.map((eachElement: any) => (
          <div className="shadow-card" key={eachElement.id}>
            <div className="card-image">
              <img src={eachElement.thumbnail} alt="card" />
            </div>

            <div className="shadow-card-details">
              <h4>{eachElement.title}</h4>
              <p>{eachElement.about}</p>
            </div>
            <div className="card-btn">
              <button
                className="play-btn"
                onClick={() => playQuizHandler(eachElement.title)}
              >
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { HomePage };

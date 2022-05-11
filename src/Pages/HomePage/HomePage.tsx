import { Link } from "react-router-dom";
import "./HomePage.css";
import { useAuth, useQuizContext } from "../../Context";

export const HomePage = () => {
  const {quizState:{categories}} = useQuizContext();
  const {token} = useAuth();
  return (
    <>
      <div className="heading-container">
        <h1 className="heading">{categories.title}</h1>
        <p className="subheading">{categories.about}</p>
      </div>

      <div className="main-container">
        {token}
        {categories.map((eachElement: any) =>  (
        <div className="shadow-card" key={eachElement.id}>
          
          <div className="card-image">
            <img
              src={eachElement.thumbnail}
              alt="card"
            />
          </div>

          <div className="shadow-card-details">
            <h4>{eachElement.title}</h4>
            <p>{eachElement.about}</p>
          </div>
          <div className="card-btn">
            <button>Play Now</button>
          </div>
        </div>
        ))}

      </div>
    </>
  );
};

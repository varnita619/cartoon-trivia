import { createContext, useEffect, useReducer, useContext, useState } from "react";
import { QuizContextType } from "../Types/quizTypes";
import { quizReducer, initialState } from "../Reducer/quizReducer";
import { categoriesRef, quizRef } from "../Config/firebaseConfig";
import { DocumentData, getDocs } from "firebase/firestore";

const quizContext = createContext<QuizContextType>({} as QuizContextType);

const QuizContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  const [categoryQuiz, setCategoryQuiz] = useState("");

  //Total score of the Specific user
  // const totalScoreOfUser = data.reduce((sum: number, currentValue: any ) => sum + currentValue.score, 0)

  // Getting categories from firebase

  useEffect(() => {
    (async () => {
      try {
        let res = await getDocs(categoriesRef);
        const categories: DocumentData | undefined = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });

        if (categories) {
          quizDispatch({ type: "GET_CATEGORY", payload: { categories } });
        }
      } catch (err) {
        console.log(err);
        throw Error("something went wrong");
      }
    })();
  }, []);

  // Getting quizzes from firebase 
  useEffect(() => {
    (async () => {

        try {
            let res = await getDocs(quizRef);
            const quizzes: DocumentData | undefined = res.docs.map(element => {
                return { ...element.data(), id: element.id };
            });
            // console.log(quizzes) 
            
            if (quizzes) {
                 
                quizDispatch({ type: "GET_QUIZ", payload: { quizzes } })
            }

        } catch (err) {
            console.log(err);
            throw Error("something went wrong");
        }
    })()

}, [])


  return (
    <quizContext.Provider value={{ quizState, quizDispatch, categoryQuiz, setCategoryQuiz }}>
      {children}
    </quizContext.Provider>
  );
};
const useQuizContext = () => useContext(quizContext);

export { QuizContextProvider, useQuizContext };

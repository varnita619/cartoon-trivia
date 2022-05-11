import { createContext, useEffect, useReducer, useContext } from "react";
import { QuizContextType } from "../Types/quizTypes";
import { quizReducer, initialState } from "../Reducer/quizReducer";
import { categoriesRef } from "../Config/firebaseConfig";
import { DocumentData, getDocs } from "firebase/firestore";

const quizContext = createContext<QuizContextType>({} as QuizContextType);

const QuizContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  // Getting categories from firebase

  useEffect(() => {
    (async () => {
      try {
        let res = await getDocs(categoriesRef);
        const categories: DocumentData | undefined = res.docs.map((ele) => {
          return { ...ele.data(), id: ele.id };
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

  return (
    <quizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};
const useQuizContext = () => useContext(quizContext);

export { QuizContextProvider, useQuizContext };

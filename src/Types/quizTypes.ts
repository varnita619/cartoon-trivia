import { categoryTypes } from "./categoryTypes";
import { DocumentData } from "firebase/firestore";
export type props = {
  category: categoryTypes;
};

export type categoryType = {
  category: string;
};

//Quiz context types

export type InitializeAction = {
  type: "INITIALIZE";
};

export type QuizInitialStateType = {
  categories: DocumentData;
};

export type GetCategoriesAction = {
  type: "GET_CATEGORY";
  payload: {
    categories: DocumentData;
  };
};

export type QuizzesActions = InitializeAction | GetCategoriesAction;

export type QuizContextType = {
  quizState: QuizInitialStateType;
  quizDispatch: React.Dispatch<QuizzesActions>;
};

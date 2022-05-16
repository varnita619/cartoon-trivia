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
  quizzes: DocumentData;
  currentQuizzes: DocumentData;
  selectedOption: any;
  answers: DocumentData;
};

export type GetCategoriesAction = {
  type: "GET_CATEGORY";
  payload: {
    categories: DocumentData;
  };
};

// For Quiz Questions And Answers

export type GetQuizAction = {
  type: "GET_QUIZ";
  payload: {
    quizzes: DocumentData;
  };
};

export type GetFilterQuiz = {
  type: "GET_FILTER_QUIZ";
  payload: {
    currentQuizzes: DocumentData;
  };
};

export type SetAnswers = {
  type: "SET_ANSWERS";
  payload: {
    answers: DocumentData;
  };
};

export type SelectedOptionType = {
  type: "SELECT_OPTION";
  payload: {
    selectedOption: any;
  };
};

export type ResetOption = {
  type: "RESET_OPTION";
};

export type QuizzesActions =
  | InitializeAction
  | GetCategoriesAction
  | GetQuizAction
  | GetFilterQuiz
  | SetAnswers
  | SelectedOptionType
  | ResetOption;

export type QuizContextType = {
  quizState: QuizInitialStateType;
  quizDispatch: React.Dispatch<QuizzesActions>;
  categoryQuiz: string;
  setCategoryQuiz: Function;
  // totalScoreOfUser: number
};

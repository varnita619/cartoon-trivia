import { QuizInitialStateType, QuizzesActions } from "../Types/quizTypes";

export const initialState = {
  categories: [],
  quizzes: [],
  currentQuizzes: [],
  selectedOption: [],
  answers: [],
};

export const quizReducer = (
  state: QuizInitialStateType,
  action: QuizzesActions
) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return { ...state, categories: action.payload.categories };

    case "GET_QUIZ":
      return { ...state, quizzes: action.payload.quizzes };

    case "GET_FILTER_QUIZ":
      return { ...state, currentQuizzes: action.payload };

    case "SELECT_OPTION":
      return {
        ...state,
        selectedOption: [...state.selectedOption, action.payload],
      };

    case "SET_ANSWERS":
      return { ...state, answers: action.payload };

    default:
      return state;
  }
};

import { QuizInitialStateType, QuizzesActions } from "../Types/quizTypes";

export const initialState = {
  loading: false,
  categories: [],
};

export const quizReducer = (
  state: QuizInitialStateType,
  action: QuizzesActions
) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return { ...state, categories: action.payload.categories };

    default:
      return state;
  }
};

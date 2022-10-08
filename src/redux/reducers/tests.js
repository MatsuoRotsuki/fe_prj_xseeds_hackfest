import { INIT_STATE } from "../../constant";
import { getTests, getType, getTest, chooseAnswer, unchooseAnswer } from "../actions";

export default function testsReducers(state = INIT_STATE.tests, action) {
  switch (action.type){
    case getType(getTests.getTestsRequest):
      return {
        ...state,
        isLoading: true, 
      }
    case getType(getTests.getTestsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case getType(getTests.getTestsFailure):
      return {
        ...state,
        isLoading: false,
      }
    case getType(getTest.getTestSuccess):
      return {
        ...state,
        takeTest: action.payload,
      }
    case getType(getTest.getTestFailure):
      return {
        ...state,
        takeTest: null,
      }
    case getType(chooseAnswer):
      return {
        ...state,
        takeTest: {
          ...state.takeTest,
          questions: state.takeTest.questions.map(
            question => question.questionId === action.payload.questionId ? 
            {
              ...question,
              answer: JSON.stringify(JSON.parse(question?.answer).map((answer, index) => index === action.payload.index ? {...answer, isChosen: true} : {...answer, isChosen: false})),
            } : question)
        }
      }
    case getType(unchooseAnswer):
      return {
        ...state,
        takeTest: {
          ...state.takeTest,
          questions: state.takeTest.questions.map(
            question => question.questionId === action.payload.questionId ? 
            {
              ...question,
              answer: JSON.stringify(JSON.parse(question?.answer).map((answer) => ({...answer, isChosen: false}))),
            } : question)
        }
      }
    default:
      return state;
  }
}
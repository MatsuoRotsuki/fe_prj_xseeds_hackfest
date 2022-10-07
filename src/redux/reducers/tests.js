import { INIT_STATE } from "../../constant";
import { getTests, getType } from "../actions";

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
    default:
      return state;
  }
}
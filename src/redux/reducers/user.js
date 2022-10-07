import { INIT_STATE } from "../../constant";
import { login, getType, logout } from "../actions";

export default function loginReducers(state = INIT_STATE.user, action) {
  switch(action.type){
    case getType(login.loginRequest):
      return {
				...state,
				user: null,
      }
		case getType(login.loginSuccess):
			return {
				...state,
				user: action.payload,
			}
		case getType(login.loginFailure):
			return {
				...state,
				user: null,
			}
		case getType(logout):
			return {
				...state,
				user: null,
			}
    default:
      return state;
  }
}
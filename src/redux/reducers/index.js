import { combineReducers } from "redux";
import posts from './posts';
import tests from './tests';

export default combineReducers({
  posts,
  tests,
});
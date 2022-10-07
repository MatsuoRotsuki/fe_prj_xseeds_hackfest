import { combineReducers } from "redux";
import posts from './posts';
import tests from './tests';
import user from './user';

export default combineReducers({
  posts,
  tests,
  user,
});
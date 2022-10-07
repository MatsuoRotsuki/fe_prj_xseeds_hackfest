import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action) {
  const posts = yield call(api.fetchPosts);
  console.log(posts);
}

function* fetchTestsSaga(action) {
  const tests = yield call(api.fetchPosts);
  console.log(tests);
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.getTests.getTestsRequest, fetchTestsSaga);
}

export default mySaga;
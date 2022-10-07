import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* fetchTestsSaga(action) {
  try {
    const tests = yield call(api.fetchTests);
    yield put(actions.getTests.getTestsSuccess(tests.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getTests.getTestsFailure(err));
  }
}

function* login(action){
  try {
    const user = yield call(api.login, action.payload);
    console.log(user);
    yield put(actions.login.loginSuccess(user.data))
  } catch (err) {
    console.error(err);
    yield put(actions.login.loginFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.getTests.getTestsRequest, fetchTestsSaga);
  yield takeLatest(actions.login.loginRequest, login);
}

export default mySaga;
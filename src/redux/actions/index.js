import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
}

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload)  => payload,
  getPostsFailure: (err) => err,
});

export const createPost = createActions({
  createPostRequest: (payload) => payload,
  createPostSuccess: (payload)  => payload,
  createPostFailure: (err) => err,
});

export const getTests = createActions({
  getTestsRequest: undefined,
  getTestsSuccess: (payload) => payload,
  getTestsFailure: (err) => err,
});

export const createTest = createActions({
  createTestRequest: (payload) => payload,
  createTestSuccess: (payload) => payload,
  createTestFailure: (err) => err,
});

export const getExam = createActions({
  getExamRequest: undefined,
  getExamSuccess: (payload) => payload,
  getExamFailure: (err) => err,
});

export const login = createActions({
  loginRequest: (payload) => payload,
  loginSuccess: (payload) => payload,
  loginFailure: (err) => err,
});
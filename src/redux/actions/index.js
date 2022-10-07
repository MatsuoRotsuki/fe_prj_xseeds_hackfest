import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
}

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload)  => payload,
  getPostsFailure: (err) => err,
})

export const getTests = createActions({
  getTestsRequest: undefined,
  getTestsSuccess: (payload) => payload,
  getTestsFailure: (err) => err,
})

export const getExam = createActions({
  getExamRequest: undefined,
  getExamSuccess: (payload) => payload,
  getExamFailure: (err) => err,
})
import axios from 'axios';

const URL = 'http://localhost:8080';

export const fetchPosts = () => axios.get(`${URL}/api/posts`);

export const createPost = (payload) => axios.post(`${URL}/api/post`, payload);

export const fetchTests = () => axios.get(`${URL}/api/tests`);

export const postTest = () => axios.post(`${URL}/api/test/post`);

export const login = () => axios.post(`${URL}/api/login`);
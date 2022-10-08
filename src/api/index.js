import axios from 'axios';

const URL = 'https://the-xseeds-hackfest.herokuapp.com/api/v1';

export const fetchPosts = () => axios.get(`${URL}/posts`);

export const createPost = (payload) => axios.post(`${URL}/post`, payload);

export const fetchTests = () => axios.get(`${URL}/tests`);

export const fetchOneTest = (id) => axios.get(`${URL}/tests/${id}`);

export const postTest = () => axios.post(`${URL}/api/test/post`);

export const login = (payload) => axios.post(`${URL}/users/login`, payload);
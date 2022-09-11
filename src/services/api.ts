import axios from 'axios';

export const api = axios.create();

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/users',
});

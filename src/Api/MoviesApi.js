import axios from 'axios';

const API_KEY = 'ffe5635381226a05cd5d4da4ec565c9d';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrending = () => {
  return instance.get(`/trending/all/week?${API_KEY}`);
};

export const getByName = name => {
  return axios.get(`/search/movie?${API_KEY}&query=${name}`);
};

export const getDetails = id => {
  return axios.get(`/movie/${id}?${API_KEY}`);
};

export const getCast = id => {
  return axios.get(`/movie/${id}/credits?${API_KEY}`);
};

export const getReviews = id => {
  return axios.get(`/movie/${id}/reviews?${API_KEY}`);
};

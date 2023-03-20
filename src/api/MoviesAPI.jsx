import axios from 'axios';

const API_KEY = '9f52e0996f349aa48758bcf925b4265a';
const BASE_URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrending = () => {
  return instance.get(`trending/movie/day?api_key=${API_KEY}`);
};

export const getByName = name => {
  return instance.get(`search/movie?api_key=${API_KEY}&query=${name}`);
};

export const getDetails = id => {
  return instance.get(`movie/${id}?api_key=${API_KEY}`);
};

export const getCast = id => {
  return instance.get(`movie/${id}/credits?api_key=${API_KEY}`);
};

export const getReviews = id => {
  return instance.get(`movie/${id}/reviews?api_key=${API_KEY}`);
};

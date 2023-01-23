import axios from 'axios';

export const BASE_API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3%22%7D"});
export const API_KEY="c45a857c193f6302f2b5061c3b85e743";



  export const img_url="http://image.tmdb.org/t/p/w500";
  export const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);

  export const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  export const fetchReviews = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
  export const fetchRecommendations = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/similar?api_key=${API_KEY}`);









import axios from "axios";

const baseApi = "https://api.themoviedb.org/3/";
const myApiKey = "6aca5fd1f6430f3a2dc19eecc3571e5f";
const paramsPopular = "trending/all/day?";
// const paramsSearchMovie = "search/movie?";
// const paramsMoreInfo = `movie/${movie_id}?`;
// const paramsActors = `movie/${movie_id}/credits?`;
// const paramsReview = `movie/${movie_id}/reviews?`;
const URLPopular = `${baseApi}${paramsPopular}api_key=${myApiKey}&language=en-US`;

export function popularMoviesAPI() {
  return axios.get(URLPopular).then((r) => r.data.results);
}

export function moreInfoAPI(movie_id) {
  return axios
    .get(`${baseApi}movie/${movie_id}?api_key=${myApiKey}`)
    .then((r) => r.data);
}

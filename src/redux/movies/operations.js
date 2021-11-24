import axios from "axios";
import actions from "./actions";

const apiKey = '7ef29c6c0a0e23edcc1bb5dd5737af1c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getMoviesTranding = () => dispatch => {
  dispatch(actions.getMoviesTrandingRequest());

  axios.get(`/trending/all/day?api_key=${apiKey}`).
    then(response => dispatch(actions.getMoviesTrandingSuccess(response.data.results)))
    .catch(error => dispatch(actions.getMoviesTrandingError(error.message)));
};

const getMovieDetails = (id) => dispatch => {
  dispatch(actions.getMovieDetailsRequest());

  axios.get(`/movie/${id}?api_key=${apiKey}&language=en-US`).
    then(response => dispatch(actions.getMovieDetailsSuccess(response.data)))
    .catch(error => dispatch(actions.getMovieDetailsError(error.message)));
}

const getSearchQuery = (query) => dispatch => {
  dispatch(actions.getSearchQueryRequest());

  axios.get(`/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`).
    then(response => dispatch(actions.getSearchQuerySuccess(response.data.results))).
    catch(error => dispatch(actions.getSearchQueryError(error.message)));
}

const getMovieCast = (movieId) => dispatch => {
  dispatch(actions.getMovieCastRequest());

  axios.get(`/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`).
    then(response => dispatch(actions.getMovieCastSuccess(response.data.cast))).
    catch(error => dispatch(actions.getMovieCastError(error.message)));
}

const getMovieReview = (movieId) => dispatch => {
  dispatch(actions.getMovieReviewRequest());

  axios.get(`/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`).
    then(response => dispatch(actions.getMovieReviewSuccess(response.data.results))).
    catch(error => dispatch(actions.getMovieReviewError(error.message)));
}

const getGenresList = () => dispatch => {
  dispatch(actions.getGenresListRequest());

  axios.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`).
    then(response => dispatch(actions.getGenresListSuccess(response.data.genres))).
    catch(error => dispatch(actions.getGenresListError(error.message)));
}

const getGenresMovies = (genre) => dispatch => {
  dispatch(actions.getGenresMoviesRequest());

  axios.get(`/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=${genre}`).
    then(response => dispatch(actions.getGenresMoviesSuccess(response.data.results))).
    catch(error => dispatch(actions.getGenresMoviesError(error.message)));
}

export default {
  getMoviesTranding,
  getMovieDetails,
  getSearchQuery,
  getMovieCast,
  getMovieReview,
  getGenresList,
  getGenresMovies,
}
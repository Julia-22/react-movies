import { createAction } from "@reduxjs/toolkit";

const getMoviesTrandingRequest = createAction('movies/getMoviesTrandingRequest');
const getMoviesTrandingSuccess = createAction('movies/getMoviesTrandingSuccess');
const getMoviesTrandingError = createAction('movies/getMoviesTrandingError');

const getMovieDetailsRequest = createAction('movies/getMovieDetailsRequest');
const getMovieDetailsSuccess = createAction('movies/getMovieDetailsSuccess');
const getMovieDetailsError = createAction('movies/getMovieDetailsError');

const resetMovieDetails = createAction('movies/resetMovieDetails');

const getSearchQueryRequest = createAction('movies/getSearchQueryRequest');
const getSearchQuerySuccess = createAction('movies/getSearchQuerySuccess');
const getSearchQueryError = createAction('movies/getSearchQueryError');

const resetSearch = createAction('movies/resetSearch');

const getMovieCastRequest = createAction('movies/getMovieCastRequest');
const getMovieCastSuccess = createAction('movies/getMovieCastSuccess');
const getMovieCastError = createAction('movies/getMovieCastError');

const getMovieReviewRequest = createAction('movies/getMovieReviewRequest');
const getMovieReviewSuccess = createAction('movies/getMoviesReviewSuccess');
const getMovieReviewError = createAction('movies/getMovieReviewError');

const getGenresListRequest = createAction('movies/getGenresListRequest');
const getGenresListSuccess = createAction('movies/getGenresListSuccess');
const getGenresListError = createAction('movies/getGenresListError');

const getGenresMoviesRequest = createAction('movies/getGenresMoviesRequest');
const getGenresMoviesSuccess = createAction('movies/getGenresMoviesSuccess');
const getGenresMoviesError = createAction('movies/getGenresMoviesError');

const setChoosenGenre = createAction('movies/setChoosenGenre');

const setQuery = createAction('movies/setQuery');

export default {
  getMoviesTrandingRequest,
  getMoviesTrandingSuccess,
  getMoviesTrandingError,
  getMovieDetailsRequest,
  getMovieDetailsSuccess,
  getMovieDetailsError,
  getSearchQueryRequest,
  getSearchQuerySuccess,
  getSearchQueryError,
  resetSearch,
  getMovieCastRequest,
  getMovieCastSuccess,
  getMovieCastError,
  getMovieReviewRequest,
  getMovieReviewSuccess,
  getMovieReviewError,
  setQuery,
  getGenresListRequest,
  getGenresListSuccess,
  getGenresListError,
  getGenresMoviesRequest,
  getGenresMoviesSuccess,
  getGenresMoviesError,
  setChoosenGenre,
  resetMovieDetails
}
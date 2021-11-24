import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./actions";

const moviesReducer = createReducer([], {
  [actions.getMoviesTrandingSuccess]: (state, { payload }) => [ ...payload],
});

const moviesActiveReducer = createReducer(null, {
  [actions.getMovieDetailsSuccess]: (_, { payload }) => payload,
  [actions.resetMovieDetails]: () => null,
});

const detailsDisabled = createReducer(false, {
  [actions.getMovieDetailsError]: () => true,
  [actions.getMovieDetailsSuccess]: () => false
})

const queryReducer = createReducer([], {
  [actions.getSearchQuerySuccess]: (_, { payload }) => [...payload],
  [actions.resetSearch]: () => [],
});

const castReducer = createReducer([], {
  [actions.getMovieCastSuccess]: (_, {payload}) => [ ...payload],
})

const reviewReducer = createReducer([], {
  [actions.getMovieReviewSuccess]: (_, {payload}) => [ ... payload],
})

const querySearchReducer = createReducer('', {
  [actions.setQuery]: (_, { payload }) => payload,
})

const genresListReducer = createReducer([], {
  [actions.getGenresListSuccess]: (_, {payload}) => [...payload],
})

const genresMoviesReducer = createReducer([], {
  [actions.getGenresMoviesSuccess]: (_, { payload }) => [...payload],
  [actions.resetSearch]: () => [],
})

const choosenGenreReducer = createReducer('', {
  [actions.setChoosenGenre]: (_, {payload}) => payload,
})

const loaderReducer = createReducer(false, {
  [actions.getMoviesTrandingRequest]: () => true,
  [actions.getMoviesTrandingSuccess]: () => false,
  [actions.getMoviesTrandingError]: () => false,
});

export default combineReducers({
  movies: moviesReducer,
  loader: loaderReducer,
  moviesActive: moviesActiveReducer,
  searchMovies: queryReducer,
  cast: castReducer,
  reviews: reviewReducer,
  querySearch: querySearchReducer,
  genresList: genresListReducer,
  genresMovies: genresMoviesReducer,
  choosenGenre: choosenGenreReducer,
  detailsDisabled: detailsDisabled,
})
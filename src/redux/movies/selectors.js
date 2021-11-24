const getMovies = state => state.movies.movies;
const getLoader = state => state.movies.loader;
const getMovieDetails = state => state.movies.moviesActive;
const getSearchMovies = state => state.movies.searchMovies;
const getCast = state => state.movies.cast;
const getReviews = state => state.movies.reviews;
const getQuery = state => state.movies.querySearch;
const getGenresList = state => state.movies.genresList;
const getGenresMovies = state => state.movies.genresMovies;
const getChoosenGenre = state => state.movies.choosenGenre;
const getDetailsDisabled = state => state.movies.detailsDisabled;

export default {
  getMovies,
  getLoader,
  getMovieDetails,
  getSearchMovies,
  getCast,
  getReviews,
  getQuery,
  getGenresList,
  getGenresMovies,
  getChoosenGenre,
  getDetailsDisabled,
}
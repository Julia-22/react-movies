import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { Rating, RatingView } from 'react-simple-star-rating';
import './MoviesList.css';
import { connect } from 'react-redux';
import operations from '../../redux/movies/operations';
import selectors from '../../redux/movies/selectors';
import { compose } from 'redux';
import actions from '../../redux/movies/actions';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const gradientList = [
  'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
  'linear-gradient(to left, #0f0c29, #302b63, #24243e)',
  'linear-gradient(45deg, #41295a, #2f0743)',
  'linear-gradient(45deg, #141e30, #243b55)',
  'linear-gradient(45deg, #232526, #414345)',
  ''
];

class MoviesList extends Component {
  componentDidMount() {
    const searchQuery = new URLSearchParams(this.props.location.search).get('query') || '';
    const genreFilter = new URLSearchParams(this.props.location.search).get('id') || '';
    if (searchQuery) {
      this.props.getSearchQuery(searchQuery);
    }
    if (genreFilter) {
      this.props.getMoviesGenre(genreFilter);
    }
  }

  render() {
    const { movies, location, resetMovieDetails } = this.props;
    return (
      <ul className="movies_list">
        {movies.length > 0 && movies.map((el, i) => (
          <CustomLink pathname={`/movies/${el.id}`} from={location} key={i} onClick={() => resetMovieDetails()}>
            <div className="movie_item" style={{ backgroundImage: gradientList[getRandomInt(gradientList.length - 1)] }}>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                
                <img src={`https://image.tmdb.org/t/p/w300${el.poster_path}`} alt={el.name || el.original_title} />
                
                <h2>{el.name || el.original_title}</h2>
                <RatingView ratingValue={+el.vote_average / 2} size={15} />
              </div>
            </div>
          </CustomLink>
        ))}
      </ul>
    );
  }
}


const mapDispatchToProps = {
  getSearchQuery: operations.getSearchQuery,
  getMoviesGenre: operations.getGenresMovies,
  resetMovieDetails: actions.resetMovieDetails,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(MoviesList);
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MovieInfo from '../components/MovieInfo/MovieInfo';
import selectors from '../redux/movies/selectors';
import operations from '../redux/movies/operations';
import CastList from '../components/CastList/CastList';
import ReviewList from '../components/ReviewList/ReviewList';
import NoInfo from '../components//NoInfo/NoInfo';

class MovieDetailsPage extends Component{
  constructor() {
    super();
    this.timer = null;
  }
  
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.getMovieDetail(movieId);
    this.props.getCast(movieId);
    this.props.getReviews(movieId);
  }

  componentDidWillUnmount() {
    clearTimeout(this.timer);
  }

  handleScroll = () => {
    this.timer = setTimeout(() => {
      this.refs.scrollRef.scrollIntoView({behavior: 'smooth'});
    }, 0);
  }

  render() {
    const { movie, cast, reviews, isDisabled } = this.props;
    const castToView = cast.slice(0, 5);

    return (isDisabled
      ? <NoInfo />
      : <>
        {movie && <MovieInfo handleScrollToCast={this.handleScroll} handleScroolToReviews={this.handleScroll} movie={movie} cast={cast} castToView={castToView} reviews={reviews} />}

        {cast &&
          <div className="main_container" ref="scrollRef">
            <Route path='/movies/:movieId/cast' render={() => <CastList className={'allCastList'} cast={cast} />} />
          </div>
        }

        {reviews &&
          <div className="main_container">
            <Route
              path="/movies/:movieId/reviews"
              render={() => <ReviewList reviews={reviews} />}
            />
          </div>
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  movie: selectors.getMovieDetails(state),
  cast: selectors.getCast(state),
  reviews: selectors.getReviews(state),
  isDisabled: selectors.getDetailsDisabled(state),
});

const mapDispatchToProps = {
  getMovieDetail: operations.getMovieDetails,
  getCast: operations.getMovieCast,
  getReviews: operations.getMovieReview,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
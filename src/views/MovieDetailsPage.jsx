import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieInfo from '../components/MovieInfo/MovieInfo';

import selectors from '../redux/movies/selectors';
import operations from '../redux/movies/operations';
import CastList from '../components/CastList/CastList';
import ReviewList from '../components/ReviewList/ReviewList';
import CustomLink from '../components/CustomLink/CustomLink';
import NoInfo from '../components//NoInfo/NoInfo';

class MovieDetailsPage extends Component{
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.movieId);
    this.props.getCast(this.props.match.params.movieId);
    this.props.getReviews(this.props.match.params.movieId);
  }

  handleScroll = () => {
    setTimeout(() => {
      this.refs.scrollRef.scrollIntoView({behavior: 'smooth'});
    }, 0);
  }

  render() {
    const { movie, cast, reviews, location, isDisabled } = this.props;
    const castToView = cast.slice(0, 5);
    if (isDisabled) {
      return (
        <NoInfo/>
      )
    }
    return (
      <>
        {movie && <MovieInfo handleScrollToCast={this.handleScroll} handleScroolToReviews={this.handleScroll}  movie={movie} cast={cast} castToView={castToView} reviews={reviews}  />}

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
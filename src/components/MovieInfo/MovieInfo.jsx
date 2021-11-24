import './MovieInfo.css';
import { Rating, RatingView } from 'react-simple-star-rating';
import CastList from '../CastList/CastList';
import CustomLink from '../CustomLink/CustomLink';
import { Link, Route } from 'react-router-dom';

function MovieInfo({ movie, cast, castToView, reviews, handleScrollToCast, handleScroolToReviews }) {
  const title = movie.name || movie.original_title;
  const countCast = cast.length - castToView.length;
  return (
    <div className="Movie_information">
      {movie.poster_path &&
        <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.name || movie.original_title}
        width="360"
      />
      }
      {!movie.poster_path &&
        <div className="poster_img">No image</div>
      }

      <div className="movie_details">
        <h1>{title.toUpperCase()}</h1>
        {movie.genres.length > 0 &&
          <div className="tags_container">
            <p>{movie.genres.map(el => el.name).join(' / ')}</p>
          </div>
        }

        <div className="rating">
          <RatingView ratingValue={+movie.vote_average / 2} size={25} />
          <p>{+movie.vote_average}</p>
        </div>
        
        {movie.overview &&
          <div className="overview_container">
            <h2>SYNOPSIS</h2>
            <p>{movie.overview}</p>
          </div>
        }

        {cast &&
          <div className="cast_container">
            <h2>THE CAST</h2>
            <div className="flex_container">
              <CastList cast={castToView} className={'previewCastList'} />
              <CustomLink pathname={`/movies/${movie.id}/cast`}>
                {countCast > 0 && <button type="button" onClick={handleScrollToCast}>+{countCast}</button>}
              </CustomLink>
            </div>
          </div>
        }

        {reviews.length > 0 ?
          <CustomLink pathname={`/movies/${movie.id}/reviews`}>
            <button className="review_button" type="button" onClick={handleScroolToReviews}>READ REVIEWS</button>
          </CustomLink> :
          <p className="review_note">There are no reviews of this film yet</p>
        }
          
      </div>
    </div>
  );
};

export default MovieInfo;
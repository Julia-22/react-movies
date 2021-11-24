import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { connect } from 'react-redux';
import selectors from '../redux/movies/selectors';
import operations from "../redux/movies/operations";
import './Views.css';

import MoviesList from "../components/MoviesList/MoviesList";

class HomePage extends Component{
  componentDidMount() {
    this.props.getMovies();
    this.props.getGenresList();
  }

  render() {
    return (
      <div className="main_container">
        <Switch>
          <Route exact path="/search" render={(props) => <MoviesList {...props} movies={this.props.searchMovies}/>}/>
          <Route exact path="/genre" render={() => <MoviesList movies={this.props.genreMovies}/> }/>
          <Route exact path='/' render={()=><MoviesList movies={this.props.movies}/>}/>
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  movies: selectors.getMovies(state),
  query: selectors.getQuery(state),
  searchMovies: selectors.getSearchMovies(state),
  genreMovies: selectors.getGenresMovies(state),
});

const mapDispatchToProps = {
  getMovies: operations.getMoviesTranding,
  getGenresList: operations.getGenresList,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
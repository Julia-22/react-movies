import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './AppBar.css';
import selectors from '../../redux/movies/selectors';
import operations from '../../redux/movies/operations';
import actions from '../../redux/movies/actions';
import SearchForm from '../SearchForm/SearchForm';
import { compose } from 'redux';


class AppBar extends Component {
  state = {
    modalIsOpen: false,
    choosenGenre: '',
  }

  handleInputChange = event => {
    this.props.setQuery(event.target.value);
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.getSearchQuery(this.props.query);
    this.props.history.push(`/search?query=${this.props.query}`);
  }

  handleGoBackHome = () => {
    this.props.resetMovies();
    this.props.setQuery('');
    console.log(1);
  }

  handleGenresModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  }

  handleChooseGenre = (genre) => {
    this.setState({
      choosenGenre: genre,
      modalIsOpen: false,
    });
    this.props.getGenresMovies(genre);
    this.props.history.push(`/genre?id=${genre}`);
  }

  render() {
    const { genresList } = this.props;
    return (
      <div className="main_container">
        <nav className="AppBar_container">
          <Link to='/' className="AppBar__link" onClick={this.handleGoBackHome}>Home</Link>
        </nav>
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
          query={this.props.query}
          className="Search_form"
        />

        <button type="button" onClick={this.handleGenresModal}>CHOOSE GENRE</button>

        {this.state.modalIsOpen && genresList.length > 0 &&
          <ul className="genresList">
            {genresList.map(el => (
              <li key={el.id} onClick={() => {
                this.handleChooseGenre(el.id);
              }}>{el.name}</li>
            ))}
          </ul>
        }
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchMovies: selectors.getSearchMovies(state),
  query: selectors.getQuery(state),
  genresList: selectors.getGenresList(state),
});

const mapDispatchToProps = {
  getSearchQuery: operations.getSearchQuery,
  resetMovies: actions.resetSearch,
  setQuery: actions.setQuery,
  getGenresMovies: operations.getGenresMovies,
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AppBar);
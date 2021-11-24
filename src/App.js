import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import AppBar from './components/AppBar/AppBar';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  return (
    <>
      <AppBar/>

      <Switch>
        <Route path='/movies/:movieId' component={MovieDetailsPage}/>
        <Route path='/' component={HomePage} />
      </Switch>
    </>
  );
}

export default App;

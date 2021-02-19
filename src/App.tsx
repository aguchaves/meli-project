import React from 'react';
import logo from './logo.svg';
import css from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SearchBar from './components/search-bar';
import ItemsList from './components/items-list';

function App() {
  return (
    <Router>
      <div>

        <div className={css.App}>
          <SearchBar />
        </div>

        <Switch>
          <Route path="/items">
            <ItemsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

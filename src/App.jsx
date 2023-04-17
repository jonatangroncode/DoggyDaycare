import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import { WelcomePage } from './components/WelcomePage';
import Catalog from './components/Catalog';
import DogDetailsPage from './components/DogDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationMenu />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/katalog" component={Catalog} />
        <Route path="/katalog/:id" component={DogDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
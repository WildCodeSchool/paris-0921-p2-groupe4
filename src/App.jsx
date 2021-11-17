import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage';
import HappyNews from './components/HappyNews';
import National from './components/National';
import Tendances from './components/Tendances';
import Ted from './components/Ted';
import Favoris from './components/Favoris';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/HappyNews" component={HappyNews} />
        <Route path="/National" component={National} />
        <Route path="/Tendances" component={Tendances} />
        <Route path="/TedTalks" component={Ted} />
        <Route path="/Favoris" component={Favoris} />
      </Switch>
    </div>
  );
}

export default App;

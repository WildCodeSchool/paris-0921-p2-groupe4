import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import HappyNews from './components/HappyNews';
import National from './components/National';
import Tendances from './components/Tendances';
import TedTalk from './components/ted-talk';
import Apropos from './components/a-propos';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/HappyNews" component={HappyNews} />
        <Route path="/National" component={National} />
        <Route path="/Tendances" component={Tendances} />
        <Route path="/TedTalks" component={TedTalk} />
        <Route path="/a-propos" component={Apropos} />
      </Switch>
    </div>
  );
}

export default App;

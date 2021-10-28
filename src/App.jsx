import { Switch, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import HappyNews from './Components/HappyNews';
import National from './Components/National';
import Tendances from './Components/Tendances';
import TED from './Components/Ted';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/HappyNews" component={HappyNews} />
        <Route path="/National" component={National} />
        <Route path="/Tendances" component={Tendances} />
        <Route path="/TedTalks" component={TED} />
      </Switch>
    </div>
  );
}

export default App;

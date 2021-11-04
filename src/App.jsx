import React from 'react';
import './App.css';
import Content from './Components/Content';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
// import Card //
// import Card from './Components/Card';
// import Card //
import Homepage from './Components/Homepage';
import HappyNews from './Components/HappyNews';
import National from './Components/National';
import Tendances from './Components/Tendances';
import Ted from './Components/Ted';
import Favoris from './Components/Favoris';
import FluxActualite from './Components/FluxActualite';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Card /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/HappyNews" component={HappyNews} />
        <Route path="/National" component={National} />
        <Route path="/Tendances" component={Tendances} />
        <Route path="/TedTalks" component={Ted} />
        <Route path="/Favoris" component={Favoris} />
      </Switch>
      <FluxActualite />
      <Content />
    </div>
  );
}

export default App;

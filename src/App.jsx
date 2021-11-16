import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import HappyNews from './components/HappyNews';
import National from './components/National';
import Tendances from './components/Tendances';
import Ted from './components/Ted';
import Favoris from './components/Favoris';
import Settings from './components/Settings';
// import FluxActualite from './components/FluxActualite';
import Apropos from './components/a-propos';
import './App.css';
import Loader from './components/Loader.jsx';
import gsap from 'gsap';

function App() {
  let timeline = gsap.timeline();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 6000);
  }, []);

  return loader ? (
    <Loader timeline={timeline} />
  ) : (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/HappyNews" component={HappyNews} />
        <Route path="/National" component={National} />
        <Route path="/Tendances" component={Tendances} />
        <Route path="/TedTalks" component={Ted} />
        <Route path="/Favoris" component={Favoris} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Apropos" component={Apropos} />
      </Switch>
    </div>
  );
}

export default App;

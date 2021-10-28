import React from 'react';
import './App.css';
import RequestHappy from './components/happyAPI';
import happyTweets from './components/happyTweets';

function App() {
  return <RequestHappy tweets={happyTweets} />;
}

export default App;

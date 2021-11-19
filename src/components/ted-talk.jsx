import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DisplayVideo from './display-video';
import Banner from './banner';
import Header from './Header';

import SwipeR from '../pictures/swipe-right.png';
import SwipeL from '../pictures/swipe-left.png';

import './ted-talk.css';
import './Text.css';
import './Swipe.css';

const sampleVideo = 'P96mwXALxzE';

function TedTalk() {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState(sampleVideo);

  const getVideo = () => {
    const index = Math.floor(Math.random() * 15);
    if (!videos[index].id.videoId) {
      getVideo();
    } else {
      setVideoId(videos[index].id.videoId);
    }
  };

  useEffect(() => {
    axios
      .get(
        'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=ted talk inspiration relax&chart=mostPopular&maxResults=15&key=AIzaSyCS8NAqiDUdXiBNrOtYQBL5t399jNZSHvc',
      )
      .then((response) => response.data)
      .then((data) => {
        setVideos(data.items);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="PageScreen2">
        <Banner />
        <DisplayVideo videoId={videoId} />
        <div className="button-div">
          <button className="button" type="button" onClick={getVideo}>
            Boost me more!
          </button>
        </div>
        <div className="Swipe">
          <Link to="/National">
            <img className="Swipe-left" src={SwipeL} alt="Swipe-left"></img>
          </Link>
          <Link to="/">
            <img className="Swipe-right" src={SwipeR} alt="Swipe-right"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TedTalk;

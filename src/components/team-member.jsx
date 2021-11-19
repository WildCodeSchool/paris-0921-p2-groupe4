import React from 'react';

import './team-member.css';

function TeamM(props) {
  return (
    <div className="team1">
      <img className="teammember" src={props.pic} alt="" />
      <div className="overlay">
        <div className="teamname">{props.name}</div>
      </div>
    </div>
  );
}

export default TeamM;

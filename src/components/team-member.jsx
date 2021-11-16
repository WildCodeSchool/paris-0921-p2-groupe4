import React from 'react';
import './team-member.css';
function TeamM(props) {
  return (
    <div className="team1">
      <img className="teammember" src={props.pic} alt="" />
      <p className="teamname">{props.name}</p>
    </div>
  );
}

export default TeamM;

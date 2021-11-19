import React from 'react';

import TeamM from './team-member';

import elisa from './assets/Elisa.jpg';
import juan from './assets/JuanCarlos.png';
import thomas from './assets/Thomas.jpg';
import yass from './assets/Yassine.jpg';

import './team.css';

function Team() {
  return (
    <div className="team">
      <div className="column1">
        <TeamM name="Maria Elisa Cruz" pic={elisa} />
        <TeamM name="Yassine Boulakhrif" pic={yass} />
      </div>
      <div className="column2">
        <TeamM name="Thomas Giolito " pic={thomas} />
        <TeamM name="Juan Carlos Cobas" pic={juan} />
      </div>
    </div>
  );
}

export default Team;

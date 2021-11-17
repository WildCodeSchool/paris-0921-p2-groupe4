import React from 'react';

import TeamM from './team-member';
import Example from './assets/example.png';

import './team.css';

function Team() {
  return (
    <div className="team">
      <div className="column1">
        <TeamM name="Maria Elisa Cruz" pic={Example} />
        <TeamM name="Yassine Boulakhrif" pic={Example} />
      </div>
      <div className="column2">
        <TeamM name="Thomas Giolito " pic={Example} />
        <TeamM name="Juan Carlos Cobas" pic={Example} />
      </div>
    </div>
  );
}

export default Team;

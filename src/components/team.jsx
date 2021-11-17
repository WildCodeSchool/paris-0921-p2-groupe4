import React from 'react';

import TeamM from './team-member';
import Example from './assets/example.png';

import './team.css';

function Team() {
  return (
    <div className="team">
      <div className="column1">
        <TeamM name="Maria Elisa Cruz" src={Example} />
        <TeamM name="Yassine Boulakhrif" src={Example} />
      </div>
      <div className="column2">
        <TeamM name="Thomas Giolito " src={Example} />
        <TeamM name="Juan Carlos Cobas" src={Example} />
      </div>
    </div>
  );
}

export default Team;

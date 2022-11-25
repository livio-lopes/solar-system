import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Mission extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {
            missions.map((mission) => {
              const { name: n, year: y, country: c, destination: d } = mission;
              return (
                <li key={ n }>
                  <MissionCard name={ n } year={ y } country={ c } destination={ d } />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Mission;

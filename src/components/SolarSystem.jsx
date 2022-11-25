import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planets.map((planet) => {
            const { name, image } = planet;
            return (
              <li key={ name }>
                <PlanetCard planetName={ name } planetImage={ image } />
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default SolarSystem;

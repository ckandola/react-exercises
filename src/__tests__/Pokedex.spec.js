import React from 'react';
import Pokedex from '../components/Pokedex';
import Pokecard from '../components/Pokedex/Pokecard';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Pokedex test', () => {
    it('matches the snapshot', () => {
        const pokedex = shallow(<Pokedex />);
        expect(toJson(pokedex)).toMatchSnapshot();
    });

    it('Pokecard renders properly', () => {
        const pokecard = shallow(<Pokecard 
            key={382} id={382} name="Kyogre"
            type="water" image={"http://www.psypokes.com/dex/picdex/bw/382.png"}
        />);
        expect(pokecard.find('.pokemon-name').getElement().props.children).toBe("Kyogre");
    });
});

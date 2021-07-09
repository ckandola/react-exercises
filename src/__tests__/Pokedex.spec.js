import React from 'react';
import Pokedex from '../components/Pokedex';
import Pokecard from '../components/Pokedex/Pokecard';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

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

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import BasicMenu from '../components/BasicMenu';
import About from '../components/BasicMenu/pages/About';
import Contact from '../components/BasicMenu/pages/Contact';

configure({adapter: new Adapter()});

describe('BasicMenu tests', () => {
    describe('Snapshots match correctly, ignoring the Resume one', () => {
        it('matches the Home snapshot', () => {
            const wrapper = shallow(<BasicMenu />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('matches the About snapshot', () => {
            const wrapper = shallow(<About />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        it('matches the Contact snapshot', () => {
            const wrapper = shallow(<Contact />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });

    });
});

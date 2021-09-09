import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../components/NavBar';

const wrapper = mount(<NavBar />);

describe('NavBar tests', () => {
    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('toggles display for links when hamburger menu button is clicked', () => {
        expect(wrapper.find('.navbar-show-container')).toHaveLength(0);
        wrapper.find('.navbar-toggle').simulate('click');
        expect(wrapper.find('.navbar-show-container')).toHaveLength(1);
        wrapper.find('.navbar-toggle').simulate('click');
        expect(wrapper.find('.navbar-show-container')).toHaveLength(0);
    });
});

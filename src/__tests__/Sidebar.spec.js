import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Sidebar from '../components/Sidebar';

describe('Sidebar tests', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<Sidebar />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('opens the menu display when the hamburger button is clicked', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.find('.show-sidebar')).toHaveLength(0);
        wrapper.find('.sidebar-toggle').simulate('click');
        expect(wrapper.find('.show-sidebar')).toHaveLength(1);
    });

    it('closes the menu display when the red X button is clicked', () => {
        const wrapper = shallow(<Sidebar />);
        wrapper.find('.sidebar-toggle').simulate('click');
        expect(wrapper.find('.show-sidebar')).toHaveLength(1);
        wrapper.find('.sidebar-close-btn').simulate('click');
        expect(wrapper.find('.show-sidebar')).toHaveLength(0);
    });
});

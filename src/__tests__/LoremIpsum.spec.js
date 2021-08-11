import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoremIpsum from '../components/LoremIpsum';

describe('LoremIpsum tests', () => {

    const wrapper = shallow(<LoremIpsum />);

    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders 2 paragraphs when 2 is inputted and GENERATE is clicked', () => {
        wrapper.find('.lorem-input').simulate('change', {target: {value: 2}});
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('renders at most 8 paragraphs when the input is `8` or larger and GENERATE is clicked', () => {
        wrapper.find('.lorem-input').simulate('change', {target: {value: 8}});
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(wrapper.find('p')).toHaveLength(8);
        wrapper.find('.lorem-input').simulate('change', {target: {value: 9}});
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(wrapper.find('p')).toHaveLength(8);
    });

    it('renders no paragraphs when the input is `0` or lower', () => {
        wrapper.find('.lorem-input').simulate('change', {target: {value: 0}});
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(wrapper.find('p')).toHaveLength(0);
        wrapper.find('.lorem-input').simulate('change', {target: {value: -2}});
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(wrapper.find('p')).toHaveLength(0);
    });

});

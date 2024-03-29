import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FoodMenuProject from '../components/FoodMenuProject';

const totalItems = 9;
const totalShakes = 3;
const wrapper = mount(<FoodMenuProject />);

describe('FoodMenuProject tests', () => {
    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it(`displays ${totalItems} items overall, but only ${totalShakes} shakes.`, () => {
        expect(wrapper.find('.food-menu-item')).toHaveLength(totalItems);
        wrapper.find({children: 'shakes'}).simulate('click');
        expect(wrapper.find('.food-menu-item')).toHaveLength(totalShakes);
    });

    it(`returns to all ${totalItems} items after \`all\` is pressed again.`, () => {
        expect(wrapper.find('.food-menu-item')).toHaveLength(totalShakes);
        wrapper.find({children: 'all'}).simulate('click');
        expect(wrapper.find('.food-menu-item')).toHaveLength(totalItems);
    });
});

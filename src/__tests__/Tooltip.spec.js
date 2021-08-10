import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tooltip from '../components/Tooltip/';

describe('Tooltip tests', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<Tooltip text={"hi"}>Read this</Tooltip>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('displays text below children when mouse hovers over children', () => {
        const wrapper = shallow(<Tooltip text={"More info!!"}>Hover for more info</Tooltip>)
        expect(wrapper.find('.tooltip-main-show')).toHaveLength(0);
        wrapper.find('span').simulate('mouseover');
        expect(wrapper.find('.tooltip-main-show')).toHaveLength(1);
    });
});

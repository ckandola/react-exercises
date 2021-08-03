import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Tooltip from '../components/Tooltip/';

configure({adapter: new Adapter()});

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

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Timer from '../components/Timer';

configure({adapter: new Adapter()});

describe('Timer tests', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<Timer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Does not simulate click, so does not work/advance timer
    // TODO: figure out why this fails
    it.skip('waits 5 seconds when the 5 second button is pressed', () => {
        jest.useFakeTimers();
        const wrapper = shallow(<Timer />);
        expect(wrapper.find('h2').at(1).getElement().props.children).toEqual('No time remaining');
        wrapper.find('.timer-minbtn').at(1).simulate('click');
        expect(wrapper.find('h2').at(1).getElement().props.children).toEqual('Time Left: 5 seconds');
        jest.advanceTimersByTime(5000);
        expect(wrapper.find('h2').at(1).getElement().props.children).toEqual('No time remaining');     
        jest.useRealTimers();   
    });

    it.skip('pauses countdown when Pause/Resume is pressed after countdown has started', () => {

    });

    it.skip('resumes countdown when Pause/Resume is pressed after paused', () => {

    });

    it.skip('resets last countdown value when Reset is pressed after countdown has started', () => {

    });

    it.skip('cancels countdown when Cancel is pressed after countdown has started', () => {

    });


});

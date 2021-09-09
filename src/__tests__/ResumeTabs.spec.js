import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResumeTabs from '../components/ResumeTabs';

const wrapper = shallow(<ResumeTabs />);

describe('ResumeTabs tests', () => {
    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('displays a different job description when a different title is clicked', () => {
        const jobTitle = wrapper.find('.tab-active-btn').getElement().props.children;
        wrapper.find('.tab-job-btn').at(3).simulate('click');
        const newJob = wrapper.find('.tab-active-btn').getElement().props.children;
        expect(jobTitle).not.toBe(newJob);
    });
    
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Reviews from '../components/Reviews';

describe('Reviews Tests', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<Reviews />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('advances to next review (anna johnson) when right arrow is clicked (from susan smith)', () => {
        const wrapper = shallow(<Reviews />);
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('susan smith');
        wrapper.find('.reviews-next-btn').simulate('click');
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('anna johnson');
    });
    
    it('advances to previous review when left arrow is clicked', () => {
        const wrapper = shallow(<Reviews />);
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('susan smith');
        wrapper.find('.reviews-next-btn').simulate('click');
        wrapper.find('.reviews-next-btn').simulate('click');
        wrapper.find('.reviews-prev-btn').simulate('click');
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('anna johnson');
    });
    
    it('advances to first review when right arrow is clicked after reaching end', () => {
        const wrapper = shallow(<Reviews />);
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('susan smith');
        wrapper.find('.reviews-next-btn').simulate('click');    // 2
        wrapper.find('.reviews-next-btn').simulate('click');    // 3
        wrapper.find('.reviews-next-btn').simulate('click');    // 4
        wrapper.find('.reviews-next-btn').simulate('click');    // 1
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('susan smith');
    });
    
    it('advances to last review (bill anderson) when left arrow is clicked at the beginning', () => {
        const wrapper = shallow(<Reviews />);
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('susan smith');
        wrapper.find('.reviews-prev-btn').simulate('click');
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('bill anderson');
    });
    
    it('changes to a different review when Random Review is clicked', () => {
        const wrapper = shallow(<Reviews />);
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).toEqual('susan smith');
        wrapper.find('.reviews-random-btn').simulate('click');
        expect(wrapper.find('.reviews-person-img').getElement().props.alt).not.toEqual('susan smith');
    });
});

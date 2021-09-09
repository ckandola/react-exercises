import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Carousel from '../components/Carousel';

describe('Carousel tests', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<Carousel />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('changes the carousel contents every 5 seconds', () => {
        jest.useFakeTimers();
        const wrapper = shallow(<Carousel />);
        const firstPerson = wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt;
        jest.advanceTimersByTime(5000);
        const nextPerson = wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt;
        expect(firstPerson).not.toBe(nextPerson);
        jest.useRealTimers();
    });

    it('advances to next review when right arrow is clicked', () => {
        const wrapper = shallow(<Carousel />);
        expect(wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt).toBe("maria ferguson");
        wrapper.find('.carousel-next').simulate('click');   // 2
        expect(wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt).toBe('john doe');
        wrapper.find('.carousel-next').simulate('click');   // 3
        wrapper.find('.carousel-next').simulate('click');   // 4
        wrapper.find('.carousel-next').simulate('click');   // 1
        expect(wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt).toBe('maria ferguson');
    });

    it('returns to previous review when left arrow is clicked', () => {
        const wrapper = shallow(<Carousel />);
        expect(wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt).toBe("maria ferguson");
        wrapper.find('.carousel-prev').simulate('click');
        expect(wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt).toBe('susan andersen');
        wrapper.find('.carousel-prev').simulate('click');
        expect(wrapper.find('.carousel-article-activeSlide').getElement().props.children[0].props.alt).toBe('peter smith');
    });
});

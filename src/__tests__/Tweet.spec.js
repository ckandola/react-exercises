import React from 'react';
import TweetContainer from '../components/Tweet';
import Tweet from '../components/Tweet/Tweet';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('Tweet tests', () => {
    describe('TweetContainer tests', () => {
        const wrapper = shallow(<TweetContainer />);
        
        it('matches the snapshot for TweetContainer', () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        
        it(`doesn't create a new Tweet when message is empty`, () => {
            wrapper.find('form').simulate('submit', { preventDefault () {} });
            expect(wrapper.find('Tweet')).toHaveLength(3);
        });
        
        it(`doesn't allow more than 280 characters to be added`, () => {
            let str = '';
            for(let i = 1; i <= 281; i++) {
                str += '1';
                wrapper.find('textarea').simulate('change', {target: {value: str}});
            }
            expect(wrapper.find('textarea').getElement().props.value).toHaveLength(280);
        });
        
        it(`creates a new Tweet when a message is written and the button is clicked`, () => {
            const textArea = wrapper.find('textarea');
            textArea.simulate('change', {target: {value: 'hello world'}});
            wrapper.find('form').simulate('submit', { preventDefault () {} });
            expect(wrapper.find('Tweet')).toHaveLength(4);
        });

    });

    it('matches the snapshot for Tweet', () => {
        const wrapper = shallow(
            <Tweet 
                username="captain_melonhead"
                name="JONNY 2X4"
                date={new Date('Nov 8 2009').toString()}
                message={"I'm going to miss Captain Melonhead. Plank says he'll miss Splinter the Wonderwood."}
            />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

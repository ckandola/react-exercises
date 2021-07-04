import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BirthdayReminder from '../components/BirthdayReminder';
import BirthdayList from '../components/BirthdayReminder/BirthdayList';

configure({adapter: new Adapter()});

describe('BirthdayReminder tests', () => {
    
    it('contains the correct initial list of birthdays', () => {
        const component = renderer.create(<BirthdayReminder date={new Date('June 28 2021')} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('clears the list of birthdays when clicked', () => {
        const wrapper = shallow(<BirthdayReminder date={new Date('June 28 2021')} />);
        const clearButton = wrapper.find('#birthday-list-clear');
        clearButton.simulate('click');
        expect(wrapper.find(BirthdayList).getElement().props.people).toHaveLength(0);
    });
    
});

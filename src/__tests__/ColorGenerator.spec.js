import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ColorGenerator from '../components/ColorGenerator';

describe('ColorGenerator tests', () => {
    
    Object.assign(navigator, {
        clipboard: {
            writeText: jest.fn().mockImplementation(() => Promise.resolve()),
        },
    });

    const wrapper = mount(<ColorGenerator />);

    test('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('changes contents of input to `#0000ff` when blue color button is clicked', () => {
        wrapper.find({style: {backgroundColor: '#0000ff'}}).simulate('click');
        expect(wrapper.find('.cgen-input').at(0).getElement().props.value).toBe('#0000ff');
    });

    test('when second input is left at `10`, clicking Submit provides 21 results', () => {
        expect(wrapper.find('.cgen-input').at(1).getElement().props.placeholder).toBe(10);
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(wrapper.find('SingleColor')).toHaveLength(21);
    });

    test('setting the numeric input to a negative number results in 201 results', () => {
        wrapper.find('.cgen-input').at(1).simulate('change', {target: {value: -1}});
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(wrapper.find('SingleColor')).toHaveLength(201);
        wrapper.find('.cgen-input').at(1).simulate('change', {target: {value: 10}});
        wrapper.find('form').simulate('submit', { preventDefault () {} });
    });
    
    test('clicking a SingleColor triggers a message, `Copied to clipboard`', () => {
        wrapper.find('SingleColor').at(5).simulate('click');
        expect(wrapper.find('.cgen-alert').getElement().props.children).toBe("Copied to clipboard");
    });
});

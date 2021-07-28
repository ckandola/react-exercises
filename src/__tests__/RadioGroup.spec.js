import React from 'react';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import RadioGroup from '../components/Radio/RadioGroup';

configure({adapter: new Adapter()});

describe('RadioGroup tests', () => {

    const mockFn = jest.fn();

    const wrapper = shallow(
        <RadioGroup labels={["Credit card", "Paypal", "Check"]} 
            onSubmit={mockFn}
            submitDesc={"test this out."}
        />
    );
    
    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('calls the mock function when Submit is hit', () => {
        wrapper.find(".radio-form").simulate('submit', { preventDefault () {} });
        expect(mockFn.mock.calls).toHaveLength(1);
    });
});

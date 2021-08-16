import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GroceryAlert from '../components/GroceryBud/GroceryAlert';
import GroceryList from '../components/GroceryBud/GroceryList';
import GroceryBud from '../components/GroceryBud';

describe('GroceryBud tests', () => {
    
    const wrapper = mount(<GroceryBud />);

    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('adds `Meat` to list when typed into input and Submit is clicked', () => {
        wrapper.find('input').simulate('change', {target: {value: 'Meat'}});
        wrapper.find('form').simulate('submit', {preventDefault () {} });
        expect(wrapper.find('.gList-title').getElement().props.children).toBe('Meat');
    });

    it('changes `Meat` to `Yogurt` when its edit button is clicked, `Yogurt` is typed into the input, and Submit is clicked', () => {
        wrapper.find('.gList-edit-btn').simulate('click');
        wrapper.find('input').simulate('change', {target: {value: 'Yogurt'}});
        wrapper.find('form').simulate('submit', {preventDefault () {}});
        expect(wrapper.find('.gList-title').getElement().props.children).toBe('Yogurt');
    });

    it('removes `Yogurt` from the list when its remove button is clicked', () => {
        wrapper.find('.gList-delete-btn').simulate('click');
        expect(wrapper.find('gList-title')).toHaveLength(0);
    });

    it('clears list of all items when Clear Items button is clicked', () => {
        wrapper.find('input').simulate('change', {target: {value: 'A'}});
        wrapper.find('form').simulate('submit', {preventDefault () {}});
        wrapper.find('input').simulate('change', {target: {value: 'B'}});
        wrapper.find('form').simulate('submit', {preventDefault () {}});
        expect(wrapper.find('.gList-title')).toHaveLength(2);
        wrapper.find('.gList-clear-btn').simulate('click');
        expect(wrapper.find('.gList-title')).toHaveLength(0);
    });

    describe('GroceryAlert tests', () => {
        
        const mockAlert = jest.fn();

        it('matches the snapshot', () => {
            const wrapper = shallow(<GroceryAlert type={"success"} msg={"Tested successfully"} removeAlert={mockAlert} />);
            expect(toJson(wrapper)).toMatchSnapshot();
            wrapper.unmount();
        });
        
        it('calls `removeAlert` function after 3 seconds', () => {
            jest.useFakeTimers();
            const wrapper = shallow(<GroceryAlert type={"success"} msg={"Tested successfully again"} removeAlert={mockAlert} />);
            expect(mockAlert.mock.calls.length).toBe(0)
            jest.advanceTimersByTime(3000);
            expect(mockAlert.mock.calls.length).toBe(1);
            jest.useRealTimers();
            wrapper.unmount();
        });

        it('renders class for alerts depending on the `type` property', () => {
            const wrapperSuccess = shallow(<GroceryAlert type={"success"} msg={"This is a success"} removeAlert={mockAlert} />);
            const wrapperDanger = shallow(<GroceryAlert type={"danger"} msg={"This is dangerous"} removeAlert={mockAlert} />);
            expect(wrapperSuccess.find('.gList-alert-success').length).toBe(1);
            expect(wrapperDanger.find('.gList-alert-danger').length).toBe(1);
        });
    });

    describe('GroceryList tests', () => {

        const mockList = [
            {id: 0, title: "test"},
        ];
        
        const mockRemove = jest.fn();
        const mockEdit = jest.fn();
        
        const wrapper = shallow(<GroceryList items={mockList} removeItem={mockRemove} editItem={mockEdit} />);

        it('matches the snapshot', () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        
        it('calls `editItem` when edit button is pressed', () => {
            wrapper.find('.gList-edit-btn').simulate('click');
            expect(mockEdit.mock.calls.length).toBe(1);
        });
        
        it('calls `removeItem` when remove button is pressed', () => {
            wrapper.find('.gList-delete-btn').simulate('click');
            expect(mockRemove.mock.calls.length).toBe(1);
        });
    });

});

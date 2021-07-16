import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ToDoList from '../components/ToDoList';
import ToDo from '../components/ToDoList/ToDo';

configure({adapter: new Adapter()});

describe('ToDoList tests', () => {
    const wrapper = shallow(<ToDoList />);
    it('ToDoList matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('calls onDelete when Delete is pressed', () => {
        const onDeleteSpy = jest.fn();
        const todoWrapper = shallow(<ToDo task="test a mock function" onDelete={onDeleteSpy} onEdit={() => {}} />);
        const deleteBtn = todoWrapper.find('.todo-submit[value="Delete"]');
        deleteBtn.simulate('click');
        expect(onDeleteSpy).toHaveBeenCalled();
    });

    it('calls onEdit when Edit is pressed and Save Changes is pressed', () => {
        const onEditSpy = jest.fn();
        const todoWrapper = shallow(<ToDo task="Edit something" onDelete={() => {}} onEdit={onEditSpy} />);
        todoWrapper.find('[value="Edit"]').simulate('click');
        todoWrapper.find('.todo-entry').simulate('change', {target: {value: "Edit everything"}});
        todoWrapper.find('[value="Save Changes"]').simulate('click');
        expect(onEditSpy.mock.calls).toHaveLength(1);
    });

    it('adds a new ToDo item when Add New task is clicked', () => {
        const mWrapper = mount(<ToDoList />);
        mWrapper.find('.todo-entry').simulate('change', {target: {value: 'New Task'}});
        mWrapper.find('input[value="Add New Task"]').simulate('click');
        console.log(mWrapper.find('ToDo').getElements())
        expect(mWrapper.find('ToDo')).toHaveLength(7);
    });

    it('crosses off tasks when checkbox is clicked', () => {

    });
});

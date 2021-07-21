import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ToDoList from '../components/ToDoList';
import ToDo from '../components/ToDoList/ToDo';

const toDoListLength = 6;
const feedThePetsIndex = 4;

configure({adapter: new Adapter()});

// keep mounted component for tests that won't change anything
const mountWrapper = mount(<ToDoList />);

describe('ToDoList tests', () => {
    
    it('ToDoList matches the snapshot', () => {
        const wrapper = shallow(<ToDoList />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('calls onDelete when Delete is pressed', () => {
        const onDeleteSpy = jest.fn();
        const todoWrapper = shallow(<ToDo task="test a mock function" onDelete={onDeleteSpy} onEdit={() => {}} isEditingAnother={() => false} changeEditing={() => {}}/>);
        const deleteBtn = todoWrapper.find('.todo-submit[value="Delete"]');
        deleteBtn.simulate('click');
        expect(onDeleteSpy).toHaveBeenCalled();
    });

    it('calls onEdit when Edit is pressed and Save Changes is pressed', () => {
        const onEditSpy = jest.fn();
        const todoWrapper = shallow(<ToDo task="Edit something" onDelete={() => {}} onEdit={onEditSpy} isEditingAnother={() => false} changeEditing={() => {}}/>);
        todoWrapper.find('[value="Edit"]').simulate('click');
        todoWrapper.find('.todo-entry').simulate('change', {target: {value: "Edit everything"}});
        todoWrapper.find('[value="Save Changes"]').simulate('click');
        expect(onEditSpy.mock.calls).toHaveLength(1);
    });

    
    it('crosses off tasks when checkbox is clicked by changing class to "todo-finished"', () => {
        const todoWrapper = shallow(<ToDo task="test checkbox" onDelete={() => {}} onEdit={() => {}} isEditingAnother={() => false} changeEditing={() => {}}/>);
        todoWrapper.find('input[type="checkbox"]').simulate('click');
        expect(todoWrapper.find('.todo-finished')).toHaveLength(1);
    });
    
    it('un-crosses tasks when checkbox is clicked a second time by removing class', () => {
        const todoWrapper = shallow(<ToDo task="test checkbox" onDelete={() => {}} onEdit={() => {}} isEditingAnother={() => false} changeEditing={() => {}}/>);
        todoWrapper.find('input[type="checkbox"]').simulate('click');
        todoWrapper.find('input[type="checkbox"]').simulate('click');
        expect(todoWrapper.find('.todo-finished')).toHaveLength(0);
    });
    
    it('adds a new ToDo item when Add New task is clicked', () => {
        const mWrapper = mount(<ToDoList />);
        mWrapper.find('.todo-entry').simulate('change', {target: {value: 'New Task'}});
        mWrapper.find('input[value="Add New Task"]').simulate('click');
        expect(mWrapper.find('ToDo')).toHaveLength(toDoListLength + 1);
    });
    it('does not allow blank space values for task', () => {
        let blankSpaceEntries = [' ', '  ', '\n', ''];
        blankSpaceEntries.forEach(blankSpaceEntry => {
            mountWrapper.find('.todo-entry').simulate('change', {target: {value: blankSpaceEntry}});
            mountWrapper.find('input[value="Add New Task"]').simulate('click');
            expect(mountWrapper.find(`ToDo[task="${blankSpaceEntry}"]`)).toHaveLength(0);
        });
        expect(mountWrapper.find('ToDo')).toHaveLength(toDoListLength);
    });

    it('edits appropriately - changes "feed the pets" to "feed the plants"', () => {
        const mWrapper = mount(<ToDoList />);
        mWrapper.find('.todo-submit').at(feedThePetsIndex * 2).simulate('click');
        mWrapper.find('.todo-entry').at(0).simulate('change', {target: {value: "feed the plants"}});
        mWrapper.find('.todo-submit').at(feedThePetsIndex * 2).simulate('click');
        expect(mWrapper.find('[task="feed the pets"]')).toHaveLength(0);
        expect(mWrapper.find('[task="feed the plants"]')).toHaveLength(1);
    });

    it('does not allow duplicate task entries', () => {
        mountWrapper.find('.todo-entry').simulate('change', {target: {value: 'eat'}});
        mountWrapper.find('input[value="Add New Task"]').simulate('click');
        expect(mountWrapper.find('ToDo')).toHaveLength(toDoListLength);
        mountWrapper.find('.todo-entry').simulate('change', {target: {value: ''}});
    });

    it('does not allow two items to be edited at once', () => {
        mountWrapper.find('.todo-submit').at(0).simulate('click');
        expect(mountWrapper.find('[value="Save Changes"]')).toHaveLength(1);
        mountWrapper.find('.todo-submit').at(2).simulate('click');
        expect(mountWrapper.find('[value="Save Changes"]')).toHaveLength(1);
        mountWrapper.find('.todo-submit').at(0).simulate('click');
    });

    it('Reverts changes when Undo is pressed', () => {
        mountWrapper.find('.todo-submit').at(0).simulate('click');
        mountWrapper.find('.todo-entry').at(0).simulate('change', {target: {value: 'alphabetize'}});
        mountWrapper.find('[value="Undo"]').simulate('click');
        expect(mountWrapper.find('[task="alphabetize"]')).toHaveLength(0);
    });
});

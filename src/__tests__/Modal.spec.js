import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../components/Modal/Home';
import Modal from '../components/Modal';
import * as AppProvider from '../context';

describe('Modal tests', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(
            <div>
                <Home />
                <Modal>test1</Modal>
            </div>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('opens the modal when Show Modal is clicked', () => {
        const open = jest.fn();
        const contextValues = { isModalOpen: false, closeModal: () => {}, openModal: open };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(
            <div>
                <Home />
                <Modal>test2</Modal>
            </div>
        );
        wrapper.find('.modal-btn').simulate('click');
        expect(open.mock.calls.length).toBe(1);
    });

    it('closes the modal when the red X is clicked', () => {
        const close = jest.fn();
        const contextValues = { isModalOpen: true, closeModal: close, openModal: () => {} };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(
            <div>
                <Home />
                <Modal>test3</Modal>
            </div>
        );
        expect(wrapper.find('.show-modal')).toHaveLength(1);
        wrapper.find('.close-modal-btn').simulate('click');
        expect(close.mock.calls.length).toBe(1);
    });
});

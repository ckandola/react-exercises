import React, { useRef } from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import StripeMenu from '../components/StripeMenu';
import * as AppProvider from '../context';

//opensidebar, opensubmenu, closesubmenu, issubmenuopen, issidebaropen, closesidebar, location, page

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mUseRef = jest.fn();
    return {
        ...originReact,
        useRef: mUseRef
    }
});

describe('StripeMenu tests', () => {

    it('matches the snapshot', () => {
        const placeholderFn = () => {};
        const contextValues = {
            isSidebarOpen: false, openSidebar: placeholderFn, closeSidebar: placeholderFn,
            isSubmenuOpen: false, openSubmenu: placeholderFn, closeSubmenu: placeholderFn,
            location: {}, page: {page: '', links: []}
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const mRef = { current: {style: {left: '749px', top: '365px'}}};
        useRef.mockReturnValueOnce(mRef);
        const wrapper = mount(<StripeMenu />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('opens sidebar when hamburger button is clicked', () => {
        const placeholderFn = () => {};
        const mockFn = jest.fn();
        const contextValues = {
            isSidebarOpen: false, openSidebar: mockFn, closeSidebar: placeholderFn,
            isSubmenuOpen: false, openSubmenu: placeholderFn, closeSubmenu: placeholderFn,
            location: {}, page: {page: '', links: []}
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const mRef = { current: {style: {left: '749px', top: '365px'}}};
        useRef.mockReturnValueOnce(mRef);
        const wrapper = mount(<StripeMenu />);
        wrapper.find('.smenu-toggle-btn').simulate('click');
        expect(mockFn.mock.calls.length).toBe(1);
    });
    
    it('closes the opened sidebar when X button is clicked', () => {
        const placeholderFn = () => {};
        const mockFn = jest.fn();
        const contextValues = {
            isSidebarOpen: true, openSidebar: placeholderFn, closeSidebar: mockFn,
            isSubmenuOpen: false, openSubmenu: placeholderFn, closeSubmenu: placeholderFn,
            location: {}, page: {page: '', links: []}
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const mRef = { current: {style: {left: '749px', top: '365px'}}};
        useRef.mockReturnValueOnce(mRef);
        const wrapper = mount(<StripeMenu />);
        wrapper.find('.smenu-close-btn').simulate('click');
        expect(mockFn.mock.calls.length).toBe(1);
    });


    it('opens `products` submenu when mouse hovers over the first navbar button', () => {
        const placeholderFn = () => {};
        const mockFn = jest.fn();
        const contextValues = {
            isSidebarOpen: false, openSidebar: placeholderFn, closeSidebar:placeholderFn,
            isSubmenuOpen: false, openSubmenu: mockFn, closeSubmenu: placeholderFn,
            location: {}, page: {page: '', links: []}
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const mRef = { current: {style: {left: '749px', top: '365px'}}};
        useRef.mockReturnValueOnce(mRef);
        const wrapper = mount(<StripeMenu />);
        wrapper.find('.smenu-link-btn').at(0).simulate('mouseover');
        expect(mockFn.mock.calls.length).toBe(1);
    });

    it('closes the opened submenu when the mouse hovers over something else', () => {
        const placeholderFn = () => {};
        const mockFn = jest.fn();
        const contextValues = {
            isSidebarOpen: false, openSidebar: placeholderFn, closeSidebar:placeholderFn,
            isSubmenuOpen: true, openSubmenu: placeholderFn, closeSubmenu: mockFn,
            location: {}, page: {page: '', links: []}
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const mRef = { current: {style: {left: '749px', top: '365px'}}};
        useRef.mockReturnValueOnce(mRef);
        const wrapper = mount(<StripeMenu />);
        wrapper.find('.hero').simulate('mouseover');
        expect(mockFn.mock.calls.length).toBe(1);
    });
});

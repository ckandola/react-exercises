import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cart from '../components/Cart';
import * as AppProvider from '../context';
import reducer from '../components/Cart/reducer';

describe('Cart tests', () => {
    it('matches the snapshot', () => {
        const placeholderFn = () => {};
        const contextValues = {
            cartLoading: false, cartAmount: 0, cart: [], cartTotal: 0,
            clearCart: placeholderFn, removeCartItem: placeholderFn, 
            increaseCartAmt: placeholderFn, decreaseCartAmt: placeholderFn, 
            fetchCartData: placeholderFn
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(<Cart />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it(`increments a cart item's quantity when its up arrow is clicked`, () => {
        const placeholderFn = () => {};
        const mockIncr = jest.fn();
        const contextValues = {
            cartLoading: false, cartAmount: 3, 
            cart: [{ id: 0, title: 'test2', price: 0.50, img: './temp.img', amount: 3}], 
            cartTotal: 1.50,
            clearCart: placeholderFn, removeCartItem: placeholderFn,
            increaseCartAmt: mockIncr, decreaseCartAmt: placeholderFn,
            fetchCartData: placeholderFn
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(<Cart />);
        wrapper.find('.cart-amount-btn').at(0).simulate('click');
        expect(mockIncr.mock.calls.length).toBe(1);
    });

    it(`decrements a cart item's quantity when its down arrow is clicked`, () => {
        const placeholderFn = () => {};
        const mockDecr = jest.fn();
        const contextValues = {
            cartLoading: false, cartAmount: 4, 
            cart: [{ id: 0, title: 'test3', price: 0.50, img: './temp.img', amount: 4}], 
            cartTotal: 2.00,
            clearCart: placeholderFn, removeCartItem: placeholderFn,
            increaseCartAmt: placeholderFn, decreaseCartAmt: mockDecr,
            fetchCartData: placeholderFn
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(<Cart />);
        wrapper.find('.cart-amount-btn').at(1).simulate('click');
        expect(mockDecr.mock.calls.length).toBe(1);
    });

    it(`removes an item from the cart entirely when its REMOVE button is clicked`, () => {
        const placeholderFn = () => {};
        const mockRem = jest.fn();
        const contextValues = {
            cartLoading: false, cartAmount: 4, 
            cart: [{ id: 0, title: 'test3', price: 0.50, img: './temp.img', amount: 4}], 
            cartTotal: 2.00,
            clearCart: placeholderFn, removeCartItem: mockRem,
            increaseCartAmt: placeholderFn, decreaseCartAmt: placeholderFn,
            fetchCartData: placeholderFn
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(<Cart />);
        wrapper.find('.cart-remove-btn').simulate('click');
        expect(mockRem.mock.calls.length).toBe(1);
    });

    it(`clears the cart when the CLEAR CART button is clicked`, () => {
        const placeholderFn = () => {};
        const mockClear = jest.fn();
        const contextValues = {
            cartLoading: false, cartAmount: 4, 
            cart: [{ id: 0, title: 'test3', price: 0.50, img: './temp.img', amount: 4}], 
            cartTotal: 2.00,
            clearCart: mockClear, removeCartItem: placeholderFn,
            increaseCartAmt: placeholderFn, decreaseCartAmt: placeholderFn,
            fetchCartData: placeholderFn
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(<Cart />);
        wrapper.find('.cart-clear-btn').simulate('click');
        expect(mockClear.mock.calls.length).toBe(1);
    });

    describe('reducer tests', () => {
        it('clears the cart when `action.type` is CLEAR_CART', () => {
            const state = {
                cartLoading: false,
                cart: [1, 2, 3, 4],
                cartTotal: 50,
                cartAmount: 4
            };
            expect(reducer(state, {type: 'CLEAR_CART'})).toEqual({cartLoading: false, cart: [], cartTotal: 50, cartAmount: 4});
        });

        it('removes the second item from the cart when `action.type` is REMOVE_ITEM and `action.payload` matches the id', () => {
            const state = {
                cartLoading: false,
                cart: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
                cartTotal: 50,
                cartAmount: 4
            };
            expect(reducer(state, {type: 'REMOVE_ITEM', payload: 2})).toEqual({
                cartLoading: false, cart: [{id: 1}, {id: 3}, {id: 4}], cartTotal: 50, cartAmount: 4
            });
        });

        it('increments quantity of an item by 1 when `action.type` is INCREASE and `action.payload` matches the id', () => {
            const state = {
                cartLoading: false,
                cart: [{id: 1, amount: 1}, {id: 2, amount: 7}, {id: 3, amount: 5}],
                cartTotal: 26,
                cartAmount: 13
            };
            expect(reducer(state, {type: 'INCREASE', payload: 3})).toEqual({
                cartLoading: false,
                cart: [{id: 1, amount: 1}, {id: 2, amount: 7}, {id: 3, amount: 6}],
                cartTotal: 26,
                cartAmount: 13
            });
        });

        it('decrements quantity of an item by 1 when `action.type` is DECREASE and `action.payload` matches the id', () => {
            const state = {
                cartLoading: false,
                cart: [{id: 1, amount: 1}, {id: 2, amount: 7}, {id: 3, amount: 6}],
                cartTotal: 26,
                cartAmount: 13
            };
            expect(reducer(state, {type: 'DECREASE', payload: 2})).toEqual({
                cartLoading: false,
                cart: [{id: 1, amount: 1}, {id: 2, amount: 6}, {id: 3, amount: 6}],
                cartTotal: 26,
                cartAmount: 13
            });
        });

        it('removes the item from the cart entirely when `action.type` is DECREASE and its quantity is 1', () => {
            const state = {
                cartLoading: false,
                cart: [{id: 1, amount: 1}, {id: 2, amount: 6}, {id: 3, amount: 6}],
                cartTotal: 26,
                cartAmount: 13
            };
            expect(reducer(state, {type: 'DECREASE', payload: 1})).toEqual({
                cartLoading: false,
                cart: [{id: 2, amount: 6}, {id: 3, amount: 6}],
                cartTotal: 26,
                cartAmount: 13
            });
        });

        it('returns accurate total and quantity when `action.type` is GET_TOTALS', () => {
            const state = {
                cartLoading: false,
                cart: [{id: 2, amount: 6, price: 1.55}, {id: 3, amount: 6, price: 7.00}],
                cartTotal: 26,
                cartAmount: 13
            };
            expect(reducer(state, {type: 'GET_TOTALS'})).toEqual({
                cartLoading: false,
                cart: [{id: 2, amount: 6, price: 1.55}, {id: 3, amount: 6, price: 7.00}],
                cartTotal: 51.30,
                cartAmount: 12
            });
        });

        it('sets `cartLoading` to `true` when `action.type` is LOADING', () => {
            const state = {
                cartLoading: false,
                cart: [{id: 2, amount: 6, price: 1.55}, {id: 3, amount: 6, price: 7.00}],
                cartTotal: 51.30,
                cartAmount: 12
            };
            expect(reducer(state, {type: 'LOADING'})).toEqual({
                cartLoading: true,
                cart: [{id: 2, amount: 6, price: 1.55}, {id: 3, amount: 6, price: 7.00}],
                cartTotal: 51.30,
                cartAmount: 12
            });
        });

        it('returns a new cart, not loading, if a new cart is provided as `action.payload` when `action.type` is DISPLAY_ITEMS', () => {
            const state = {
                cartLoading: true,
                cart: [{id: 2, amount: 6, price: 1.55}, {id: 3, amount: 6, price: 7.00}],
                cartTotal: 51.30,
                cartAmount: 12
            };
            const newCart = [{id: 1, amount: 2, price: 4.40}, {id: 19, amount: 2, price: 7.75}];
            expect(reducer(state, {type: 'DISPLAY_ITEMS', payload: newCart})).toEqual({
                cartLoading: false,
                cart: [{id: 1, amount: 2, price: 4.40}, {id: 19, amount: 2, price: 7.75}],
                cartTotal: 51.30,
                cartAmount: 12
            });
        });
    });

});

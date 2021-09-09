import React, { useRef } from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as AppProvider from '../context';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

import CocktailMain from '../components/Cocktail';
import Loading from '../components/Cocktail/Loading';
import NavBar from '../components/Cocktail/NavBar';
import SearchForm from '../components/Cocktail/SearchForm';
import CocktailList from '../components/Cocktail/CocktailList';

import Home from '../components/Cocktail/pages/Home';
import About from '../components/Cocktail/pages/About';
import Error from '../components/Cocktail/pages/Error';
import SingleCocktail from '../components/Cocktail/pages/SingleCocktail';

import {waitFor} from '@testing-library/react';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mUseRef = jest.fn();
    return {
        ...originReact,
        useRef: mUseRef
    }
});

describe('Cocktail tests', () => {
    
    const placeholderFn = () => {};
    describe('snapshots match', () => {

        test('CocktailMain matches the snapshot', () => {
            const contextValues = {
                cocktailLoading: false, cocktails: [], setCocktailSearchTerm: placeholderFn
            };
            jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
            const wrapper = mount(<CocktailMain />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        test('Loading matches the snapshot', () => {
            const wrapper = shallow(<Loading />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        test('NavBar matches the snapshot', () => {
            const wrapper = shallow(<NavBar />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        
        test('SearchForm matches the snapshot', () => {
            const contextValues = {
                cocktailLoading: false, cocktails: [], setCocktailSearchTerm: placeholderFn
            };
            const mRef = {current: {}};
            useRef.mockReturnValueOnce(mRef);
            jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
            const wrapper = mount(<SearchForm />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        test('CocktailList and Cocktail match the snapshot', () => {
            const contextValues = {
                cocktailLoading: false, 
                cocktails: [{img: 'img', name: 'name', id: '0', isAlcoholic: 'Non-alcoholic', glass: 'glass'}],
                setCocktailSearchTerm: placeholderFn
            };
            jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
            const wrapper = mount(
                <BrowserRouter>
                    <CocktailList />
                </BrowserRouter>
            );
            expect(toJson(wrapper)).toMatchSnapshot();
            expect(wrapper.find('Cocktail')).toHaveLength(1);
        });

        test('Home and SingleCocktail components match the snapshot', () => {
            const contextValues = {
                cocktailLoading: false,
                cocktails: [{img: 'img', name: 'name', id: '0', isAlcoholic: 'Non-alcoholic', glass: 'glass'}],
                setCocktailSearchTerm: placeholderFn
            };
            jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
            const mRef = {current: {}};
            useRef.mockReturnValueOnce(mRef);
            const wrapper = mount(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            );
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        test('About page matches the snapshot', () => {
            const wrapper = shallow(<About />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });
        
        test('Error page matches the snapshot', () => {
            const wrapper = shallow(<Error />);
            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    test('SearchForm calls `setCocktailSearchTerm` when search input is changed', () => {
        const mRef = {current: {}};
        useRef.mockReturnValueOnce(mRef);
        const mockSetTerm = jest.fn();
        const contextValues = {
            cocktailLoading: false,
            cocktails: [{img: 'img', name: 'name', id: '0', isAlcoholic: 'Non-alcoholic', glass: 'glass'}],
            setCocktailSearchTerm: mockSetTerm
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(<SearchForm />);
        expect(mockSetTerm.mock.calls.length).toBe(0);
        wrapper.find('input').simulate('change', {target: {value: 'test'}});
        expect(mockSetTerm.mock.calls.length).toBe(1);
    });

    test('if `cartLoading` is true, then CocktailList renders Loading component', () => {
        const contextValues = {
            cocktailLoading: true, 
            cocktails: [{img: 'img', name: 'name', id: '0', isAlcoholic: 'Non-alcoholic', glass: 'glass'}],
            setCocktailSearchTerm: placeholderFn
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(
            <BrowserRouter>
                <CocktailList />
            </BrowserRouter>
        );
        expect(wrapper.find('Loading')).toHaveLength(1);
    });

    test('if `cocktails` is empty array, CocktailList returns "No cocktails match your search"', () => {
        const contextValues = {
            cocktailLoading: false, 
            cocktails: [],
            setCocktailSearchTerm: placeholderFn
        };
        jest.spyOn(AppProvider, 'useGlobalContext').mockImplementation(() => contextValues);
        const wrapper = mount(
            <BrowserRouter>
                <CocktailList />
            </BrowserRouter>
        );
        expect(wrapper.find('.cocktail-section-title').getElement().props.children).toEqual('No cocktails match your search');
    });

    test('navigation to a non-existent page will lead to the Error page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/cocktail_this-page-does-not-exist']}>
                <CocktailMain />
            </MemoryRouter>
        );
        expect(wrapper.find('SingleCocktail')).toHaveLength(0);
        expect(wrapper.find('Error')).toHaveLength(1);
    });

    /* THIS DOES NOT WORK - EITHER IS STUCK LOADING, OR WILL NOT 'FETCH' ANYTHING
    test('navigation to the id of an existing cocktail will lead to the appropriate SingleCocktail page', async () => {
        // https://jaketrent.com/post/mock-fetch-jest-test

        const fakeData = {
            drinks: [
                {idDrink: '11690', strDrink: 'Mai Tai', strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg', 
                strAlcoholic: 'Alcoholic', strCategory: 'ordinary drink', 
                strGlass: 'Collins glass', 
                strInstructions: "I don't care - it's just a test anyway", 
                strIngredient1: 'light rum'}
            ]
        };

        function setUpFetchStub () {
            console.log('I WAS SUMMONED')
            return new Promise((resolve, reject) => {
                process.nextTick(() =>
                    true ? resolve({json: () => Promise.resolve({fakeData})})
                    : reject({error: 'oops'})
                )
            })
        };
        
        jest.spyOn(console, 'error').mockImplementation(() => {});
        jest.spyOn(global, 'fetch').mockImplementation(setUpFetchStub());
        const wrapper = mount(
            <MemoryRouter initialEntries={['/cocktail/11690']}>
                <SingleCocktail />
            </MemoryRouter>
        );
        expect(wrapper.find('Loading')).toHaveLength(1);
        // console.log(wrapper.debug())
        await waitFor(() => expect(wrapper.find('.cocktail-drink-data')).toHaveLength(6));
        global.fetch.mockClear();
    }); */
});

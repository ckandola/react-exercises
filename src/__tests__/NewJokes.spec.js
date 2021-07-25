import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewJokes from '../components/Jokes/NewJokes';
import {render, cleanup, waitForElement, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('NewJokes tests', () => {
    configure({adapter: new Adapter()});

    it('shares a loading message when operation is pending', () => {
        const wrapper = shallow(<NewJokes />);
        expect(wrapper.text()).toBe("Loading...");
        wrapper.unmount();
    });

    it('should display data from "cat" search term', async () => {
        const {getByTestId} = render(<NewJokes />);
        const listNode = await waitForElement(() => getByTestId('header'));
        expect(listNode).toBeInTheDocument();
        cleanup();
    });

    it('should search for "dog" jokes when prompted', async () => {
        const {getByTestId} = render(<NewJokes />);
        await waitForElement(() => getByTestId('header'));
        userEvent.type(screen.getByTestId('search'), "dog");
        userEvent.click(screen.getByRole('button', {name: /Submit/}));
        expect(screen.getByTestId("search").value).toBe("dog");
        const text = await screen.findByRole('heading', {name: /Dad Jokes for " dog ":/i});
        expect(text).toBeInTheDocument();
        cleanup();
    });

    it('should show no results when given gibberish, like, "jfjkslfkdsf"', async () => {
        const {getByTestId} = render(<NewJokes />);
        await waitForElement(() => getByTestId('header'));
        userEvent.type(screen.getByTestId('search'), "jfjkslfkdsf");
        userEvent.click(screen.getByRole('button', {name: /Submit/}));
        const text = await screen.findByRole('heading', {name: /No results for " jfjkslfkdsf "/i});
        expect(text).toBeInTheDocument();
        cleanup();
    });
});

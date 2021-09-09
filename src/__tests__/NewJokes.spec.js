import React from 'react';
import { shallow } from 'enzyme';
import NewJokes from '../components/Jokes/NewJokes';
import {render, cleanup, waitFor, act, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('NewJokes tests', () => {

    afterEach(() => {
        cleanup();
    });

    it('shares a loading message when operation is pending', () => {
        const wrapper = shallow(<NewJokes />);
        expect(wrapper.text()).toBe("Loading...");
    });

    it('should display data from "cat" search term', async () => {
        const {getByTestId} = render(<NewJokes />);
        await act(async () => {
            await waitFor(() => expect(getByTestId('header')).toBeInTheDocument());
        });
    });

    it('should search for "dog" jokes when prompted', async () => {
        const view = render(<NewJokes />);
        const {getByTestId} = view;
        await act(async () => {
            await waitFor(() => getByTestId('header'));
            userEvent.type(screen.getByTestId('search'), "dog");
            userEvent.click(screen.getByRole('button', {name: /Submit/}));
            expect(screen.getByTestId("search").value).toBe("dog");
            await expect(screen.getByRole('heading', {name: /Dad Jokes for "dog":/i})).toBeDefined();
        });
    });

    // TODO: Find out how to fix error: "Warning: Can't perform a React state update on an unmounted component."
    it.skip('should show no results when given gibberish, like, "jfjkslfkdsf"', async () => {
        const {getByTestId} = render(<NewJokes />);
        await act(async () => {
            await waitFor(() => getByTestId('header'));
            userEvent.type(screen.getByTestId('search'), "jfjkslfkdsf");
            userEvent.click(screen.getByRole('button', {name: /Submit/}));
            await waitFor(() => expect(screen.getByRole('heading', {name: /No results for "jfjkslfkdsf"/i})).toBeDefined());
        });
    });
});

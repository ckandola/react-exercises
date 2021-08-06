import React from 'react';
import {render, waitFor, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Tours from '../components/Tours';

describe('Tours tests', () => {
    it('matches the snapshot', () => {
        const tours = renderer.create(<Tours />);
        const tree = tours.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should display all tour info after loading', async () => {
        const view = render(<Tours />);
        await act(async () => {
            await waitFor(() => expect(view.container.getElementsByClassName('single-tour').length).toBe(5));
        });
    });

    it('removes a Tour from the list when "Not Interested" is clicked', async () => {
        const view = render(<Tours />);
        await act(async () => {
            await waitFor(() => expect(view.container.getElementsByClassName('tour-delete-btn').length).toBe(5));
            userEvent.click(view.container.getElementsByClassName('tour-delete-btn')[0]);
            expect(view.container.getElementsByClassName('tour-delete-btn').length).toBe(4);
        });

    });
});


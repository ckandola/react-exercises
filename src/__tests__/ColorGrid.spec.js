import React from 'react';
import { shallow } from 'enzyme';
import ColorGrid from '../components/ColorGrid';
import ColorSquare from '../components/ColorSquare';

describe('ColorGrid tests', () => {
    it('has 4 columns and 7 rows', () => {
        const gridWrapper = shallow(<ColorGrid />);
        const rows = gridWrapper.find('tr');
        const allSquares = gridWrapper.find('td');
        expect([rows.length, allSquares.length]).toEqual([7, 28]);
    });

    it('changes color of a square when clicked', () => {
        const squareWrapper = shallow(<ColorSquare />);
        const color = squareWrapper.getElement().props.style.backgroundColor;
        squareWrapper.simulate('click');
        const newColor = squareWrapper.getElement().props.style.backgroundColor;
        expect(color).not.toBe(newColor);
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TicTacToe from '../components/TicTacToe';

describe("TicTacToe tests", () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<TicTacToe />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('increments turn, changes player to O, and marks the middle square with an "X" on click', () => {
        const wrapper = shallow(<TicTacToe />);
        wrapper.find("TicTacToeSquare").at(4).simulate('click');
        expect(wrapper.find('.tictactoe-message').getElement().props.children).toEqual(["Turn: ", 1]);
        expect(wrapper.find('.tictactoe-player').getElement().props.children).toEqual(["Player: ", "O"]);
        expect(wrapper.find('TicTacToeSquare').at(4).getElement().props.disabled).toBe('X');
    });

    it('declares X the winner when order is 0, 3, 1, 4, 2', () => {
        const wrapper = shallow(<TicTacToe />);
        wrapper.find("TicTacToeSquare").at(0).simulate('click');
        wrapper.find("TicTacToeSquare").at(3).simulate('click');
        wrapper.find("TicTacToeSquare").at(1).simulate('click');
        wrapper.find("TicTacToeSquare").at(4).simulate('click');
        wrapper.find("TicTacToeSquare").at(2).simulate('click');
        expect(wrapper.find(".tictactoe-gameover-msg")).toHaveLength(1);
        expect(wrapper.find(".tictactoe-gameover-msg").getElement().props.children).toBe("GAME OVER - X WINS");
    });

    it('declares no winner if nobody has won by the 9th turn', () => {
        const wrapper = shallow(<TicTacToe />);
        wrapper.find("TicTacToeSquare").at(0).simulate('click');
        wrapper.find("TicTacToeSquare").at(1).simulate('click');
        wrapper.find("TicTacToeSquare").at(3).simulate('click');
        wrapper.find("TicTacToeSquare").at(4).simulate('click');
        wrapper.find("TicTacToeSquare").at(2).simulate('click');
        wrapper.find("TicTacToeSquare").at(6).simulate('click');
        wrapper.find("TicTacToeSquare").at(5).simulate('click');
        wrapper.find("TicTacToeSquare").at(8).simulate('click');
        wrapper.find("TicTacToeSquare").at(7).simulate('click');
        expect(wrapper.find(".tictactoe-gameover-msg").getElement().props.children).toBe("GAME OVER - NO WINNER");
    });

    it('clears the board when Play Again is clicked (after a game is over)', () => {
        const wrapper = shallow(<TicTacToe />);
        wrapper.find("TicTacToeSquare").at(0).simulate('click');
        wrapper.find("TicTacToeSquare").at(3).simulate('click');
        wrapper.find("TicTacToeSquare").at(1).simulate('click');
        wrapper.find("TicTacToeSquare").at(4).simulate('click');
        wrapper.find("TicTacToeSquare").at(2).simulate('click');
        wrapper.find(".tictactoe-gameover-button").simulate('click');
        expect(wrapper.find(".tictactoe-message").getElement().props.children).toEqual(["Turn: ", 0]);
        expect(wrapper.find('[disabled]')).toHaveLength(0);
    });
});

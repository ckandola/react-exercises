import React, {useState, useEffect, useCallback} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../../assets';
import './HangMan.css';

const HangMan = () => {
    const maxWrong = 6;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    const wordList = ['THE GOLDEN SHILLELAGH', 'THAT MOVIE WAS RICH IN BORING ME TO DEATH', 'JOHNNY BRAVO IS NOT A DOOFUS', 'DONNY OSMOND', 'DONNY WAHLBERG FROM THE NEW KIDS ON THE BLOCK', "MAN I'M PRETTY"];
    const [word, setWord] = useState("");
    const [strikes, setStrikes] = useState(0);
    const [guessedLetters, setGuessedLetters] = useState([]);

    const getRandomWord = useCallback(() => {
        const randomIx = Math.floor(Math.random() * wordList.length);
        if (wordList[randomIx] !== word) {
            setWord(wordList[randomIx]);
            setStrikes(0);
            setGuessedLetters([]);
        } else {
            getRandomWord();
        }
    }, [word, wordList])

    useEffect(() => {
        if (word === "") {
            getRandomWord();
        }
    }, [word, getRandomWord]);

    const keyPressHandler = e => {
        if (/^[a-z]{1}$/i.test(e.key)) {
            addLetter(e.key.toUpperCase());
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler);
        return () => document.removeEventListener('keydown', keyPressHandler);
    });

    const addLetter = letter => {
        const guessCopy = guessedLetters.concat(letter);
        setGuessedLetters(guessCopy);
        if (word.indexOf(letter) === -1) {
            setStrikes(c => c + 1);
        }
    }

    const currentWord = () => {
        return word.split('').map(letter => !/[a-z]/i.test(letter) || guessedLetters.indexOf(letter) > -1 ? letter : '-');
    }

    const currentGuess = currentWord();
    const gameOver = strikes === maxWrong || currentGuess.join('') === word;
    return (
        <div className="game-main">
            {gameOver && (<div className="center gameStatus">{strikes === maxWrong ? 'GAME OVER' : 'YOU WIN!'}</div>)}
            <div className="center">{images[strikes]}</div>
            <div className="guessWord">{currentGuess}</div>
            {letters.map(letter => {
                return <Button className="button" variant="primary" size="sm" margin="2" key={letter} onClick={() => addLetter(letter)} disabled={guessedLetters.indexOf(letter) > -1 || gameOver}>{letter}</Button>
            })}
            {gameOver && (<div className="center"><button onClick={getRandomWord}>PLAY AGAIN</button></div>)}
        </div>
    )
}

export default HangMan;
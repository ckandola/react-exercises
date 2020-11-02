import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jeopardy.css';
import {gameCategories as categories} from './categories';

// first, randomly pick 6 categories
// -- each category will have 5 questions and answers.
// make grid of 30 total buttons, each being a column of one category's 5 questions
// OR make arrays of all 1st, 2nd,...5th questions and display by rows?

const Jeopardy = () => {
    console.log(categories);
    // this is from categories.js
    const answers = 
    [
        {price: 100, 'c1q': "What is 18?", 'c2q': 'c2q', 'c3q': 'c3q', 'c4q': 'c4q', 'c5q': 'c5q', 'c6q': 'c6q', 'c1a': "It's when Pidgey evolves, even though you can find lower-leveled Pidgeotto.", 'c2a': 'c2a', 'c3a': 'c3a', 'c4a': 'c4a', 'c5a': 'c5a', 'c6a': 'c6a'},
        {price: 200, 'c1': '200 c1', 'c2': '200 c2', 'c3': '200 c3', 'c4': '200 c4', 'c5': '200 c5', 'c6': '200c6'},
        {price: 300, 'c1': '300 c1', 'c2': '300 c2', 'c3': '300 c3', 'c4': '300 c4', 'c5': '300 c5', 'c6': '300c6'},
        {price: 400, 'c1': '400 c1', 'c2': '400 c2', 'c3': '400 c3', 'c4': '400 c4', 'c5': '400 c5', 'c6': '400c6'},
        {price: 500, 'c1': '500 c1', 'c2': '500 c2', 'c3': '500 c3', 'c4': '500 c4', 'c5': '500 c5', 'c6': '500c6'}
    ];
    const [answer, setAnswer] = useState();
    const [tempQ, setTempQ] = useState();
    const [question, setQuestion] = useState();
    const [qButtonText, setQButtonText] = useState("Show Question");
    const [usedAnswers, setUsedAnswers] = useState([]);

    const handleClick = (q, a, id) => {
        setAnswer(a);
        setTempQ(q);
        const usedAnswersCopy = usedAnswers.slice();
        usedAnswersCopy.push(id);
        setUsedAnswers(usedAnswersCopy);
    }

    const renderHeader = () => {
        return (
            <tr>
                {categories.map(category => {
                    return <td>{category}</td>;
                })}
            </tr>
        );
    }

    const renderBody = () => {
        return answers.map(level => {
            return (
                <tr key={level.price}>
                    <td><button className="button btn btn-primary" onClick={() => handleClick(level.c1q, level.c1a, 'c1' + level.price)} disabled={usedAnswers.indexOf('c1' + level.price) > -1}>{`$${level.price}`}</button></td>
                    <td><button className="button btn btn-primary" onClick={() => handleClick(level.c2q, level.c2a, 'c2' + level.price)} disabled={usedAnswers.indexOf('c2' + level.price) > -1}>{`$${level.price}`}</button></td>
                    <td><button className="button btn btn-primary" onClick={() => handleClick(level.c3q, level.c3a, 'c3' + level.price)} disabled={usedAnswers.indexOf('c3' + level.price) > -1}>{`$${level.price}`}</button></td>
                    <td><button className="button btn btn-primary" onClick={() => handleClick(level.c4q, level.c4a, 'c4' + level.price)} disabled={usedAnswers.indexOf('c4' + level.price) > -1}>{`$${level.price}`}</button></td>
                    <td><button className="button btn btn-primary" onClick={() => handleClick(level.c5q, level.c5a, 'c5' + level.price)} disabled={usedAnswers.indexOf('c5' + level.price) > -1}>{`$${level.price}`}</button></td>
                    <td><button className="button btn btn-primary" onClick={() => handleClick(level.c6q, level.c6a, 'c6' + level.price)} disabled={usedAnswers.indexOf('c6' + level.price) > -1}>{`$${level.price}`}</button></td>
                </tr>
            );
        });
    }

    const displayAnswer = () => {
        return (
            <div className="maintext">{qButtonText ? answer : question}</div>
        );
    };

    const displayQuestion = () => {
        // after 3 seconds, 'question' is set to the value of 'tempQ'
        setTimeout(() => {
            if (tempQ !== question) {
                setQuestion(tempQ);
            }
        }, 3000);
    };

    const backToTable = () => {
        setAnswer();
        setQuestion();
        setTempQ();
        setQButtonText("Show Question");
    }

    const showQuestion = () => {
        setQButtonText();
    }

    return (
        <div>
            <h1 className="center">Jeopardy!</h1>
            {!answer ? 
                (<table className="table center">
                    <tbody>
                        {renderHeader()}
                        {renderBody()}
                    </tbody>
                </table>) : 
                (<div>
                    <div>{displayAnswer()}</div>
                    <div>{displayQuestion()}</div>
                    {question && (
                        <>
                            {qButtonText && <button className="center" onClick={showQuestion}>{qButtonText}</button>}
                            <button className="center" onClick={backToTable}>{"Back to board"}</button>
                        </>
                    )}
                </div>)
            }
        </div>
    );
}

export default Jeopardy;
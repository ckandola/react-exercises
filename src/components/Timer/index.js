import React, {useState, useEffect, useCallback} from 'react';
import soundfile from './level_up.m4r';
import './Timer.css';

const Timer = () => {
    const initialText = 'Enter countdown value';
    const noCountdown = 'No time remaining';
    const [inputText, setInputText] = useState(initialText);
    const [remainingTime, setRemainingTime] = useState(0);
    const [canResume, setCanResume] = useState(false);
    const [choice, setChoice] = useState();
    const [countdownText, setCountdownText] = useState(noCountdown);
    const timeChoices = [1, 5, 10, 15];

    const playAudio = () => {
        const sound = new Audio(soundfile);
        sound.play();
    }

    const isNumber = entry => {
        return /^[0-9]*$/.test(entry);
    }

    const cancel = () => {
        setRemainingTime(0);
        setCanResume(false);
        setCountdownText(noCountdown);
    }

    const reset = () => {
        setRemainingTime(choice);
        setCanResume(true);
    }

    
    const refineCountdown = useCallback(() => {
        let text = 'Time Left: ';
        if(remainingTime < 60) {
            text += `${remainingTime} second${remainingTime > 1 ? 's' : ''}`;
            setCountdownText(text);
        } else if(remainingTime < 3600) {
            const minutes = parseInt(remainingTime / 60);
            const seconds = parseInt(remainingTime % 60);
            text += ` ${minutes} minute${minutes > 1 ? 's' : ''}`;
            text += seconds > 0 ? `, ${seconds} second${seconds !== 1 ? 's' : ''}` : '';
            setCountdownText(text);
        } else if(remainingTime < 86400) {
            const mod3600 = parseInt(remainingTime % 3600);
            const hours = parseInt(remainingTime / 3600);
            const minutes = parseInt(mod3600 / 60);
            const seconds = parseInt(mod3600 % 60);
            text += `${hours} hour${hours !== 1 ? 's' : ''}`;
            text += minutes > 0 ? `, ${minutes} minute${minutes !== 1 ? 's' : ''}` : '';
            text += seconds > 0 ? `, ${seconds} second${seconds !== 1 ? 's' : ''}` : '';
            setCountdownText(text);
        } else {
            setCountdownText('this will take a while')
        }
    }, [remainingTime]);

    useEffect(() => {
        if(canResume) {
            if(remainingTime > 0){
                refineCountdown();
                const timer = setTimeout(() => {
                    setRemainingTime(remainingTime - 1);
                }, 1000)
                return () => clearTimeout(timer);
            } else {
                setCountdownText(noCountdown);
                playAudio();
            }
        }
    }, [remainingTime, canResume, refineCountdown])

    const handleClick = countdown => {
        setRemainingTime(countdown);
        setCanResume(true);
        setChoice(countdown);
    }

    const handleTextChange = entry => {
        setInputText(entry.target.value);
    }

    const handleSubmit = () => {
        if(isNumber(inputText)){
            const num = parseInt(inputText);
            setRemainingTime(num);
            setCanResume(true);
            setChoice(num);
        }
    }

    return (
        <div className="timer-div">
            <h2>Timer</h2>
            <span className="timer-minbtn-span">
                {timeChoices.map(choice => {
                    return (<button key={choice} className="timer-btn timer-minbtn" onClick={() => {handleClick(choice)}}>{choice} seconds</button>);
                })}
            </span>
            <h2>{countdownText}</h2>
            <span>
                <button className="timer-btn timer-statusbtn" onClick={() => setCanResume(!canResume)} 
                        disabled={remainingTime === 0}>Pause/Resume</button>
                <button className="timer-btn timer-statusbtn" onClick={cancel}>Cancel</button>
                <button className="timer-btn timer-statusbtn" onClick={reset}>Reset</button>
            </span>
            <div className="timer-form">
                <input className="timer-input" value={inputText} 
                    onFocus={() => {if(!isNumber(inputText)) setInputText('')}} 
                    onChange={handleTextChange}
                    onBlur={() => setInputText(inputText ? inputText : initialText)}/>
                <input type="submit" className="timer-btn timer-submit" onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default Timer;
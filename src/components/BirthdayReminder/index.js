// from https://www.youtube.com/watch?v=a_7Z7C_JCyo

import React, {useState} from 'react';
import data from './data';
import BirthdayList from './BirthdayList';
import './BirthdayReminder.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

const BirthdayReminder = ({date = new Date()}) => {
    const [people, setPeople] = useState(data);
    const [selectedDate, setSelectedDate] = useState(date);
    return (
        <main className="birthday-main">
            <section className="birthday-container birthday-section">
                <div className="birthday-input-section">
                    <h3>Search for a birthday:</h3>
                    <div className="birthday-input-section-container">
                        <DatePicker 
                            selected={selectedDate}
                            onSelect={newDate => setSelectedDate(newDate)}
                            placeholderText={'Enter a day!'}
                            />
                        <div className="birthday-reset-sectn">
                            <button 
                                className="birthday-reset-date-btn"
                                onClick={() => {setSelectedDate(date)}}
                            >Return to today</button>
                        </div>
                    </div>
                </div>
                <BirthdayList
                    currentDay={selectedDate.toString()} 
                    people={people} 
                    onCongratulate={id => setPeople(people.filter(person => person.id !== id))}
                />
                <button className="birthday-btn" onClick={() => setPeople([])}>Clear All</button>
                <button className="birthday-btn" onClick={() => window.location.reload()}>Reload</button>
            </section>
        </main>
    );
}

export default BirthdayReminder;

BirthdayReminder.propTypes = {
    date: PropTypes.object
}
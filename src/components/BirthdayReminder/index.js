// from https://www.youtube.com/watch?v=a_7Z7C_JCyo

import React, {useState} from 'react';
import data from './data';
import BirthdayList from './BirthdayList';
import './index.css';

const BirthdayReminder = () => {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className="container">
                <h3>{`${people.length} birthdays today`}</h3>
                <BirthdayList people={people}/>
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default BirthdayReminder;

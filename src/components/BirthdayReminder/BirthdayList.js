import React from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

const BirthdayList = ({currentDay, people, onCongratulate}) => {

    const filterList = list => {
        return list.filter(person => {
            return dateFormat(person.birthday, 'mmdd') === dateFormat(currentDay, 'mmdd');
        })
    }

    const filteredList = filterList(people);

    return (
        <>
            <h3>{`${filteredList.length} birthday${filteredList.length !== 1 ? 's' : ''} today`}</h3>
            {filteredList.map(person => {
                const {
                    id, 
                    birthday, 
                    age = Number(dateFormat(currentDay), 'yyyy') - Number(dateFormat(birthday, 'yyyy')),
                    name, 
                    image
                } = person;

                return (
                    <article key={id} className="birthday-person">
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{`${age} years`}</p>
                        </div>
                        <button className="birthday-congrat-btn" onClick={() => onCongratulate(id)}>Congratulate</button>
                    </article>
                );
            })}
        </>
    );
};

export default BirthdayList;

BirthdayList.propTypes = {
    currentDay: PropTypes.string,
    people: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        birthday: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        image: PropTypes.string
    })),
    onCongratulate: PropTypes.func
};

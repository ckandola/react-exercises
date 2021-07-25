import React, { useEffect, useState, useRef } from 'react';
import './NewJokes.css';
const url = 'https://icanhazdadjoke.com/search?term=';

const NewJokes = () => {
    const [loading, setLoading] = useState(true);
    const [jokes, setJokes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('cat');
    const searchRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        if (searchRef.current.value) {
            setSearchTerm(searchRef.current.value);
        }
    }

    useEffect(() => {

        let isMounted = true;

        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "User-Agent": 'https://github.com/ckandola/react-exercises'
            }
        };

        const getJokes = async () => {
            try {
                const response = await fetch(`${url}${searchTerm}`, settings);
                const data = await response.json();
                const { results } = data;
                if (isMounted) {
                    if (results) {
                        setJokes(results);
                    } else {
                        setJokes([]);
                    }
                    setLoading(false);
                }
            } catch (error) {
                console.error(`Umm ${error}...`);
            }
        }
        getJokes();

        return () => isMounted = false;
    }, [searchTerm]);

    if (loading) {
        return (
            <h3 className="joke-loading">Loading...</h3>
        );
    }

    return (
        <div>
            {jokes.length > 0 ? 
                <div>
                    <h3 data-testid="header" className="joke-header">Dad Jokes for "{searchTerm}": </h3>
                    {jokes.map(joke => {
                        return (
                            <ul className="joke" key={joke.id}>
                                <li>{joke.joke}</li>
                            </ul>
                        );
                    })}
                </div> :
                <h3 className="joke-header">No results for "{searchTerm}"</h3>
            }
            <form className="joke-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="search">Enter a type of joke</label>
                    <input type="text" id="search" data-testid="search" ref={searchRef}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewJokes;

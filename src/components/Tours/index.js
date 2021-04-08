// from https://www.youtube.com/watch?v=a_7Z7C_JCyo

import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tour from './Tour';
import './index.css';

const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const deleteTour = id => {
        const newTours = tours.filter(tour => {
            return tour.id !== id;
        })
        setTours(newTours);
    }

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (
            <main className="tours-main"><Loading /></main>
        );
    }

    return (
        <section>
            <div className="title">
                {tours.length !== 0 ? 
                    <div>
                        <h2>Our Tours</h2>
                        <div className="underline"></div>
                        {tours.map(tour => {
                            return <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>
                        })}
                    </div> :
                    <div>
                        <h2>No Tours Left</h2>
                        <button className="btn" onClick={fetchTours}>Refresh</button>
                    </div>
                }
            </div>
        </section>
    );
};

export default Tours;

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

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (
            <main><Loading /></main>
        );
    }

    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map(tour => {
                    return <Tour key={tour.id} {...tour}></Tour>
                })}
            </div>
        </section>
    );
};

export default Tours;

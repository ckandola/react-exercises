// from https://youtu.be/a_7Z7C_JCyo?t=8088

import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import './Carousel.css';
import people from './data';

const Carousel = () => {
    const [carousel_ix, setCarousel_Ix] = useState(0);

    useEffect(() => {
        let slider = setInterval(() => {
            setCarousel_Ix(carousel_ix === people.length - 1 ? 0 : carousel_ix + 1);
        }, 5000);
        return () => clearInterval(slider);
    }, [carousel_ix])

    return (
        <section className="carousel-section">
            <div className="carousel-title">
                <h2>
                    <span>/ </span>Reviews
                </h2>
            </div>
            <div className="carousel-section-center">
                {people.map((person, index) => {
                    const {id, image, name, title, quote} = person;

                    let position = index === carousel_ix ? 'activeSlide' : 'nextSlide';
                    if (index === carousel_ix - 1 || (carousel_ix === 0 && index === people.length - 1)) {
                        position = 'lastSlide';
                    }
                    return (
                        <article className={`carousel-article carousel-article-${position}`} key={id}>
                            <img src={image} alt={name} className="carousel-person-img"/>
                            <h4>{name}</h4>
                            <p className="carousel-title">{title}</p>
                            <p className="carousel-text">{quote}</p>
                            <FaQuoteRight className="carousel-icon" />
                        </article>
                    );
                })};
                <button 
                    className="carousel-prev" 
                    onClick={() => setCarousel_Ix(carousel_ix === 0 ? people.length - 1 : carousel_ix - 1)}>
                        <FiChevronLeft />
                </button>
                <button 
                    className="carousel-next" 
                    onClick={() => setCarousel_Ix(carousel_ix === people.length - 1 ? 0 : carousel_ix + 1)}>
                        <FiChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Carousel;

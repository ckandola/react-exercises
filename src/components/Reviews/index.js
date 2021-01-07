// from https://www.youtube.com/watch?v=a_7Z7C_JCyo

import React, {useState} from 'react';
import './index.css';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Reviews = () => {
    const [reviewIx, setReviewIx] = useState(0);
    let review = reviews[reviewIx];

    const goToNextReview = () => {
        setReview(() => reviewIx + 1 === reviews.length ? 0 : reviewIx + 1);
    }
    
    const goToLastReview = () => {
        setReview(() => reviewIx - 1 < 0 ? reviews.length - 1 : reviewIx - 1)
    }

    const goToRandomReview = () => {
        setReview(() => {
            let temp = reviewIx;
            while (temp === reviewIx) {
                temp = Math.floor(Math.random() * reviews.length);
            }
            return temp;
        });
    }

    const setReview = setFunction => {
        const tempIx = setFunction();
        review = reviews[tempIx];
        setReviewIx(tempIx);
    }

    return (
        <main>
            <section>
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="underline"></div>
                </div>
                <div className="container review">
                    <div className="img-container">
                        <img className="person-img" src={review.image} alt={review.name} />
                        <div className="quote-icon"><FaQuoteRight/></div>
                    </div>
                    <div className="author"><h4>{review.name}</h4></div>
                    <div className="job">{review.job}</div>
                    <div className="info">{review.text}</div>
                    <span>
                        <button className="prev-btn" onClick={goToLastReview}><FaChevronLeft /></button>
                        <button className="next-btn" onClick={goToNextReview}><FaChevronRight /></button>
                    </span>
                    <div>
                        <button className="random-btn" onClick={goToRandomReview}>Random Review</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Reviews;

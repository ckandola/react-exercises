import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="cocktails-section cocktail-error-page">
            <div className="cocktail-error-container">
                <h3>Oops! That page doesn't exist</h3>
                <Link to="/Cocktail" className="cocktail-btn-primary">
                    Back Home
                </Link>
            </div>
        </section>
    );
};

export default Error;

import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import PropTypes from 'prop-types';

const Cocktail = ({img, name, id, isAlcoholic, glass}) => {
    return (
        <article className="cocktail">
            <img src={img} alt={name} className="cocktail-img"/>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{isAlcoholic}</p>
                <Link to={`/cocktail/${id}`} 
                    className="cocktail-btn cocktail-btn-primary cocktail-btn-details">
                        Details
                </Link>
            </div>
        </article>
    );
};

export default Cocktail;
export { useGlobalContext };

Cocktail.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    isAlcoholic: PropTypes.string,
    glass: PropTypes.string
};

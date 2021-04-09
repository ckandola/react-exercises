import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

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

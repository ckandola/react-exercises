import React from 'react';
import Cocktail, { useGlobalContext } from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {

    const { cocktails, cocktailLoading } = useGlobalContext();

    if (cocktailLoading) {
        return <Loading />;
    }

    if (cocktails.length < 1) {
        return (
            <h2 className="cocktail-section-title">
                No cocktails match your search
            </h2>
        );
    }

    return (
        <section className="cocktails-section">
            <h2 className="cocktail-section-title">Cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map(drink => {
                    return (
                        <Cocktail key={drink.id} {...drink} />
                    );
                })}
            </div>
        </section>
    );
};

export default CocktailList;

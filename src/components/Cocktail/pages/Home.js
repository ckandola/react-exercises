import React from 'react';
import SearchForm from '../SearchForm';
import CocktailList from '../CocktailList';

const Home = () => {
    return (
        <main className="none">
            <SearchForm />
            <CocktailList />
        </main>
    );
};

export default Home;

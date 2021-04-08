import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './Cocktail.css';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';

import Navbar from './Navbar';

const CocktailMain = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/Cocktail">
                    <Home />
                </Route>

                <Route path="/cocktail_about">
                    <About />
                </Route>
                
                <Route path="/cocktail/:id">
                    <SingleCocktail />
                </Route>
                
                <Route path="*">
                    <Error />
                </Route>

            </Switch>
        </Router>
    );
};

export default CocktailMain;

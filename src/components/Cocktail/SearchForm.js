import React from 'react';
import { useGlobalContext } from './Cocktail';

const SearchForm = () => {

    const { setCocktailSearchTerm } = useGlobalContext();
    const searchValue = React.useRef('');

    React.useEffect(() => {
        searchValue.current.focus();
    }, []);

    const handleChange = () => {
        setCocktailSearchTerm(searchValue.current.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <section className="cocktails-section cocktail-search">
            <form className="cocktail-search-form" onSubmit={handleSubmit}>
                <div className="cocktail-form-control">
                    <label htmlFor="name">Search your favorite cocktail</label>
                    <input type="text" id="name" ref={searchValue} onChange={handleChange}/>
                </div>
            </form>
        </section>
    );
};

export default SearchForm;

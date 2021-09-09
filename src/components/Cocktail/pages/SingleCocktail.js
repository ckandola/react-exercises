import React from 'react';
import Loading from '../Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [cocktail, setCocktail] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        const getCocktail = async () => {
            try {
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
                if (data.drinks) {
                    const {strDrink: name, 
                        strDrinkThumb: img, 
                        strAlcoholic: isAlcoholic, 
                        strCategory: category, 
                        strGlass: glass, 
                        strInstructions: instructions, 
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    ];
                    const newCocktail = {name, img, isAlcoholic, category, glass, instructions, ingredients};
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);

            }
        }
        getCocktail();
    }, [id]);

    if (loading) {
        return (
            <Loading />
        );
    };

    if (!cocktail) {
        return (
            <div className="cocktail-error-container">
                <h2 className="cocktail-section-title">No cocktail to display</h2>
                <Link to="/Cocktail" className="cocktail-btn-primary">Back Home</Link>
            </div>
        );
    };

    const {name, img, category, isAlcoholic, glass, ingredients, instructions} = cocktail;
    return (
        <section className="cocktails-section cocktail-section">
            <Link to={"/cocktail"} className="cocktail-btn cocktail-btn-primary">Back Home</Link>
            <h2 className="cocktail-section-title">{name}</h2>
            <div className="cocktail-drink">
                <img src={img} alt={name}/>
                <div className="cocktail-drink-info">
                    <p>
                        <span className="cocktail-drink-data">
                            Name: {name}
                        </span>
                    </p>
                    <p>
                        <span className="cocktail-drink-data">
                            category: {category}
                        </span>
                    </p>
                    <p>
                        <span className="cocktail-drink-data">
                            info: {isAlcoholic}
                        </span>
                    </p>
                    <p>
                        <span className="cocktail-drink-data">
                            glass: {glass}
                        </span>
                    </p>
                    <p>
                       <span className="cocktail-drink-data">
                            instructions: {instructions}
                        </span>
                    </p>
                    <p>
                        <span className="cocktail-drink-data">
                            Ingredients: {ingredients.map((ingredient, index) => {
                                return (ingredient && <span key={index}>{ingredient}</span>);
                            })}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleCocktail;

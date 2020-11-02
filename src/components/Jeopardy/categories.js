// import React from 'react';

export const questions = {
    'Math': [
        "March 14 is also the day celebrating this mathematical constant.",
        "Britney Spears released her first album in 1999, this many years ago.",
        "It's the fourth Fibonacci number.",
        "It's the decimal value of the hexadecimal 10.",
        "The official square root of 144."
    ],

    'Pokémon': [
        "It's when Pidgey evolves, even though you can find lower-leveled Pidgeotto.",
        "The name of the last gym leader of the Kanto Region.",
        "The name of the first gym leader of the Johto Region.",
        "The new types introduced in the Johto Region.",
        "It's a town that you can only enter from underwater!"
    ],

    'Science': [

    ], 
    
    'Exotic Rodents': [

    ],
    
    'It Actually Happened': [

    ],
    
    'Places on the Map': [

    ]
}


// const mathQuestions = [
//     "March 14 is also the day celebrating this mathematical constant.",
//     "Britney Spears released her first album in 1999, this many years ago.",
//     "It's the fourth Fibonacci number.",
//     "It's the decimal value of the hexadecimal 10.",
//     "The official square root of 144."
// ];

// const date = new Date();
// const mathAnswers = [
//     "What is pi?",
//     `What is ${date.getFullYear - 1999}`,
//     "What is 3?",
//     "What is 16?",
//     "What are 12 and -12?"
// ];

// const pokemonQuestions = [
//     "It's when Pidgey evolves, even though you can find lower-leveled Pidgeotto.",
//     "The name of the last gym leader of the Kanto Region.",
//     "The name of the first gym leader of the Johto Region.",
//     "The new types introduced in the Johto Region.",
//     "It's a town that you can only enter from underwater!"
// ];

// const pokemonAnswers = [
//     "What is 18?",
//     "Who is Giovanni?",
//     "Who is Faulkner?",
//     "What are steel and dark?",
//     "What is Sootopolis City?"
// ];

// const scienceAnswers = [];
// const rodentAnswers = [];
// const happenedAnswers = [];
// const mapAnswers = [];

const categories = ['Math', 'Pokémon', 'Science', 'Exotic Rodents', 'It Actually Happened', 'Places on the Map'];
//const answers = [mathAnswers, pokemonAnswers, scienceAnswers, rodentAnswers, happenedAnswers, mapAnswers];

export let gameCategories = [];
for (let i = 0; i < categories.length; i++) {
    const randomCategoryIx = Math.floor(Math.random() * categories.length);
    if (gameCategories.indexOf(categories[randomCategoryIx]) < 0) {
        gameCategories = gameCategories.concat(categories[randomCategoryIx]);
    } else {
        i--;
    }
}
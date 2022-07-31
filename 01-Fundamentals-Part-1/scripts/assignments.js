//LECTURE 1: Values and Variables
let country = {
    name: 'Australia',
    continent: 'Oceania',
    population: 25,
    isIsland: false,
    language: 'English'
};

console.log(country.name + " is part of " + country.continent + " and has " +  country.population + " million people");

//LECTURE 2: Data Types

// console.log(typeof isIsland);
// console.log(typeof country.population);
// console.log(typeof country);
// console.log(typeof language);

//LECTURE: Basic Operators
let population = country.population;
let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population);
console.log(population / 2);

let popFinland = 6;
if (population > popFinland)
console.log(true);
else
console.log(false);

let avgPopulation = 33;
// if (population > avgPopulation) 
// {
//     console.log(`${country.name}'s population is above average`);
// }
// else
// {
//     console.log(`${country.name}'s population is ${avgPopulation - population} million below average`);
// }

console.log(`${country.name}'s population is ${population > avgPopulation ? `above` : `below`} average`);

let description = `${country.name} is part of ${country.continent} and its ${population} million people speak ${country.language}`;

console.log(description);

// let numNeighbors = Number(prompt('How many neighbour countries does your country have?'));

// if(numNeighbors === 1)
// {
//     console.log(`Only 1 border!`);
// }
// else if(numNeighbors > 1)
// {
//     console.log(`More than 1 border`);
// }
// else
// {
//     console.log(`No borders`);
// }

if (country.language === "English" && country.population < 50 && country.isIsland === false)
{
    console.log(`You should live in ${country.name} :)`);
}
else
{
    console.log(`${country.name} does not meet your criteria :(`)
}

let languageRank;
console.log(country.language);

switch(country.language)
{
    case `Chinese` || `Mandarin`:
        languageRank = `MOST number of native speakers!`;
        break;
    case `Spanish`:
        languageRank = '2nd place in number of native speakers';
        break;
    case 'English':
        languageRank = '3rd place';
        break;
    case 'Hindi':
        languageRank = 'Number 4';
        break;
    case 'Arabic':
        languageRank = '5th most spoken language';
        break;
    default:
        languageRank = 'Great language too :D';
        break;
}

console.log(languageRank);
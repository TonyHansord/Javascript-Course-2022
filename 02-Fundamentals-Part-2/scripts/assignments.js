let australia = {
    name: `Australia`,
    population: 25,
    capitalCity: `Canberra`
};

let sweden = {
    name: `Sweden`,
    population: 10,
    language: `Swedish`,
    capitalCity: `Stockholm`,
    neighbours: [`Finland`, `Norway`, `Denmark`],
    
    describe: function() {
        console.log(`${this.name} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capitalCity}.`);
    } 
};

let italy = {
    name: `Italy`,
    population: 50,
    capitalCity: `Rome`
};

let china = {
    name: `China`,
    population: 1400,
    capitalCity: `Beijing`
};

function percentageOfWorld1(country)
{
    return ((country.population / 7900) * 100).toFixed(2);
}

let percentageOfWorld2 = function (country)
{
    return ((country.population / 7900) * 100).toFixed(2);
}

let percentageOfWorld3 = country => ((country.population / 7900) * 100).toFixed(2);

function describeCountry (country)
{
    return `${country.name} has ${country.population} million people and its capital city is ${country.capitalCity}\n`;
}

function describePopulation(country)
{
    return `${country.name} has ${country.population} million people, which is about ${percentageOfWorld1(country)}% of the world.\n`;
}

const ausDescription = describeCountry(australia);
const swedeDescription = describeCountry(sweden);
const italyDescription = describeCountry(italy);

console.log(ausDescription, swedeDescription, italyDescription);

const ausPercent = percentageOfWorld1(australia);
const swedePercent = percentageOfWorld2(sweden);
const italyPercent = percentageOfWorld3(italy);

console.log(ausPercent, swedePercent, italyPercent);

const ausDescPop = describePopulation(australia);
const swedeDescPop = describePopulation(sweden);
const italyDescPop = describePopulation(italy);

console.log(ausDescPop, swedeDescPop, italyDescPop);

let countries = [australia, sweden, italy, china];
let percentages = [];

if (countries.length >= 4) 
{
    console.log(`There are at least 4 country's populations.`);
    for (let i = 0; i <= countries.length - 1; i++)
    {
        percentages.push(percentageOfWorld1(countries[i]));
        console.log(percentages[i]);    
    }
}
else 
{
    console.log(`There are not 4 country's populations.`);
}

console.log(`${sweden.name} has ${sweden.population} million ${sweden.language}-speaking people, ${sweden.neighbours.length} neighbouring countries and a capital called ${sweden.capitalCity}.`);

sweden.population = sweden.population + 2;

console.log(`${sweden.name} has ${sweden.population} million ${sweden.language}-speaking people, ${sweden.neighbours.length} neighbouring countries and a capital called ${sweden.capitalCity}.`);

sweden[`population`] = sweden[`population`] - 2;

console.log(`${sweden.name} has ${sweden.population} million ${sweden.language}-speaking people, ${sweden.neighbours.length} neighbouring countries and a capital called ${sweden.capitalCity}.`);

sweden.describe();




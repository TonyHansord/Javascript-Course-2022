//Challenge

function calcAvg(score1, score2, score3)
{
    return Math.round((score1 + score2 + score3) / 3);
}
//find who has largest Avg
function declareWinnerA(teamOneAvg, teamTwoAvg)
{
    if (teamOneAvg > teamTwoAvg)
    {
        console.log(`Winners are Dolphins`);
    }
    else if(teamTwoAvg > teamOneAvg)
    {
        console.log(`Winners are Koalas`);
    }
    else 
    {
        console.log(`Its a Draw`);
    }
}

//If also has score > 100
function declareWinnerB(teamOneAvg, teamTwoAvg)
{
    if (teamOneAvg > teamTwoAvg && teamOneAvg >= 100)
    {
        console.log(`Winners are Dolphins`);
    }
    else if(teamTwoAvg > teamOneAvg && teamTwoAvg >= 100)
    {
        console.log(`Winners are Koalas`);
    }
    else if(teamOneAvg === teamTwoAvg && teamOneAvg >= 100 && teamTwoAvg >= 100)
    {
        console.log(`Its a Draw`);
    }
    else 
    {
        console.log(`Nobody Wins`);
    }
}

let dolphinsScores = {
    a: Number(prompt(`Dolphins Score 1`)),
    b: Number(prompt(`Dolphins Score 2`)),
    c: Number(prompt(`Dolphins Score 3`))
};

let koalasScores = {
    a: Number(prompt(`Koalas Score 1`)),
    b: Number(prompt(`Koalas Score 2`)),
    c: Number(prompt(`Koalas Score 3`))
};

let dolphinsAvg = calcAvg(dolphinsScores.a, dolphinsScores.b, dolphinsScores.c);
let koalasAvg = calcAvg(koalasScores.a, koalasScores.b, koalasScores.c);

console.log(`Dolphins ${dolphinsAvg}, Koalas ${koalasAvg}`);

declareWinnerA(dolphinsAvg, koalasAvg);
declareWinnerB(dolphinsAvg, koalasAvg);

//Bonus 1

//Bonus 2
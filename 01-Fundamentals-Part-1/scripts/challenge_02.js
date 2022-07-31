function calcBMI(mass, height)
{
    let bmi = mass / (height ** 2);
    
    return (Math.round(bmi * 100) / 100).toFixed(2);
}

function compareBMI(bmiMark, bmiJohn)
{
    let result;
    if (bmiMark > bmiJohn)
    {
        result = `Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`;
    }
    else 
    {
        result = `John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`;
    }

    console.log(result);
}

let mark = {
    mass: 78,
    height: 1.69,
};

let john = {
    mass: 92,
    height: 1.95,
};

let markBMI = calcBMI(mark.mass, mark.height);
let johnBMI = calcBMI(john.mass, john.height);

compareBMI(markBMI, johnBMI);

mark.height = 1.88;
mark.mass = 95;

john.height = 1.76;
john.mass = 85;

markBMI = calcBMI(mark.mass, mark.height);
johnBMI = calcBMI(john.mass, john.height);

compareBMI(markBMI, johnBMI);

//Excercise 1
const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;


console.log(Math.round(num1,5))
console.log(Math.round(num2,12))
console.log(Math.round(num3,-8))

//Excercise 2 

const numberSet = [14, 2, -5, 101, 35, 8];
//2.1
const highest = Math.max(...numberSet);

console.log(`The highest number is ${highest}`)
//2.2
const lowest = Math.min(...numberSet);

console.log(`The highest number is ${lowest}`)
//Excersise 3
const base = 5;
const exponent = 3;
const numberForSqrt = 64;

//3.1
const powerBase = Math.pow(base, exponent);
console.log(" Power:"+ powerBase);

//3.2
const sqrtResult = Math.sqrt(numberForSqrt);
console.log(" Square Root:", sqrtResult);


//Excersise 4

//4.1
const randomDecimal = Math.random();

console.log(`Random decimal : ${randomDecimal}`)

//4.2

const randomInt = Math.floor(Math.random()*10+1);

console.log(`Random Integer ${randomInt}`)


//Excerise 5 

// 5.1: Area of a circle (πr²)
const area = Math.PI * Math.pow(radius, 2);

// 5.2: Round to 2 decimal places
const roundedArea = Math.round(area * 100) / 100;


console.log("5.1 Area:", area);          
console.log("5.2 Rounded Area:", roundedArea);
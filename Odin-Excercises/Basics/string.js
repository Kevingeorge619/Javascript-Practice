//types of quotes we can use to declare a string
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//Embedding Javascript
const name = "Kevin";
const greeting = `Hello, ${name}`;
console.log(greeting);


//concatenate string
const display = "Hello";
const firstname = "Kevin";
console.log(greeting + ", " + name);

//Numbers vs Strings
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);



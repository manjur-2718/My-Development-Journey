let score="33";
console.log(typeof score);  // This one is a string

let valueInNumber = Number(score); //type conversion into number
console.log(typeof valueInNumber);

let value = "abc";
let newValue = Number(value); // here I am tryong to convert a string to a number but this one is not possible as abc cannot be convertedd to a number. Hence in this case since it is not a possible operation, the type conversion will give NaN.

console.log(typeof value);
console.log(typeof newValue); // NaN is assigned as "abc" can never be converted into an original number
console.log(newValue); // NaN

let isLoggedIn = true;
let numIsLoggedIN = Number(isLoggedIn); // Type Conversion of a boolean operator int a number.
console.log(typeof isLoggedIn);
console.log(typeof numIsLoggedIN);

let name = "Manjur";
let status = Boolean(name); // conversion of string to boolean. 
console.log(typeof name);
console.log(typeof status); // If it would have been an empty string than the boolean value would have been zero.
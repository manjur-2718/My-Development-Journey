const score = 100; // This is a number data type. Js automatically detected it as a number.

// We can explicitly declare it a number also
const balance = new Number(400.2685); // This is also a number data type.
console.log(score); // This will print 100
console.log(balance); // This will print [Number: 400.2685]

// There are many methods in number data type. Some of them are given below
console.log(score.toString()); // This will convert the number to string
console.log(balance.toFixed(2)); // This will convert the number to string with 2 decimal places
console.log(balance.toPrecision(3)); // This will convert the number to string with 3 significant digits
console.log(balance.valueOf()); // This will return the primitive value of the number
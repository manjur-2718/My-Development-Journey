//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // no separte datatype like float as in other languages

const isLoggedIn = false // boolean
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // example showing that two symbols having even same value can never be equal

let bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Manjur", "naagraj", "Sameer"];
let myObj = {
    name: "Manjur",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// reference to study from
// https://262.ecma-international.org/5.1/#sec-11.4.3
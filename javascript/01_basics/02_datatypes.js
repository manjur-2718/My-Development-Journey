"use strict"; // isse ye hoga ki mera jitna bhi code hai woh newer version pe chalega

//alert("hello") // ye browser pe use kare toh ek alert pop up hoga aur ye message dikhega but hum
// node js use kar rhe hai terminal pe isliye isme error aayega. Iska syntax node js ke liye alga hota hai

let name = "Manjur";
let age = 20;  // number. iski range around 2^53 hoti hai.
// iske alawa ek big int bhi hai joh hum bahut kam use karenge
let isLoggedIn = true;
let bigNumber = 1684321518218986118n // js automatically makes it bigInt if i write n after number

//null => standalone value hai
//undefined => abhi tak value assign nhi hui kisi variable ki
//symbol => iska zyada use react mei aayega. Uniqueness ke liye us ehota hai


// object => ye baad mei padenge

//typeof
console.log(typeof age);
console.log(typeof null); // object => ye javascript ki ek problem hai maan skte hai hai
console.log(typeof undefined); // undefined
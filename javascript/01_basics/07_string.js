const name = "Manjur";
const repoCount = 50;

console.log(name + " has " + repoCount + " repositries in github "); // This is an examples of string concatenation

//But this way of printing strign is pretty old.
// Hence in modern syntax we use ``. 
//This is called String Interpolation
//Benifit: We can make place holder in which we can directly inject my variables

console.log(`${name} has ${repoCount} repositries in github`);

// ==========================================================================================================================



// There is one more weay of printing string in modern syntax. It is called String Methods.
// There are many string methods in JS. Some of them are given below

const gameName = new String("Call of Duty");
// String {'Manjur'}
// 0 : "M"
// 1 : "a"
// 2 : "n"
// 3 : "j"
// 4 : "u"
// 5 : "r"
// length : 6
// [[Prototype]] : String

// Strings are stored in form. It might look like an array but it is not an array. Hence we can access the string using index but we cannot change the string using index. It is immutable. It is like a key value pair. The key is the index and the value is the character at that index. Hence we can access the string using index but we cannot change the string using index. It is immutable.

//  ==>  Inside prototype we have many methods which we can use to manipulate the string. Some of them are given below

console.log(gameName.length); // This will give the length of the string
console.log(gameName.toUpperCase()); // This will convert the string to upper case
console.log(gameName.toLowerCase()); // This will convert the string to lower case
console.log(gameName.charAt(5)); // This will give the character at index 0
console.log(gameName.indexOf("o")); // This will give the index of the first occurrence of "o"
console.log(gameName.lastIndexOf("o")); // This will give the index of the last occurrence of "o"
console.log(gameName.includes("of")); // This will check if the string includes "of" or not. It will return true or false
console.log(gameName.startsWith("Call")); // This will check if the string starts with "Call" or not. It will return true or false
console.log(gameName.endsWith("Duty")); // This will check if the string ends with "Duty" or not. It will return true or false

const newGame = gameName.substring(0,8); // This will give the substring from index 0 to 8 (not including 8)
console.log(newGame); // This will print "Call of "

const newGame2 = gameName.slice(-8,10); // This will give the substring from index -4 to 8 (not including 8). In Js negative index means the counting will start from the end of the string. Hence -1 means the last character, -2 means the second last character and so on. Hence -8 means the 8th last character which is "D" and 10 means the 10th character which is "y". Hence it will give the substring from index -8 to 10 (not including 10) which is "Duty"
console.log(newGame2); 
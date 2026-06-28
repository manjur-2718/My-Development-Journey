console.log(`2>1 : ${2>1}`);
console.log(`2>=1 : ${2>=1}`);
console.log(`2==1: ${2==1}`);
console.log(`4<4 : ${4<4}`);
console.log(`4<=4 : ${4<=4}`);
// These were some basic comparision operations

//=============================================================================================================

// Now some miscellaneous one

// In javascript problem occurs when we try to compare two different datatypes.
// In that situation our result may vary from what we expect.
// Hence it is always recommended to compare one same datatypes
console.log(`"2"<1 : ${"2"<1}`);
console.log(`"2">1 : ${"2"<1}`);

//Why this Happens??
// In javascript if we compare two different datatypes then firstly conversion takes place and the conversion of one datatype might not be same as expected. Hence the final result may vary

//=========================================================================================================

// Below one is also one more very tricky example
console.log(`null > 0 ${null > 0}`);
console.log(`null == 0 ${null == 0}`);
console.log(`null >= 0 ${null >= 0}`);
// Whis this happened here??
// Well in JS (==) ans(>,<,>=,<=) works differently. The (>,<,>=,<=) converts null to a number which results in '0' and that gives null>=0 as true but(==) works differently

//undefined will always give false
console.log(`undefined >= 0 ${undefined >= 0}`);
console.log(`undefined == 0 ${undefined == 0}`);
console.log(`undefined < 0 ${undefined < 0}`);

//=================================================================================================================

//strict check === : It checks equality as well as datatypes also
console.log(`null >= 0 ${null >= 0}`);
console.log(`"hello" >= 0 ${"hello" >= 0}`);
console.log(`"0" === 0 ${"0" === 0}`); // here even though after conversion of "0" it becomes 0 but since it is not of same datatype we will get false as answer
console.log(`0 === 0 ${0 === 0}`);
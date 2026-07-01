// There are two types of memory in JS
// One is stack and one is heap
// Stack--> used in primitive datatypes--> returns a copy of the variable
// Heap--> used in non-primitive datatypes--> returns a reference of the object

let myName = "Manjur"; // This is a primitive type. Hance it will go in stack.
let anotherName = myName;

console.log(anotherName, " ", myName);
// Now come the main part
// If i make any change in my anotherName there will be no change in myName as only a copy of myName was given
anotherName = "Hossain";
console.log(`myName : ${myName} anotherName : ${anotherName}`);

// Now let us see an example of non primitive type
let user1={
    email : "abc@gmail.com",
    upiID : "abc@ybl"
};

let user2 = user1;
console.log(`user1 => email : ${user1.email} upiID : ${user1.upiID}
user2 => email : ${user2.email} upiID : ${user2.upiID}`);

//Now if i make any change in user2 then the same changes will be reflected in user1 also as the reference of user1 is passed in user2
user2.email = "abc123@gmail.com";
console.log(`
    After changes
    `);

console.log(`user1 => email : ${user1.email} upiID : ${user1.upiID}
user2 => email : ${user2.email} upiID : ${user2.upiID}`);

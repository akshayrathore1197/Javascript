//! Primitive

/*

String
Number
Boolean
null
undefined
Symbol
BigInt

*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("23");
const anotherId = Symbol("23");

const bigNumber = 385544534893489145636123;
const bigNumber1 = 385544534893489145636123n;

// console.log(id === anotherId);

// console.log(typeof(score));
// console.log(typeof(scoreValue));
// console.log(typeof(isLoggedIn));
// console.log(typeof(outsideTemp));
// console.log(typeof(userEmail));
// console.log(typeof(id));
// console.log(typeof(anotherId));
// console.log(typeof(bigNumber));
// console.log(typeof(bigNumber1));

// console.table ([score,scoreValue,isLoggedIn,outsideTemp,userEmail,id,anotherId,bigNumber,bigNumber1])

//! Reference (Non primitive)

/*

Array
Object
Functions

*/

const heros = ["shaktiman", "thor", "wanda"];

myObj = {
  name: "akshay",
  age: 19,
};

let myFunc = function () {
  console.log("Hello Worold");
};

// console.log(typeof(heros));
// console.log(typeof myObj);
// console.log(typeof myFunc);  //? Object function













// ! ######################################################################################



//* Stack (Primitive ) ; 

let name1 = "frustratedAkshay";

let anotherName = name1;
anotherName = "Akshay";

console.log(name1);
console.log(anotherName);

// ? copy is given 



// *Heap (Non Primitve)



let userone = {
  email: "user@google.com",
  upi: "user@ybl",
};

let usertwo = userone;

usertwo.email = "akshay@google.com"

console.log(userone.email);
console.log(usertwo.email);


// ? Actual value is given 
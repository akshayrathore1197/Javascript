function sayMyname() {
  // function defination
  console.log("A");
  console.log("K");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("Y");
}

// sayMyname //function refrence
// sayMyname() // function execution

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}
var result = addTwoNum(5, 7);
// console.log("Result : "+result) ;

function addTwoNum(num1, num2) {
  let result = num1 + num2;
  return result;
  console.log("Will not print , because it is after the return ");
}
var result = addTwoNum(5, 7);
// console.log("Result : "+result) ;

function loginUserMessage(username = "Person") {
  if (username === undefined) {
    console.log("Please enter your username");
  } else {
    return `${username} just logged in`;
  }
}
// console.log(loginUserMessage()); // undefined
// console.log(loginUserMessage("Akshay"));

function calculatecartPrice(...cartItem) {
  return cartItem;
}
console.log(calculatecartPrice(100,200,300,44));

function calculatecartPrice1(val1, val2, ...cartItem) {
  return cartItem;
}
console.log(calculatecartPrice1(100, 200, 300));

var Obj = {
  username: "akshay",
  price: 999,
};

function handleObj(anyObj) {
  console.log(`username is ${anyObj.username}  and price is ${anyObj.price}`);
}

// handleObj(Obj);

// handleObj({
//     username: "kumkum",
//     price : 169
// }) 

var myArray = [100,200,300,400,500];
function getSecVal(getArray){
     return getArray[1]
}
console.log(getSecVal(myArray))
console.log(getSecVal([200,400,600]))
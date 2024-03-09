// ? object literals

const mySym = Symbol("key1");

const js_User = {
  name: "Akshay",
  "full name": "Akshay Rathore",
  [mySym]: "mykey1",
  age: 19,
  location: "Bhopal",
  email: "akshay1microsoft.com",
  isLoggedIn: true,
  lastLoginDays: ["monday", "friday"],
};

console.log(js_User.age);
console.log(js_User["age"]);
console.log(js_User["full name"]);
console.log(js_User[mySym]);

js_User.email = "akshay@google.com";
console.log(js_User.email);
Object.freeze(js_User);
js_User.email = "akshay@gpt.com";


js_User.greeting = function(){
    console.log("Hello User");
}

js_User.greetingTwo = function(){
   console.log((`Hello Js user ${this["full name"]}`));
}

console.log(js_User.greeting());
console.log(js_User.greetingTwo());


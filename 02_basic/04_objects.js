// ?

// const tinderuser =  new Object() // singleton object
const tinderuser = {}; //  non-singleton object

tinderuser.id = "123abc";
tinderuser.name = "John Doe";
tinderuser.isLoggedIn = false;

console.log(tinderuser);

const regularuser = {
  email: "some@one.com",
  fullname: {
    userfullname: {
      firstname: "akshay",
      lastname: "rathore",
    },
  },
};

console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname);
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

var obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);
var obj3 = {obj1 , obj2}
console.log(obj3);

var obj3 =  {...obj1, ...obj2}
console.log("Object 3 is ", obj3)

const user = [
  {
    id: 19,
    email: "john1@gmail.com",
  },
  {
    id: 16,
    email: "john2@gmail.com",
  },
  {
    id: 12,
    email: "john3@gmail.com",
  },
  {
    id: 10,
    email: "john4@gmail.com",
  },
];

console.log(user);
console.log(typeof user);

console.log(user[1].id);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("email"));

const course = {
  coursename: "Learning Js",
  price: "Free",
  courseInstructor: "hitesh ",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor);


// {
//     "name": "hitesh" ,
//     "coursename": "js in hindi ",
//     "price": "free"
// }


// [
//     {},
//     {},
//     {},

// ]

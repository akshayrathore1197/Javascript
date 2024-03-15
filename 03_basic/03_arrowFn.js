const user ={
    username : "Akshay",
    price : 888,

    welocmeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welocmeMessage()
// user.username = "meenakshi"
// user.welocmeMessage()
// console.log(user);
// console.log(this);

// function chai(){
//     let username = "akshay"
//     console.log(this.username);
// }
// chai();


// const chai = function(){
//     let username = "akshay"
//    console.log(this.username) ;
// }

// chai();


const chai = ()  => {
    let username = "akshay"
   console.log(this.username) ;
}
chai();


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,6))


// const addTwo = (num1,num2) =>num1 + num2
// console.log(addTwo(54,6))

// const addTwo = (num1,num2) => ( num1 + num2)
// console.log(addTwo(5,6))

const addTwo = (num1,num2) => ( {username : "akshay"})




const accountId = 14423;
let accountEmail = "akshay@google.com";
var accountPassword = "1223";
accountCity = "Bhopal";
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity])


// accountId  =2; //! Not Allowed

accountPassword = "2323"; 
accountCity = "Indore";
// console.log(accountId);

 /*
Not to use "var"
becuase of issue in block scope and functional scope

  */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
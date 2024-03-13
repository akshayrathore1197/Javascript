// console.log(2>1);
// console.log(2==1);
// console.log(2<1);
// console.log(2!=1);

// console.log("akshay" > 1);
// console.log("2" > 1);
// console.log(" " > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);    //! Js convert null => 0 (== and < > =< => both works differently)
// console.log(null < null);   
// console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);


//* == check data value only (not the data type["2"+2] => true)
//* === strict check (also check the data type) ["2"+2 => false]
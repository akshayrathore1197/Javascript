// ! Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // * named iife
  console.log(`DB CONNECTED`);
})();

(  () => {
console.log(`DB Connected Too`);
} )  ();


( (name) =>{
    // * un-named iife
console.log(`Hello ${name}`);
} )("Akshay")
// Immediately Invoked Function Expressions (IIFE)
// To avoid pollution of global scope

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); //simple IIFE
} )('hitesh') \\I am passing the argument here same as function
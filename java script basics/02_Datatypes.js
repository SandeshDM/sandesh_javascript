"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

//console.log(3 
    +
//     3) // code readability should be high

//console.log("Sandesh")


//let name = "Sandesh"
//let age = 18
//let isLoggedIn = false
//let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//++++++++
//Primitive that is stack 
let a = "b"
let c = a
console.log(a) // This will give output as "b"
console.log(c) // This will also give output as "b"
c = "something"
console.log(c) // This will give output as "something"
console.log(a) // this 

//....... for non primitive types
let array1 = [1, 2, 3];
let array2 = array1;

console.log(array1); // Output: [1, 2, 3]
console.log(array2); // Output: [1, 2, 3]

array2.push(4);

console.log(array1); // Output: [1, 2, 3, 4]
console.log(array2); // Output: [1, 2, 3, 4]



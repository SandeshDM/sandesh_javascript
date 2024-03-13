const non_prime = {
    a : "something", //key values withing the objects are indivisual properties
}
let b = non_prime
console.log(non_prime) //Output a:"something"
console.log(b) // Output a:"something"

non_prime.a = "else" 
console.log(non_prime) //output a:"else"
console.log(b) ////output a:"else"
//Primitive type
let a = "b"
let c = a
console.log(a) // This will give output as "b"
console.log(c) // This will also give output as "b"
a = "something"
console.log(c) // This will still give output as b
console.log(a) // this will give output as something

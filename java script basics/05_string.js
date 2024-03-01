const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') // This will directly create objects 

// console.log(gameName[0]);
// console.log(gameName.__proto__);  // The __proto__ property (or Object.getPrototypeOf() method for a more standard approach) is primarily for understanding and debugging purposes


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //It dosen't take negative values 
console.log(newString);

const anotherString = gameName.slice(-8, 4) // It takes negative values 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // to remove the whitespace 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // If you want to use split according to values then use substring
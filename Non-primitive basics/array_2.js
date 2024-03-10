const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //This pushes an complete array within the array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //To get the element from the second array 

// const allHeros = marvel_heros.concat(dc_heros) // to merge 2 arrays 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // to easily merge any amount of indivisual arrays spread

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // This will merge above arrays into single array 
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //True or False 
console.log(Array.from("Hitesh")) //Makes an array with each element ["H", "I"...]
console.log(Array.from({name: "hitesh"})) // Returns an empty object as we need to specify key or value 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Makes an array from each score 
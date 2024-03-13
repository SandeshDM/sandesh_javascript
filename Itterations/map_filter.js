const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) =>  num + 10) // map will return the value without specifying it

//const newNums = myNumers 
//                .map((num) => num * 10 ) //This method is called chaining you can include multiple methods
//                .map( (num) => num + 1)
//                .filter( (num) => num >= 40)

console.log(newNums);
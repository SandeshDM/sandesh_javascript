//console.log(`${username} , welcome to website`); //In JavaScript, when accessing properties of an object from within a method of that object, you need to use the this keyword to reference those properties. 

//const user = {
//    username: "hitesh",
//    price: 999,

//    welcomeMessage: function() { //A method is just like a variable to refer to a function in an object. 
//        console.log(`${this.username} , welcome to website`); //This needs to be used for reference within an object
//        console.log(this);
//    }

//}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // This will return empty {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // This will return empty {}
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //This will return empty {}
// }

//const chai =  () => {
//    let username = "hitesh"
//    console.log(this); //This will also return empty
//}


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //explicit because return is being used when {} is used then return needs to be mentioned

//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 ) //when() is used then return need not be it is called implicit

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
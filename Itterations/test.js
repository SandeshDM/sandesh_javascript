var createHelloWorld = function() {
    
    return function() {
        console.log("hello world")
        return "Hello World";
        
    }
};
createHelloWorld()

var createHelloWorld = function() {
    return function() {
        console.log("hello world");
        return "Hello World";
    }
};

var innerFunction = createHelloWorld(); // This assigns the returned function to a variable
innerFunction(); // This executes the returned function, triggering the console.log

let array = []
let limit = 15
for(i=1; i<=limit+1; i++){
    if(i%3==0 && i%5==0){
        array.push("Fizz Buzz");
    }else if(i%5==0){
        array.push("Buzz");
    }else if(i%3==0){
        array.push("Fizz");
    }else{
        array.push(i);
    }
}
console.log(array)
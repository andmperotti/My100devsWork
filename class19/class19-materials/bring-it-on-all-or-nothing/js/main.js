// *Variables*
// Declare a variable, assign it a boolean, and alert the value


// Declare a variable, reassign it to your favorite color, and console log the value
let color;
color = 'teal'
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function quatroSum(a,b,c,d){
    return (a+b+c)/d
}
console.log(quatroSum(6,3,2,1))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function dosLogos(a,b){
    console.log(Math.pow(a,b))
}
dosLogos(2,4)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function doCondition(boo, str){
    // if(boo){
    //     alert(str)
    // }else if(!boo){
    //     console.log(str)
    // }
    return boo ? alert(str) : console.log(str)
}
doCondition(true, "I'm the best")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function doLoop(num){
    for(let i = 1; i<=num; i++){
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz')
        }else if(i%3===0){
            console.log('fizz')
        }else if(i%5===0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}
doLoop(15)
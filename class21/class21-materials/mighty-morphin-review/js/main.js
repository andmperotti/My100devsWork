// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHolliday;
favHolliday = 'Thanksgiving'
console.log(favHolliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let strng;
strng = "this is a string"
alert(strng.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function doThing(a,b,c,d,e){
        alert(Math.abs(100-a-b-c-d-e))
}
doThing(1,2,3,45, 55)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function mathMinAndMax(a,b,c){

    console.log(`${Math.min(...arguments)}, ${Math.max(...arguments)}`)
}
mathMinAndMax(10, 28, 55)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    if(Math.random()>.5){
        return 'Heads'
    }else{
        return "Tails"
    }
}
console.log(headsOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function loopNum(n){
    while(n>0){
        console.log(headsOrTails())
        n--
    }
}
loopNum(4)
// *Variables*
// Create a variable and console log the value
let num = 37;
console.log(num)
// Create a variable, add 10 to it, and alert the value
let munz = 100;
munz +=10
alert(munz)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractQuatro(a,b,c,d){
    alert(a-b-c-d)
}
subtractQuatro(1,2,3,4)
// Create a function that divides one number by another and returns the remainder
function divisio(a,b){
    return a/b
}
console.log(divisio(2,1))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if(a+b > 50){
        alert("Jumanji")
    }
}
jumanji(25,26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c){
    if(a*b*c %3 === 0){
        alert("Zebra")
    }
}
zebra(1,2,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeatWord(word, number){
    for(let i = 1; i<=number; i++){
        console.log(word)
    }
}
repeatWord("get the bag", 69)
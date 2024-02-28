// *Variables*
// Create a variable and console log the value
let drewFavNum = 28
console.log(drewFavNum)
// Create a variable, add 10 to it, and alert the value
let adder = 0;
adder+= 10
alert(adder)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subQuatro(a,b,c,d){
    alert(a-b-c-d)
}
subQuatro(1,2,3,4)
// Create a function that divides one number by another and returns the remainder
function modulo(a,b){
    return a%b
}
console.log(modulo(5,5))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if(a+b>50){
        alert("Jumani")
    }
}
jumanji(51,51)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c){
    if(a*b*c%3===0){
        alert("ZEBRA")
    }
}
zebra(3,3,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeatWord(word, num){
    for(let i = 0; i<num; i++){
        console.log(word)
    }
}
repeatWord(5, 'hella')
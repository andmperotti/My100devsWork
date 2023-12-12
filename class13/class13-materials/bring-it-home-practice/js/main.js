// *Variables*
// Create a variable and console log the value
let name = 'drew';
console.log(name)
// Create a variable, add 10 to it, and alert the value
let age = 37;
age +=10;
console.alert(age)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let subFour(num){
    console.alert(num-4)
}
// Create a function that divides one number by another and returns the remainder
function divIt(a,b){
    return a/b;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addJumanji(a,b){
    if(a+b>=51){
        console.alert('Jumanji')
    }else{
        return a+b
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyZebra(a,b,c){
    if(a*b*c %3 == 0){
        console.alert("ZEBRA")
    }
}
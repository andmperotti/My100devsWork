//---Easy
//create a function that subtracts two numbers and alerts the difference
function subDosAlert(a,b){
    alert(a-b)
}
subDosAlert(2,2)
//create a function that divides three numbers and console logs the quotient
function divideTres(a,b,c){
    console.log(a/b/c)
}
divideTres(8,2,2)
//create a function that multiplys three numbers and returns the product
function multiTres(a,b,c){
    return a*b*c
}
console.log(multiTres(1,1,2))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function doThing(a,b,c){
    let firstTwo = a+b;
    return firstTwo/c
}
console.log(doThing(2,2,2))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function doHard(a,b,c,d){
    if( a*b >=101){
        console.log(c+d)
    }else if(a*b<=99){
        console.log(c-d)
    }else{
        alert(a*b*c%d)
    }
}
doHard(2,3,2,3)
//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(a,b){
    alert(a-b)
}
subTwo(5,2)
//create a function that divides three numbers and console logs the quotient
function divideTres(a,b,c){
    return a/b/c
}
console.log(divideTres(5,2,3))
//create a function that multiplys three numbers and returns the product
function multiTres(a,b,c){
    return a*b*c
}
console.log(multiTres(1,2,3))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function doThings(a,b,c){
    return (a+b)%c
}
console.log(doThings(9,3,4))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function doHardThing(a,b,c,d){
    let result = a*b
    if(result >100){
        console.log(c+d)
    }else if(result <100){
        console.log(c-d)
    }else{
        alert((a*b*c)%d)
    }
}
doHardThing(10,10, 2, 2)
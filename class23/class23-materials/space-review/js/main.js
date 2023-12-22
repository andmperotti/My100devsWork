//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let firstSet = [1,2,3,4,5]
alert(firstSet.reduce((acc,cur)=>acc+cur,0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function doFirst(arr){
    return arr.map(e=>e*e)
}
console.log(doFirst([1,2,3,4,5]))
//Create a function that takes string
//Print the reverse of that string to the console
function doSecond(str){
    return str.split('').reverse().join('')
}
console.log(doSecond('andrew'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str){
    return str === doSecond(str)
}
console.log(isPalindrome('poop'))
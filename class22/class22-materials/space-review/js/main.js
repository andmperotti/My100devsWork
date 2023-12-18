//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let ages = [1,2,3,4,5]
alert(ages.reduce((acc,c)=>{
    acc+= c
    return acc
}),0)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function thingy(arr){
    return arr.map(ele=>ele*ele)
}
console.log(thingy[1,2,3])
//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    return str.split('').reverse().join('')
}
console.log(reverseStr('Andrew'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function alertPalindrome(str){
    return str == reverseStr(str)
}
console.log(alertPalindrome('poop'))
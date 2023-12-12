//--- Easy
//create a variable and assign it a number
let age = 37
//minus 10 from that number
age -= 10
//print that number to the console
console.log(age)
//--- Medium
//create a variable that holds a value from the input
let userInput = Number(document.querySelector("#danceDanceRevolution").value)
//add 25 to that number
userInput += 25
//alert that number
alert(userInput)
//--- Hard
//create a variable that holds the h1
let hOne = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
hOne.addEventListener('click', click=>{
    console.log(age + Number(document.querySelector("#danceDanceRevolution").value))
})
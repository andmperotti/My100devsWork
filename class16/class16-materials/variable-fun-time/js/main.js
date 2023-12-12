//--- Easy
//create a variable and assign it a number
let age = 37;
//minus 10 from that number
age -= 10;
//print that number to the console
console.log(age)


//--- Medium
//create a variable that holds a value from the input
// let userInputValue = Number(document.querySelector('#danceDanceRevolution').value)
//input element had a type of text, instead of changing the html to change it to a number we'll just convert user input value to a number
//add 25 to that number
// userInputValue += 25
//alert that number
// alert(userInputValue)


//--- Hard
//create a variable that holds the h1
const hOne = document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
hOne.addEventListener("click", click=>{
    let userInputValue = Number(document.querySelector('#danceDanceRevolution').value)
    userInputValue += 25
    alert(userInputValue)

    console.log(userInputValue + age)
})
//could have wrapped the userInputValue variable with the Number constructer function in line 25
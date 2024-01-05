let result = document.querySelector('#result')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let zero = document.querySelector('#zero')
let decimal = document.querySelector('#decimal')
let equals = document.querySelector('#equals')
let division = document.querySelector('#division')
let multiply = document.querySelector('#multiply')
let addition = document.querySelector('#addition')
let subtraction = document.querySelector('#subtraction')

//anytime a button is pressed it's dispalyed on the result area, other than =, which if pressed evaluates the string

equals.addEventListener('click', e=>{
    result.innerText = result.innerText.replace(/['"]+/g, '')
    setTimeout(()=>result.innerText = '', 5000)
})
//eqauls button takes built string and shows result, clear result after 5 seconds as we don't have a clear button
//I'm thinking to convert a string into a bunch of mathematical equations you'll need to add spaces after each button value and later split the string evaluate what's an operator vs a number and then execute it?
//maybe we can just take off the quotes?

//stack overflow question took me to using replace method to remove the quoatations off our accumulated string.






//code for every other button to have action to add itself into result string

one.addEventListener('click', e=>{
    result.innerText += '1'
})
two.addEventListener('click', e=>{
    result.innerText += '2'
})
three.addEventListener('click', e=>{
    result.innerText += '3'
})
four.addEventListener('click', e=>{
    result.innerText += '4'
})
five.addEventListener('click', e=>{
    result.innerText += '5'
})
six.addEventListener('click', e=>{
    result.innerText += '6'
})
seven.addEventListener('click', e=>{
    result.innerText += '7'
})
eight.addEventListener('click', e=>{
    result.innerText += '8'
})
nine.addEventListener('click', e=>{
    result.innerText += '9'
})

decimal.addEventListener('click', e=>{
    result.innerText += '.'
})
division.addEventListener('click', e=>{
    result.innerText += '/'
})
multiply.addEventListener('click', e=>{
    result.innerText += '*'
})
addition.addEventListener('click', e=>{
    result.innerText += '+'
})
subtraction.addEventListener('click', e=>{
    result.innerText += '-'
})
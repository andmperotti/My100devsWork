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



let resultingValue = ''
//code for every other button to have action to add itself into result string

one.addEventListener('click', e=>{
    result.innerHTML += '1'
    resultingValue += '1'
})
two.addEventListener('click', e=>{
    result.innerHTML += '2'
    resultingValue += '2'
})
three.addEventListener('click', e=>{
    result.innerHTML += '3'
    resultingValue += '3'
})
four.addEventListener('click', e=>{
    result.innerHTML += '4'
    resultingValue += '4'
})
five.addEventListener('click', e=>{
    result.innerHTML += '5'
    resultingValue += '5'
})
six.addEventListener('click', e=>{
    result.innerHTML += '6'
    resultingValue += '6'
})
seven.addEventListener('click', e=>{
    result.innerHTML += '7'
    resultingValue += '7'
})
eight.addEventListener('click', e=>{
    result.innerHTML += '8'
    resultingValue += '8'
})
nine.addEventListener('click', e=>{
    result.innerHTML += '9'
    resultingValue += '9'
})
decimal.addEventListener('click', e=>{
    result.innerHTML += '.'
    resultingValue += '.'
})

//I just recalled that we have made similar calculators using objects to store operators. So I'll add to each below event function below the displayign of the operator chosen the logic being called from an operator.




division.addEventListener('click', e=>{
    result.innerHTML += '/'
    resultingValue += '/'
})
multiply.addEventListener('click', e=>{
    result.innerHTML += '*'
    resultingValue += '*'
})
addition.addEventListener('click', e=>{
    result.innerHTML += '+'
    resultingValue += '+'
})
subtraction.addEventListener('click', e=>{
    result.innerHTML += '-'
    resultingValue += '-'
})
//added spaces around the operators so we can have the program differentiate numbers from operators when we split the string, using the space as the delimiter/spacer
//space after the operator symbols isn't being added


// equals.addEventListener('click', e=>{
//     let splitEquation = result.innerText.split(' ')
//     let op = splitEquation[1]
//     let a = +splitEquation[0]
//     let b = +splitEquation[2]
//     console.log(op)
//     console.log(a)
//     console.log(b)

//     let mathOps = {
//         '+' : (a,b)=>a+b,
//         '-' : (a,b)=>a-b,
//         '*' : (a,b)=>a*b,
//         '/' : (a,b)=>a/b
//     }
//     result.innerText = mathOps[op](a,b)
// })
//anytime a button is pressed it's dispalyed on the result area, other than =, which if pressed evaluates the string


//eqauls button takes a built string and shows result, clear result after 5 seconds as we don't have a clear button
//I'm thinking to convert a string into a bunch of mathematical equations you'll need to add spaces after each button value and later split the string evaluate what's an operator vs a number and then execute it?
//maybe we can just take off the quotes?

//stack overflow question took me to using replace method to remove the quoatations off our accumulated string, but it doesn't work the way I want it to so...

//Ok I'm changing the values that each number button adds into the results.innerText from strings to numbers; '9' to 9

//This methods of operators wouldn't be so bad but we have another problem arising, what if a user of the calculator enters more equations than one at the same time; like 9+9x2 ? we have no logic for that
//This is why I think it would be better to create one long string then when they press = that string is converted into a statemenet that evaluates using pemdas to the total, but I haven't been able to figure it out yet.

equals.addEventListener('click', e=>{
    result.innerHTML = Number(resultingValue.substring(1,resultingValue.length-1))
})

//maybe innerText always implies a string and I should be using innerHTML instead? I will convert all uses of innerText to innerHTML and see what happens.
//I still recieved NaN from passing '1+1' into Number() 
//I'm going to build a variable that exists away from element properties, then use that at the end instead of using the string built by innerText/innerHTML
//that didn't work either, I'd like to find a way to just remove the quotations from around the string resulting in it becoming a statement

//Ok I give up, I will look later at other ways to solve this.
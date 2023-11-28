//https://thejsway.net/chapter01/

/*Coding time!
Let's put your brand new coding skills into practice.

Presentation
Write a program that displays your name and age.
*/

let fName = 'drew';
let hometown = 'san bruno'

console.log(fName)
console.log(hometown)

/* Minimalistic calculator
Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
*/

console.log(6/3)

/*
Values prediction
Observe the following program and try to predict the values it displays.

console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
Check your prediction by executing it.
*/

//9
//'4 + 5'
//'45'

console.log(4+5);
console.log("4 + 5");
console.log("4" + "5")



//https://thejsway.net/chapter02/
/*
Improved hello
Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
*/
let userFirstName = prompt("What is your first name? ")
let userLastName = prompt("What is your last name? ")
console.log(`Nice to meet you ${userFirstName} ${userLastName}`)


/*
Final values
Observe the following program and try to predict the final values of its variables.

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
Check your prediction by executing it.
*/

//a is going to be 2; assigned 2, decremented by one, incremented once
//b is going to be 10, assigned 8 at declaration then incremented by 2 with the += operators
//c is going to be 102, b*b then add a
//d is going to be 30, 2*10 then + 10
//e is going to be 40, 10+10 then times 2
//f is going to be 10, 2times 10 then divide that by 2
//g is going to be 10, 10 divided by 2, then multiply that result by 2
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

/*VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.*/
function vatPrice(){
    let stickerPrice = Number(prompt("How much is the item before Vat? "))
    return stickerPrice+stickerPrice*.206
}
console.log(vatPrice(10))
//i had forgotten about converting the value after asking the user for it; prompt always returns string


/*
From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

Info

The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
*/

function convertCtoF(){
    let celsius = Number(prompt("What temperature in Celsius would you like to convert to farenheit? "))
    return celsius*(9/5)+32
}
console.log(convertCtoF());


/*
Variable swapping
Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5
Add the necessary code to swap the values of variables number1 and number2.

Tip

This exercise has several valid solutions. You may use more than two variables to solve it.
*/

let number1 = 5;
let number2 = 3;

let tempHolder = number1;
number1 = number2;
number2 = tempHolder


console.log(number1); // Should show 3
console.log(number2); // Should show 5
//https://thejsway.net/chapter01/

/*Coding time!
Let's put your brand new coding skills into practice.

Presentation
Write a program that displays your name and age.
*/

// let fName = 'drew';
// let hometown = 'san bruno'

// console.log(fName)
// console.log(hometown)

/* Minimalistic calculator
Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
*/

// console.log(6/3)

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

// console.log(4+5);
// console.log("4 + 5");
// console.log("4" + "5")



//https://thejsway.net/chapter02/
/*
Improved hello
Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
*/

// let userFirstName = prompt("What is your first name? ")
// let userLastName = prompt("What is your last name? ")
// console.log(`Nice to meet you ${userFirstName} ${userLastName}`)


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


// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);






/*VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.*/
// function vatPrice(){
//     let stickerPrice = Number(prompt("How much is the item before Vat? "))
//     return stickerPrice+stickerPrice*.206
// }
// console.log(vatPrice(10))
//i had forgotten about converting the value after asking the user for it; prompt always returns string







/*
From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

Info

The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
*/

// function convertCtoF(){
//     let celsius = Number(prompt("What temperature in Celsius would you like to convert to farenheit? "))
//     return celsius*(9/5)+32
// }
// console.log(convertCtoF());







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

// let number1 = 5;
// let number2 = 3;

// let tempHolder = number1;
// number1 = number2;
// number2 = tempHolder


// console.log(number1); // Should show 3
// console.log(number2); // Should show 5









//https://thejsway.net/chapter03/
/*
Coding time!
Here are a few pieces of advice about these exercises:

Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to if, else and switch statements.

Try to find alternative solutions. For example, one using an if and another using a switch.

Test your programs thoroughly, without fear of finding mistakes. It's a very important skill.

Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
*/

// let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
// // let userDay = prompt("What day is today? ")
// // userDay = userDay.toLowerCase()
// let userDay = 'monday'
// if(days.includes(userDay)){
//     console.log(`${days[days.indexOf(userDay)+1]}`)
// }else{
//     console.log("The spelling must have been off")
// }
//would be better to put this inside a function that way if the else is invoked you could re invoke the function to ask the user for additional input. So here we go:

// function whatsTomorrow(){
//     let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
//     // let userDay = prompt("What day is today? ")
//     // userDay = userDay.toLowerCase()
//     let userDay = 'monday'
//     if(days.includes(userDay)){
//         console.log(`${days[days.indexOf(userDay)+1]}`)
//     }else{
//         console.log("The spelling must have been off")
//         whatsTomorrow()
//     }
// }
// whatsTomorrow()



/*
Number comparison
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
*/


// function whatsWhat(a,b){
//     if(a>b){
//         console.log(`${a} is greater than ${b}`)
//     }else if(b>a){
//         console.log(`${b} is greater than ${a}`)
//     }else{
//         console.log(`${a} is equal to ${b}`)
//     }
// }
// whatsWhat()





/*
Final values
Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

Initial values  nb1 final value nb2 final value nb3 final value
nb1=nb2=nb3=4           
nb1=4,nb2=3,nb3=2           
nb1=2,nb2=4,nb3=0           
Check your predictions by executing the program.
*/


//if nb1 > nb2 then nb1 will be reassigned the value of nb3 times 2
//else add 1 to nb1 and check if nb2 is greater than nb3, if so then nb1 will get incremented by the result of nb3 times 3, else nb1 is changed to zero and nb3 is changed to itself times 2 then adding nb2's value to it.
//then finally log all 3 values

//if all of the paramters receive 4 then...
//nb1 gets 1 added to it which makes it 5 and the others are still 4, then nb1 gets changed to zero and nb3 is now 4*2 then plus nb2 which is 4, so nb3 is 12, nb1=0 nb2=4 nb3=12 //this is correct

//if nb1=4, nb2=3, nb3=2:
//nb1 is greater than nb2 so: nb1 now equals nb3 *2 which is 2*2; nb1=4, nb2=3, nb3=2 //this is correct

//if nb1=2, nb2=4, nb3=0
//nb1 gets incremented by 1; nb1=3 now, nb2 is greater than nb3 so nb1 gets nb3*3 added to it so: 3+(0*3) = 3; so nb1=3, nb2=4, nb3=0 //this is correct






/*
Number of days in a month
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
*/

// function daysInMonth(){
//     let month = prompt("What month is it, give me a number; 1==January, 12==December? ")
//     if(month>0&&month<13){
//         if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
//             console.log('There are 31 days in your month')
//         }else if(month==2){
//             console.log("There are 28 days in your month")
//         }else if(month==4||month==6||month==9||month==11){
//             console.log("Your month has 30 days")
//         }else{
//             console.log("ERROR")
//         }
//     }else{
//         console.log("That didn't work try again, you must have entered a number not between and including 1 and 12")
//         daysInMonth()
//     }
// }
// daysInMonth()




/*
Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s should give 14h18m0s
6h59m59s should give 7h0m0s
23h59m59s should give 0h0m0s (midnight)
*/

// function getNextSecond(){
//     let hour = Number(prompt("Give me the number of hours you're at right now, should be between and including 0 and up to 24 (Don't use zeros to prefix): "))
//     let minute = Number(prompt("Give me the number of minutes you're at right now, should be somwhere starting at 0 and up to but not including 60 (Don't use zeros to prefix): "))
//     let second = Number(prompt("Give me the number of seconds you're at right now, should be somwhere starting at 0 and up to but not including 60 (Don't use zeros to prefix): "))
//     if(hour<0||hour>23||second<0||second>59||minute<0||minute>59){
//         console.log("You entered a wrong number, please try again")
//     }else{
//         if(hour==23&&minute==59&&second==59){
//             hour=0
//             minute=0
//             second=0
//             return `The time is now ${hour}:${minute}:${second}`
//         }else{
//             second++;
//             if(second==60){
//                 second=0
//                 minute++
//                 if(minute==60){
//                     minute = 0
//                     hour++
//                 }
//             }
//             return `The time is now ${hour}:${minute}:${second}`
//         }
//     }
// }

// getNextSecond()
//I tried to call the function in the if that caught incorrect input values, but for some reason after it reran it would not output the next time, maybe in the future I can learn  this situation over.





//https://thejsway.net/chapter04/

/*
Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.

Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.
*/

// function forCarousel(){
//     for(let i = 1; i<=10; i++){
//         console.log(i)
//     }
// }
// forCarousel()

// function whileCarouselUser(){
//     let number = 10;
//     while(number>0){
//         console.log(`There are ${number-1} turns left`)
//         number--;
//     }
// }
// whileCarouselUser()





/*
Parity
Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

Info

This program must show exactly 10 numbers including the first one, not 11 numbers!
*/

// function isEven(){
//     for (let i = 1; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(`${i} is even`);
//         }
//     }
// }
// isEven()

// function isEvenOrOdd(){
//     for(let i=1; i<=10; i++){
//         if(i % 2==0){
//             console.log(`${i} is even`)
//         }else {
//             console.log(`${i} is odd`)
//         }
//     }
// }
// isEvenOrOdd()

// function userNumberEvenOrOdd(){
//      let userValue = prompt("Give me a number and I'll tell you if the numbers leading up to it are even or odd: ")
//          for(let i=1; i<=userValue; i++){
//             if(i % 2==0){
//                 console.log(`${i} is even`)
//             }else {
//                 console.log(`${i} is odd`)
//             }
//         }
// }
// userNumberEvenOrOdd()






/*
Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.
*/

// function isValueUnderOneHundredOne(){
//     let userValue = prompt("Give me a value less than or equal to 100: ")
//     if(userValue<=100){
//         console.log("Thanks")
//     }else{
//         isValueUnderOneHundredOne()
//     }
// }
// isValueUnderOneHundredOne()

// function isValueBetween(){
//     let userValue = prompt("Give me a between 50 and 100: ")
//     if(userValue>50 && userValue<100){
//         console.log("Thanks")
//     }else{
//         isValueBetween()
//     }
// }
// isValueBetween()




/*
Multiplication table
Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
*/

// function makeAndReturnMultiplicationTable(){
//     let userValue = prompt("Give me a number, and I'll build a multiplication table for that value: ")
//     for(let i = 0; i<=10; i++){
//         console.log(`${i} times ${userValue} equals ${i*userValue}`)
//     }
// }
// makeAndReturnMultiplicationTable()

// function multiplicateBetweenTwoAndNine(){
//     let userValue = prompt("Give me a number between 2 and 9, and I'll build a multiplication table for that value: ")
//     if(userValue>2&&userValue<9){
//         for(let i = 0; i<=10; i++){
//             console.log(`${i} times ${userValue} equals ${i*userValue}`)
//         }
//     }else{
//         console.log('Your number was not between 2 and 9')
//         multiplicateBetweenTwoAndNine()
//     }
// }
// multiplicateBetweenTwoAndNine()






/*
Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.
*/

// function yesNorNo(){
//     let userValue = prompt("Enter some text: ")
//     while((userValue !== 'yes') && (userValue!== 'no')){
//         console.log("Thanks, give me some more text, reply with 'yes' or 'no' without the quotations to end: ")
//         userValue = prompt("Enter some text: ")
//     }
// }
// yesNorNo()

//for some reason this always confuses me and I use the || operator instead of the and &&...

/*
FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

Note

This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!
*/

// function fizzBuzz(){
//     for(let i = 1; i<=100; i++){
//         if((i%5==0) &&(i%3==0)){
//             console.log("FizzBuzz")
//         }else if(i%3==0){
//             console.log("Fizz")
//         }else if(i%5==0){
//             console.log("Buzz")
//         }else{
//             console.log(`${i}`)
//         }
//     }
// }
// fizzBuzz()

// function fizzBuzz(){
//     let number =1
//     while(number<=100){
//         if((number%5==0) &&(number%3==0)){
//             console.log("FizzBuzz")
//             number++
//         }else if(number%3==0){
//             console.log("Fizz")
//             number++

//         }else if(number%5==0){
//             console.log("Buzz")
//             number++
//         }else{
//             console.log(`${number}`)
//             number++
//         }
//     }
// }
// fizzBuzz()




//https://thejsway.net/chapter05/

/*
Coding time!
Improved hello
Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result
*/

// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   return message;
// }
// let firstName = prompt("Tell me your first name: ")
// let lastName = prompt("Tell me your last name: ")

// sayHello(firstName, lastName)





/*
Number squaring
Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
}

// Square the given number x
const square2 = x => // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
When it's done, update the program so that it shows the square of every number between 0 and 10.

Info

Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don’t you? ;)
*/


// // Square the given number x
// function square1(x) {
//     return x*x;
// }

// // Square the given number x
// const square2 = x => x*x;

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25


//When it's done, update the program so that it shows the square of every number between 0 and 10.

// function square1(x) {
//     return x*x;
// }
// function loopSquare(){
//     for(let i = 0; i<=10; i++){
//         console.log(square1(i))
//     }
// }
// loopSquare()





/*
Minimum of two numbers
Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
*/

// function findMin(a,b){
//     if(a<b){
//         return a
//     }else if(b<a){
//         return b
//     }
// }
// console.log(findMin(4.5,5))



/*
Calculator
Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
*/

// function calculator(a, op, b){
//     if(op=='+'){
//         return a+b
//     }else if(op=='-'){
//         return a-b
//     }else if(op=='*'){
//         return a*b
//     }else if(op=='/'){
//         return a/b
//     }
// }
// console.log(calculator(4, '+', 6))






/*
Circumference and area of a circle
Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3
*/

// function calcCircleArea(radius){
//     return Math.PI* (radius**2)
// }
// console.log(calcCircleArea(2))

// function calcCircleCircumference(radius){
//     return 2*(Math.PI * radius)
// }
// console.log(calcCircleCircumference(2))
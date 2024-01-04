//https://javascript.info/object#hello-object
/*
Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
/*my answer:*/
// let user = {};
// user.name = "John";
// user.surname = 'Smith';
// user.name = "Pete";
// delete user.name;
// console.log(user)




/* task separation line*/




/*
Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

/*my answer:*/
// function isEmpty(obj){
// 	for(let key in obj){
// 		return false
// 	}
// 	return true
// }
// let schedule = {};
// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false

//I had to look at the solution here which makes sense right away, I was trying to use ternary operator to check for obj being === an empty obj; {}, and tried to use the outcome of Object.keys(obj) with ternary to equal an empty array. 
//Their solution is simply iterate if there are keys and return false, otherwise (if no keys) no iteration and return false.
//I'm going to add this to my Anki deck of challenge questionsl.


/* task separation line*/


/*Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.*/

/*my answer:*/
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function calculateKeyValues(obj){
// 	let result = 0;
// 	for(let employee in obj){
// 		result += obj[employee]
// 	}
// 	return result
// }
// console.log(calculateKeyValues(salaries))

//honestly made some mistakes but caught them before ever thinking about clicking solution, like using dot operator instead of square brackets (we have to use them because employee is a variable that is holding the name of each key (John, Ann, Pete))




/* task separation line*/




/*
Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/

/*my answer:*/
// function multiplyNumeric(obj){
// 	for(let key in obj){
// 		if(typeof obj[key]=== 'number'){
// 			obj[key] *=2
// 		}
// 	}
// }
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu)
// console.log(menu)


/* task separation line*/





//https://javascript.info/object-methods
/*
Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
*/


/*my answer:*/
//If you only tried to access ref, you'd get back a global object becaue it wasn't in a method and since it wasn't I believe it accessed the scope outside of the makeUser scope thus the global scope
//I'm still not 100% sure of everything going on but hope to find another resource that will make it click.





/* task separation line*/



/*
Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*my answer:*/
// let calculator = {

// 	read: function(){
// 		this.a = Number(prompt("give me a value: "))
// 		this.b = Number(prompt("give me a value: "))
// 	},
// 	sum: function(){
// 		return this.a+this.b
// 	},
// 	mul: function(){
// 		return this.a * this.b
// 	}
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//My code works but I did forget you could just add a + symbol prefacing prompt to turn the input into a number (prompt by default saves input as a string)
/*separation line for tasks*/


/* separator for tasks*/

/*
Chaining
importance: 2
There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Such approach is widely used across JavaScript libraries.
*/

/*my answer:*/

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this
//   },
//   down() {
//     this.step--;
//     return this
//   },
//   showStep: function() { // shows the current step
//     console.log( this.step );
//     return this
//   }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

//I'm actually unsure of what to do to allow chaining these methods, I did try to return each call instead of just incrementing or decrementing.
//ah yes the solution was to return this inside each method that way you can then call the next method that is chained





//https://javascript.info/constructor-new

/*
Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code.
*/

//If I recall correctly this won't result in equality because you are creating 2 totally indpendent and different objects even if they have the same values. You could however, from which I've previously read, create a function that checks for deep equality. 
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

console.log( a == b ); // true

//I looked at the solution and now I see what they're asking me is different from what I thought they were asking. They did what I said would equal equality. They stated an object ({}). then told function a and b to return that object, the new as far as I know just creates copies of the original 'obj' object.




/* task separator */

/*
Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

// function Calculator(){
// 	let a = 0;
// 	let b = 0;
// 	this.read = function(){
// 		a = Number(prompt("Give me a value: "));
// 		b = Number(prompt("Give me a value: "));
// 	},
// 	this.sum = function(){
// 		return a+b
// 	},
// 	this.mul = function(){
// 		return a*b
// 	}
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

//no problems with this one.




/* excercise separator */


/*
Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
*/

function Accumulator(startingValue){
	this.value = startingValue;
	this.read = function(){
		this.value += Number(prompt("Give me a value to add: "))
	}
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

//Only hiccup is that I forgot to preface value inside the read method with this
//everything else for perfectly fine





//https://javascript.info/optional-chaining

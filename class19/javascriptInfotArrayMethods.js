//https://javascript.info/array-methods
/*
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(str){
	return str.split('-').map((ele,index)=>index>0 ? ele[0].toUpperCase() + ele.slice(1) : ele).join('')
}
console.log(camelize('border-left-width'))
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

//I didn't look at the solution as my results are what their examples results showed.


console.log('') //to separate lines from this and the next task

/*
Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
*/

function filterRange(arr, a, b){
	return arr.filter(ele=>ele>=a&&ele<=b)
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);


console.log( arr ); // 5,3,8,1 (not modified)
console.log( filtered ); // 3,1 (matching values)
//I swapped these around so we now have original array listed first, then the result of the function second aka the filtered array.

console.log('') //to separate lines from this and the next task

/*
Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/

let sortArr = [5, 2, 1, -10, 8];

sortArr.sort((a,b)=>{
	return b-a
})

console.log( sortArr ); // 8, 5, 2, 1, -10

console.log('') //to separate lines from this and the next task


/*
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

let originalArr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
	return arr.slice().sort()
}

let sorted = copySorted(originalArr);

console.log( originalArr ); // HTML, JavaScript, CSS (no changes)
console.log( sorted ); // CSS, HTML, JavaScript


console.log('') //to separate lines from this and the next task


/*
Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
*/

function Calculator(){
	this.methods = {
		'+': (a,b)=>a+b,
		'-': (a,b)=>a-b
	}
	this.calculate = function(str){
		let strSplit = str.split(" ")
		numOne = Number(strSplit[0])
		operator = strSplit[1]
		numTwo = Number(strSplit[2])
		return this.methods[operator](numOne, numTwo)
	}
	this.addMethod = function(name, func){
		this.methods[name]= func
	}
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

//I did not get this right until I looked at solutions, the only problems I was having is that I was using dot operators when I should have been using brackets to access the operator from the methods object. I'll revisit this in 30 minutes, and I'll also add it to my anki deck.
//I took a 30 minute break, came back coded it out from memory, and this time the only things that caused me problems were using this instead of let in front of the methods object that held the operator function pairs. So I'll add that to an Anki card as well; when using constructors there's no need for using let or const, but do use this keyword to link this object to the object calling it.



console.log('') //to separate lines from this and the next task


/*
Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
/*
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(ele=>({
	fullName: `${ele.name} ${ele.surname}`,
	id: ele.id
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

//I used = where I should have used :, I tried to omit the paragraphs that I thought were around the {}'s but they were suposed to be there, I tried to use a return ele, like a reducer would but again that wasn't right. This same task is already in my Anki from prevous readings of this resource. I wll continune to go over it.

console.log('') //to separate lines from this and the next task


/*
Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

function sortByAge(arr){
	arr.sort((a,b)=>a.age - b.age)
}

let johnB = { name: "John", age: 25 };
let peteB = { name: "Pete", age: 30 };
let maryB = { name: "Mary", age: 28 };

let usersToSort = [ peteB, johnB, maryB ]; //added B's because these same variables exist above in another excercise

sortByAge(usersToSort);

// now: [john, mary, pete]
console.log(usersToSort[0].name); // John
console.log(usersToSort[1].name); // Mary
console.log(usersToSort[2].name); // Pete

//I didn't have the .age on my a or b so of course mine was not sorting correctly.


console.log('') //to separate lines from this and the next task

/*
Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/

function shuffle(array){
	let results = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2]]
	console.log(results[Math.floor(Math.random()*6)])
}
let numsArr = [1, 2, 3];

shuffle(numsArr);
// arr = [3, 2, 1]

shuffle(numsArr);
// arr = [2, 1, 3]

shuffle(numsArr);
// arr = [3, 1, 2]
// ...

//So this one is very hard and after reading their "solution" I'm even more confused, so that's great.
//What I tried to do was create a list of possible outcomes of shuffling the elements in the array and then pull a random one using Math.random and rounding it down to be zero indexed using Math.floor()


console.log('') //to separate lines from this and the next task


/*
Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

// function getAverageAge(users){
// 	let totalAges = 0;
// 	users.forEach(ele=>totalAges+=ele.age)
// 	return totalAges/users.length
// }

function getAverageAge(users){
	return users.reduce((prev, user)=>prev+user.age, 0) /users.length
}

let johnAge = { name: "John", age: 25 };
let peteAge = { name: "Pete", age: 30 };
let maryAge = { name: "Mary", age: 29 };

let arrAge = [ johnAge, peteAge, maryAge ];

console.log( getAverageAge(arrAge) ); // (25 + 30 + 29) / 3 = 28

//I see now that in the solutions I could have used a reduce method to calculate the total and return that total divided by users .length, i'm going to try to not look at that code and write my own above.
//I forgot to add the age property/key the first call


console.log('') //to separate lines from this and the next task


/*
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  /* your code 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/


function unique(arr){
	return arr.filter((ele,i)=>!arr.slice(0,i).includes(ele))
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings))

//my code is actually shorter than their solution and has the same result. My program uses the filter method to iterate through each element and checks to see if that element doesn't exist in the array span before and including its index.
//I did mess up the first time and wrote it without the not operator and then tried it with it, as in the first time I eliminated non repeated elements

console.log('') //to separate lines from this and the next task

/*
Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.
*/

function groupById(arr){
	return arr.reduce((acc, ele)=>{
		acc[ele.id] = ele;
		return acc
	},{})
}
let usersToGroup = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
let usersById = groupById(usersToGroup)
console.log(usersById)

//I've actually done this one before as well and have been practicing it but still had some problems; I forgot to return the accumulating object during each iteration.
//It will stay in my anki
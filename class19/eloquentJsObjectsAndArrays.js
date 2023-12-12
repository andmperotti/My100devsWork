//https://eloquentjavascript.net/04_data.html#h_TcUD2vzyMe
/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/

function range(start, end, step=1){
	let total = [];
	if(start<end){
		for(let i = start; i<=end; i+=step){
			total.push(i)
		}
	}else if(start>end){
		for(let i = start; i>=end; i+=step){
			total.push(i)
		}
	}
	return total
}

function sum(numArr){
	let total = 0;
	for(let i = 0; i<numArr.length; i++){
		total+=numArr[i]
	}
	return total
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//I did have to look at the hints after a while, I was trying to use conditions of steps value, but it was if the start or end was greater.

console.log();//code to separate results from each excercise

/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/
function reverseArray(arr){
	let newArr = arr.slice()
	for(let i = 0; i <=Math.floor(newArr.length/2); i++){
		let tempLeft = newArr[i];
		newArr[i] = newArr[newArr.length-1-i]
		newArr[newArr.length-1-i] = tempLeft
	}
	return newArr
}
function reverseArrayInPlace(arr){
	for(let i = 0; i<=Math.floor(arr.length/2); i++){
		let tempLeft = arr[i];
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = tempLeft
	}
	return arr
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//I didn't have to look at the hints but had to play around with the condition in each loop and the index position of the right side of the array element to swap to the left.

console.log();//code to separate results from each excercise

/*
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

//build up a list like structure:
function arrayToList(arr){
	let list = {}
	for(let i = arr.length-1; i>=0; i--){
		Object.assign(list, {value: arr[i], rest: list})
	}
	return list
}
//produces an array from a list
function listToArray(list){

}
//helper function, takes an alement and a list and creates a new list that adds the element to the front of hte input list, 


//and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element



//also write a recursive version of nth if you haven't already


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//

console.log();//code to separate results from each excercise

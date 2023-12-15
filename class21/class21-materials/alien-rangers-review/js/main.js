//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['brooklyn 99', 'community', 'parks and recreation']
shows.forEach(e=>console.log(e))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [28, 99, 69, 18]
let evens = nums.filter(e=>e%2==0)
console.log(evens)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function doThing(arr){
    let sortedArr = arr.sort((a,b)=>a-b)
    alert(sortedArr[1]+sortedArr[sortedArr.length-2])
}
doThing([1,2,3,4,5])
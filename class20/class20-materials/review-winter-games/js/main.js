//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function doThing(arr){
    let result = [];
    arr.forEach(e=>{
        if(e%2 == 0){
            result.push(e)
        }
    })
    return result
}

//can try with map, or without map or filter
console.log(doThing([1,2,3,4,5,6,7,8,9,10]))
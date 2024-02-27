//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function doThing(arr){
    alert(arr.reduce((acc,ele)=>acc*=ele))
}
doThing([2,3,4])

//by not starting with an initial value (,0) reduce will use the first value as the initial
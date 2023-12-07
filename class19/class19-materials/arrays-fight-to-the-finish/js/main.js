//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["la la land", "moonlight", "dune"]
movies.forEach((ele, i)=>{
    document.querySelector('h2').innerText += ele
})

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1,2,3]
nums.forEach((ele,i)=>{
    nums[i]+=3
    // ele+=3
})
console.log(nums)
//Find the average of all the numbers from question three
let average = nums.reduce((total, each)=>total+each, 0) / nums.length
console.log(average)

//or

let sum = 0; 
nums.forEach((ele, i)=>sum+=ele)
let avg = sum/nums.length
console.log(avg)
// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let chill;
chill = 'sushi';
alert(chill)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let myName;
myName = 'andrew';
alert(myName[1])
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function doThis(a,b,c){
    alert((a/b)*c)
}
doThis(2,2,2)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function doThat(a){
    console.log(Math.cbrt(a).toFixed(4))
}
doThat(2)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function doSquat(month){
    month=month.toLowerCase();
    if(month='june'||month=='july'||month=='august'){
        alert("YAY")
    }else{
        alert("Booo")
    }
}
doSquat('july')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loopNum(num){
    for(let i = 0; i<=num; i++){
        if(i%5 !== 0){
            console.log(i)
        }
    }
}
loopNum(10)
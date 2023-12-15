// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'mangonada          '
console.log(favDrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = "I don't like apple but I do like mangos"
let splitWords = words.split(" ")
console.log(splitWords.includes('apple'))
//leons:
if( words.search('apple') !==-1){
    console.log('yes')
}else{
    console.log('no')
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor(){
    let result = Math.random()
    if(result<0.333){
        return 'rock'
    }else if(result < 0.666){
        return 'paper'
    }else if(result < 1){
        return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRockPaperScissors(choice){
    let result = rockPaperScissor()
    if(choice===result){
        return 'tie'
    }else if((choice == 'rock' && result =='paper')||(choice == 'paper' && result == 'scissors')||(choice == 'scissors' && result == 'rock')){
        return 'you lose'
    }else{
        return 'you win'
    }
}
console.log(playRockPaperScissors())
//My code had 3 else ifs for each possibility of losing, but Leon showed that you can combine them with logical or's like this ^.


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playMultiple(arr){
    arr.forEach(e=>console.log(playRockPaperScissors(e)))
}
playMultiple(['rock', 'rock', 'scissors', 'paper'])
// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'is andrew a  person?'
if(sentence.endsWith('?')){
    alert(sentence)
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let otherThing = 'This company is looking to hire a jr. dev, the jr. dev will be payed market rate'
console.log(otherThing.replaceAll('jr. dev', 'software engineer')
)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperOrScissors(){
    let result = Math.random()
    switch(true){
        case result < .333:
            return 'rock';
            break;
        case result < .666:
            return 'paper';
            break;
        default:
            return 'scissors';
            break;
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRockPaperScissors(choice){
    let opponentChoice = rockPaperOrScissors()
    if((choice === 'paper' && opponentChoice === 'scissors')||(choice === 'rock' && opponentChoice === 'paper')||(choice === 'scissors' && opponentChoice==='rock')){
        return 'you lost'
    }else if(opponentChoice === choice){
        return 'tie'
    }else{
        return 'you win!'
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playThisSet(x){
    for(let i = 0; i<=x.length-1; i++){
        console.log(playRockPaperScissors(x[i]))
    }
}
playThisSet(['rock', 'rock'])
let deck; //I had correctly thought about setting up the deck before any click functions
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res=>res.json())
  .then(data=>{
    // console.log(data) //to get deck id
    deck = data.deck_id
  })
  .catch(err=>`error: ${err}`)

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  let playerOneCard;
  let playerTwoCard;

  console.log(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
  fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      playerOneCard = data.cards[0]
      document.querySelector('#player1').src = playerOneCard.image
      playerTwoCard = data.cards[1]
      document.querySelector('#player2').src = playerTwoCard.image
      let playerOneScore;
      let playerTwoScore;
      //score logic and tie logic
      if(convertToNum(playerOneCard.value)> convertToNum(playerTwoCard.value)){
        document.querySelector('#result').innerText = 'Result: Player 1 wins!'
        playerOneScore +=1
      }else if(convertToNum(playerOneCard.value) < convertToNum(playerTwoCard.value)){
        document.querySelector('#result').innerText = 'Result: Player 2 wins!'
        playerTwoScore +=1

      }else{ //war
        document.querySelector('#result').innerText = `Result: WAR`
      }
    })
}


function convertToNum(val){
  if(val==='ACE'){
    return 14
  }else if(val==='KING'){
    return 13
  }else if(val==='QUEEN'){
    return 12
  }else if(val==='JACK'){
    return 11
  }else{ //in case its not a face card
    return +val //I think leon will catch this later, but right now he's returning a string, he did later catch it
  }
}




//localStorage this for homework?
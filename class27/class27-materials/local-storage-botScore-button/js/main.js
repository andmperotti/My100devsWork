//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
 }
 //if it doesn't exist then set it
//

const button = document.querySelector('button')
button.addEventListener('click', addOne)

function addOne(){
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal+=1
    localStorage.setItem('botScore', botScoreVal) //You can just pass botScoreVal+=1, cannot pass to the value the call and then add; Number(localStorage.getItem('botScore)+=1)
    document.querySelector('h2').innerText = localStorage.botScore
}
//Confused me to where we were supposed to convert the value to a number but I just kept playing with it and then was like, oh wait we're using botScoreVal to increment so the code that sets that value should be nested with a Number() constructor.
//and then leon went ahead and nested the getItem call with the Number constructor
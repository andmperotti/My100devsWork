/*leon:*/
// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue


// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }






/* mine: */
// const purple = document.querySelector("#purple")
// const green = document.querySelector("#green")
// const blue = document.querySelector("#blue")

// purple.addEventListener('click', e=>{
//   e.preventDefault;
//   document.querySelector("body").style.backgroundColor = 'purple'
// })

// green.addEventListener('click', e=>{
//   e.preventDefault;
//   document.querySelector("body").style.backgroundColor = 'green'
// })

// blue.addEventListener('click', e=>{
//   e.preventDefault;
//   document.querySelector("body").style.backgroundColor = 'blue'
// })




//next use onclick
document.querySelector("#purple").onclick = makePurp;
document.querySelector("#green").onclick = makeGreen;
document.querySelector("#blue").onclick = makeBlue;
document.querySelector("#random").onclick = makeRandom;


function makePurp(){
  document.querySelector("body").style.backgroundColor = 'rgb(222, 79, 239)';
  document.querySelector('body').style.color = 'white';
}

function makeGreen(){
  document.querySelector("body").style.backgroundColor = 'rgb(116, 249, 107)';
  document.querySelector('body').style.color = 'white';
}

function makeBlue(){
  document.querySelector("body").style.backgroundColor = 'rgb(116, 250, 253)';
  document.querySelector('body').style.color = 'white';

}

function makeRandom(){
  document.querySelector("body").style.backgroundColor = 'rgb(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255))';
  document.querySelector('body').style.color = 'black';
  document.querySelector("#random").style.color = "black"

}
//Can't seem to make this random work :(













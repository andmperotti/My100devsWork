// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }






const result = document.querySelector("#placeToPutResult")

let total = 0;

document.querySelector("#pumpkin").onclick = pumpZero

function pumpZero(){
  total = 0;
  result.innerText = `${total}`;
}

document.querySelector("#dominosPizza").onclick = dominoTres

function dominoTres(){
  total +=3;
  result.innerText = `${total}`
}

document.querySelector("#zebra").onclick = zebraNine

function zebraNine(){
  total += 9;
  result.innerText = `${total}`
}

document.querySelector("#cantThinkOfAnything").onclick = negTwo

function negTwo(){
  total -= 2;
  result.innerText = `${total}`
}

document.querySelector("#random").onclick = doRandom

function doRandom(){
  total += Math.ceil(Math.random()*100);
  result.innerText = `${total}`
}
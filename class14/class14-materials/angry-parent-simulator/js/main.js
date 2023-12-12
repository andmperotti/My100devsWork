// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }



// const yell = document.querySelector("#yell")

// const output = document.querySelector("#placeToYell")

// yell.addEventListener("click", yeller)

// function yeller(){
//   const fName = document.querySelector("#firstName").value 
//   const fmName = document.querySelector("#firstMiddle").value 
//   const lmName = document.querySelector("#lastMiddle").value 
//   const lName = document.querySelector("#lastName").value 

//   output.innerText = `${fName} ${fmName} ${lmName} ${lName} why you little!`



// }

const yell = document.querySelector("#yell")

yell.addEventListener("click", click=>{
  let fName = document.querySelector("#firstName").value 
  let fMiddle = document.querySelector("#firstMiddle").value 
  let lMiddle = document.querySelector("#lastMiddle").value 
  let lName = document.querySelector("#lastName").value 

  document.querySelector("#placeToYell").innerText = `${fName} ${fMiddle} ${lMiddle} ${lName}`
  document.querySelector("body").style.backgroundColor = 'gray'
})






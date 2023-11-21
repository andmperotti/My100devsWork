// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

  // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`}

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










const yell = document.querySelector('#yell')
yell.onclick = yellAtThem;

function yellAtThem(){
  let firstName = document.querySelector("#firstName").value
  let firstMiddleName = document.querySelector("#firstMiddle").value 
  let lastMiddleName = document.querySelector("#lastMiddle").value 
  let lastName = document.querySelector("#lastName").value 

  document.querySelector("#placeToYell").innerText = `${firstName} ${firstMiddleName} ${lastMiddleName} ${lastName} you done messed up!`

  setTimeout(()=>{
    document.querySelector("#placeToYell").style.color = 'gray'
  }, 5000)
  setTimeout(()=>{
    document.querySelector("#placeToYell").style.color = 'white'
  }, 10000)
}
//Added coloring of the yelling text to make it seem as the voice is running out of breath = changes to gray, runs out of breath = changes it to white like they are no longer yelling
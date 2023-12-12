// //Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }




// const btn = document.querySelector("#check")
// const result = document.querySelector("#placeToSee")
// const image = document.querySelector("#visual-result")

// btn.addEventListener("click", e=>{
//   const day = document.querySelector("#day").value.toLowerCase();
//   const body = document.querySelector("body")

//   if(day=="tuesday"||day=="thursday"){
//     result.innerText = "CLASS DAY!"
//     body.style.backgroundImage = "url('https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=800')"
//   }else if(day=="saturday"||day=="sunday"){
//     result.innerText = "Weekend :(";
//     body.style.backgroundImage = "url('https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
//   }else{
//     result.innerText = "Boring day"
//     body.style.backgroundImage = "url('https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg?auto=compress&cs=tinysrgb&w=800')"
//   }
// })



const check = document.querySelector("#check")

check.addEventListener("click", click=>{
  const day = document.querySelector("#day").value.toLowerCase()

  if(day==="tuesday"||day==="thursday"){
    document.querySelector("#placeToSee").innerText = "CLASS DAY!"
    document.querySelector("body").style.backgroundImage = "url('https://media.gettyimages.com/id/188119863/photo/celebration-with-balloons-hats-and-horns.jpg?s=612x612&w=0&k=20&c=_7yKEOi-PxYDDcvIBo_PSigG91xJTCnYRISU9EYH2Z0=')"
  }else if(day==="saturday"||day==="sunday"){
    document.querySelector("#placeToSee").innerText = "Weekend, relax"
    document.querySelector("body").style.backgroundImage = "url('https://media.gettyimages.com/id/1354885010/photo/shot-of-a-young-couple-dancing-together-in-their-kitchen.jpg?s=1024x1024&w=gi&k=20&c=EoIVR2NGNXujoxF6_iuaNh74SiClvxg6h8FBivKw7JA=')"

  }else{
    document.querySelector("#placeToSee").innerText = "Boring day, make sure you Anki!"
    document.querySelector("body").style.backgroundImage = "url('https://media.gettyimages.com/id/1452661049/photo/window-depression-and-children-with-a-bored-girl-by-a-transparent-glass-door-in-her-home.jpg?s=1024x1024&w=gi&k=20&c=m6_X1aS8HzYBjL6VU7yzOUFktIjHoHAzoC0P1GOImGA=')"

  }
})




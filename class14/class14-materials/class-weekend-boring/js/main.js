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




const btn = document.querySelector("#check")
const result = document.querySelector("#placeToSee")
const image = document.querySelector("#visual-result")

btn.addEventListener("click", e=>{
  const day = document.querySelector("#day").value.toLowerCase();
  const body = document.querySelector("body")

  if(day=="tuesday"||day=="thursday"){
    result.innerText = "CLASS DAY!"
    body.style.backgroundImage = "url('https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=800')"
  }else if(day=="saturday"||day=="sunday"){
    result.innerText = "Weekend :(";
    body.style.backgroundImage = "url('https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
  }else{
    result.innerText = "Boring day"
    body.style.backgroundImage = "url('https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg?auto=compress&cs=tinysrgb&w=800')"
  }
})
const purple = document.querySelector("#purple")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")

purple.addEventListener('click', e=>{
  e.preventDefault;
  document.querySelector("body").style.backgroundColor = 'purple'
})

green.addEventListener('click', e=>{
  e.preventDefault;
  document.querySelector("body").style.backgroundColor = 'green'
})

blue.addEventListener('click', e=>{
  e.preventDefault;
  document.querySelector("body").style.backgroundColor = 'blue'
})




//next use onclick
// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#claireNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#sharleenNext').addEventListener('click', /*INSERTCODE*/)

// function andiNext(){
// 	claire.classList.add(/*INSERTCODE*/)
// 	sharleen.classList.add(/*INSERTCODE*/)
// 	andi.classList.toggle(/*INSERTCODE*/)
// }

// function claireNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }

// function sharleenNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }










const andi = document.querySelector("#andiNext")
const claire = document.querySelector("#claireNext")
const sharleen = document.querySelector("#sharleenNext")

const andiImg = document.querySelector("#andi")
const claireImg = document.querySelector("#claire")
const sharleenImg = document.querySelector("#sharleen")


andi.addEventListener("click", e=>{
	andiImg.classList.toggle("hidden")
	claireImg.classList.add("hidden")
	sharleenImg.classList.add("hidden")

})

claire.addEventListener("click", e=>{
	document.querySelector("#claire").classList.toggle("hidden")
	document.querySelector("#andi").classList.add("hidden")
	document.querySelector("#sharleen").classList.add("hidden")

})


sharleen.addEventListener("click", e=>{
	document.querySelector("#sharleen").classList.toggle("hidden")
	document.querySelector("#andi").classList.add("hidden")
	document.querySelector("#claire").classList.add("hidden")


})
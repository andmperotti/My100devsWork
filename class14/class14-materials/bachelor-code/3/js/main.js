// const contestants = document.querySelectorAll(/*INSERTCODE*/)

// Array.from(contestants).forEach(element => element.addEventListener('click', /*INSERTCODE*/))

// function checkForRose(click){
// 	if(click.target.classList.contains(/*INSERTCODE*/)){
// 		document.querySelector('#nikki').classList.toggle(/*INSERTCODE*/)
// 	}else{
// 		alert("Wrong!");
// 	}
// }





// let contestants = Array.from(document.querySelectorAll(".contestant"))


// contestants.forEach(contestant=>contestant.addEventListener("click", e=>{
// 	if(contestant.classList.contains("rose")){
// 		document.querySelector("#nikki").classList.remove("hidden")
// 	}else{
// 		alert("wrong")
// 	}
// }))





let contestants = Array.from(document.querySelectorAll(".contestant"))

contestants.forEach(contestant=>{
	contestant.addEventListener("click", e=>{
		if(contestant.classList.contains('rose')){
			document.querySelector('#nikki').classList.remove("hidden")
		}else{
			alert("wrong")
		}
	})
})











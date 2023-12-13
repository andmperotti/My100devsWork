const contestants = document.querySelectorAll(".contestant")

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}






// document.querySelector(".rose").onclick = showNikki

// function showNikki(){
// 	document.querySelector("#nikki").classList.toggle('hidden')
// }

// document.querySelector('.contestant').onclick = wrong 
// function wrong(){
// 	alert('wrong')
// }
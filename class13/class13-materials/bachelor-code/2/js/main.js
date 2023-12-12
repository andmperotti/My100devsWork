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




document.querySelector("#andiNext").onclick = showAndi
document.querySelector("#claireNext").onclick = showClaire
document.querySelector("#sharleenNext").onclick = showSharleen

function showAndi(){
	document.querySelector('#andi').classList.toggle('hidden')
	document.querySelector('#claire').classList.add('hidden')
	document.querySelector('#sharleen').classList.add('hidden')
}



function showClaire(){
	document.querySelector('#claire').classList.toggle('hidden')
	document.querySelector('#andi').classList.add('hidden')
	document.querySelector('#sharleen').classList.add('hidden')
}


function showSharleen(){
	document.querySelector('#sharleen').classList.toggle('hidden')
	document.querySelector('#claire').classList.add('hidden')
	document.querySelector('#andi').classList.add('hidden')
}

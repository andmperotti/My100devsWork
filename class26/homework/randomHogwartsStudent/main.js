let button = document.querySelector('button')
function getRando(){
    let randomStudentNum = Math.floor(Math.random()*100)
    fetch('https://hp-api.onrender.com/api/characters/students')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            document.querySelector('h2').innerText = data[randomStudentNum].name
            document.querySelector('img').src = data[randomStudentNum].image
            document.querySelector('h3').innerText = data[randomStudentNum].house
        })
}
button.addEventListener('click', getRando)

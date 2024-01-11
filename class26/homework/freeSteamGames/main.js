let button = document.querySelector('button')
function getFreebies(){
    let randomStudentNum = Math.floor(Math.random()*100)
    fetch('https://www.cheapshark.com/api/1.0/deals?sortBy=Savings')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            for(let i = 0; i<data.length;i++){
                let li = document.createElement('li')
                li.appendChild(document.createTextNode(`${data[i].title}`))
                document.querySelector('ul').appendChild(li)
            }
        })
}
button.addEventListener('click', getFreebies)

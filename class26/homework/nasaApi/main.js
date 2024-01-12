let button = document.querySelector('button')
button.addEventListener('click', getNasaDay)
function getNasaDay(){fetch('https://api.nasa.gov/planetary/apod?api_key=JVSjvoXhSXEpvwuaAhpwkXd2c8c0ddHhrcceQR9k')
         .then(res=>res.json())
         .then(data=>{
             console.log(data)
             document.querySelector('h2').innerText = data.title;
             document.querySelector('h3').innerText = data.explanation;
             if(data.media_type==='image'){
                document.querySelector('img').removeAttribute('hidden')
                document.querySelector('img').src = data.hdurl
                document.querySelector('img').alt = "NASA's picture of the day"
             }else if(data.media_type==='video'){
                document.querySelector('video').removeAttribute('hidden')
                document.querySelector('video').src = data.hdurl
             }
         })
         .catch(err=>console.log(`error: ${err}`))
}
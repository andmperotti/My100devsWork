
let button = document.querySelector('button')
button.addEventListener('click', e=>{
   fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res=>res.json())
      .then(data=>{
         document.querySelector('h2').innerHTML = data
         document.querySelector('img').removeAttribute('hidden')
      })
      .catch(err=>console.log(`error: ${err}`))
})
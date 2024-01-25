//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value.toLowerCase()
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('h2').innerText = data.name
//         document.querySelector('h3').innerText = data.types[0].type.name
//         document.querySelector('img').src = data.sprites.front_default
//         document.querySelector('img').alt = `An image of a ${data.name}`
//         document.querySelector('img').style.width = '50%'
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }



//nasa
//https://api.nasa.gov/planetary/apod?api_key=dLipGioAsMClxMRmQrxRIq71yt1crcT2kDF5yLvY&date=
document.querySelector('button').addEventListener('click', getMedia)

function getMedia(){
  const date = document.querySelector('input').value
  const url = 'https://api.nasa.gov/planetary/apod?api_key=dLipGioAsMClxMRmQrxRIq71yt1crcT2kDF5yLvY&date=' + date
  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      if(data.media_type == "image"){
        document.querySelector('img').removeAttribute('hidden')
        document.querySelector('img').src = data.hdurl
        document.querySelector('img').alt = data.title
      }else{
        document.querySelector('iframe').removeAttribute('hidden')
        document.querySelector('iframe').src = data.url
      }
    })
    .catch(err=>console.log(`error: ${err}`))
}
//I had made this already after last lecture but decided to pull it from my memory
//I initaly used a video element and kept trying to change its src attribute to the data.url keys value, but it's for an embed, which the url mentions, so I changed my video element to an iframe.
//And now he's going over if you get a video back to use an iframe, nice!
const flipButton = document.querySelector('#flip')

flipButton.addEventListener('click', flipIt)

async function flipIt(){
    const data = await res.json()
    console.log(data)
    document.querySelector('#result').textContent = data.flip
}
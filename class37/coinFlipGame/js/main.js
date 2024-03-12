const flipButton = document.querySelector('#flip')

flipButton.addEventListener('click', flipIt)

async function flipIt(){
    const res = await fetch('/flipCoin')
    const data = await res.json()
    console.log(data)
    document.querySelector('#result').textContent = data.flipResult
}
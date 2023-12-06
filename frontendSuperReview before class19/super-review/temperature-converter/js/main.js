//Write your pseduo code first! 
//First add an event listener method that waits for a click
document.querySelector('button').addEventListener('click', convertCel)
//^pass it a function which here will:
//create a variable to save user input 
//target an element to output the converted value
function convertCel(){
    let cel = document.querySelector('input').value
    document.querySelector('h1').innerText += ` ${cel*(9/5)+32}`
}
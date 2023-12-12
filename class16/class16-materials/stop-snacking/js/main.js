//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const help = document.querySelector("#help")

help.addEventListener("click", click=>{
    let snackTimes = document.querySelector("input").value
    document.querySelector("input").value = ''

    for(let i = 0; i<snackTimes; i++){
        document.querySelector("#stops").innerText += " Exalt" 
        document.querySelector("body").style.backgroundImage = "url('https://kboosting.com/img/14816/c/exalted-orbs-500x500.png')"
    } 
})
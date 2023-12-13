//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let age = 23
switch(true){
    case age<16:
        console.log("You can't drive")
        break;
    case age<18:
        console.log("You can't hate from outside the club, because you can't even get in");
        break;
    case age<21:
        console.log("You can't drink");
        break;
    case age<25:
        console.log("You can't rent cars affordably");
        break;
    case age<30:
        console.log("You cannot rent fancy cars afordably");
        break;
    default:
        console.log("There is nothing left to look forward to")
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector("h1").addEventListener('click', click=>{
    let userAge = Number(document.querySelector('#danceDanceRevolution').value)
    let result = document.querySelector('p')
    if(userAge<18){
            result.innerText += "You can't drive"
    }else if(userAge<18){
            result.innerText += "You can't hate from outside the club, because you can't even get in";
    }else if(userAge<25){
            result.innerText +="You can't rent cars affordably";
    }else if(userAge<30){
            result.innerText +="You cannot rent fancy cars afordably";
    }else{
            result.innerText +="There is nothing left to look forward to"
    }
})
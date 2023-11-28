//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let age = 37;
if(age<16){
    console.log("You can't drive")
}else if(age < 18){
    console.log("you can't hate from outside the club, because you can't even get in")
}else if(age<21){
    console.log("You cannot drink")
}else if(age<25){
    console.log("You can not rent cars affordably")
}else if(age<30){
    console.log("You cannot rent fancy cars")
}else{//>=30
    console.log("There is nothing left to look forward too")
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
let hOne = document.querySelector("h1")
hOne.addEventListener("click", click=>{
    let userAge = document.querySelector("#danceDanceRevolution").value 

    if(userAge<16){
        document.querySelector("p").innerText = "You can't drive"
    }else if(userAge < 18){
        document.querySelector("p").innerText = "you can't hate from outside the club, because you can't even get in"
    }else if(userAge<21){
        document.querySelector("p").innerText = "You cannot drink"
    }else if(userAge<25){
        document.querySelector("p").innerText = "You can not rent cars affordably"
    }else if(userAge<30){
        document.querySelector("p").innerText = "You cannot rent fancy cars"
    }else{
        document.querySelector("p").innerText = "There is nothing left to look forward too"
    }
})
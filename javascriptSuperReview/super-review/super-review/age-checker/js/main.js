//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let userAge = Number(document.querySelector('#danceDanceRevolution').value)
console.log(userAge)
switch(true){
    case userAge<16:
        console.log('You cannot drive')
        break;
    case userAge<18:
        console.log("You can't hate from outside the club, because you can't even get in.");
        break;
    case userAge<21:
        console.log("You cannot drink");
        break;
    case userAge<25:
        console.log("You can not rent cars affordably");
        break;
    case userAge<30:
        console.log("You cannot rent fancy cars affordably");
        break;
    default:
        console.log('There is nothing left to look forward to');
        break;
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let hOne = document.querySelector('h1')
hOne.addEventListener('click', ()=>{
    let userAge = Number(document.querySelector('#danceDanceRevolution').value)
    switch(true){
        case userAge<16:
            document.querySelector('p').innerText = 'You cannot drive'
            break;
        case userAge<18:
            document.querySelector('p').innerText = "You can't hate from outside the club, because you can't even get in."
            break;
        case userAge<21:
            document.querySelector('p').innerText = "You cannot drink"
            break;
        case userAge<25:
            document.querySelector('p').innerText = "You can not rent cars affordably"
            break;
        case userAge<30:
            document.querySelector('p').innerText = "You cannot rent fancy cars affordably"
            break;
        default:
            document.querySelector('p').innerText = 'There is nothing left to look forward to'
            break;
    }
})
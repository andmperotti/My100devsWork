//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// document.querySelector('button').addEventListener('click', ()=>{
//     let drink = document.querySelector('input').value
//     // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink) //mine, leons below
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             document.querySelector('h2').innerText = data.drinks[0].strDrink
//             document.querySelector('h3').innerText = data.drinks[0].strInstructions
//             document.querySelector('img').src = data.drinks[0].strDrinkThumb
//         })
//         .catch(err=>console.log(`error: ${err}`))
// })







//if you want to cycle through the drinks, aka the array of cocktails you get back:
//I'm thinking to use a timeout to then display the next one?
document.querySelector('button').addEventListener('click', carouselDrinks)

function carouselDrinks(){
    const drink = document.querySelector('input').value
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drink)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            let drinkCounter = 0
            document.querySelector('h2').innerText = data.drinks[drinkCounter].strDrink
            document.querySelector('img').src = data.drinks[drinkCounter].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[drinkCounter].strInstructions
            setInterval(()=>{drinkCounter++
                document.querySelector('h2').innerText = data.drinks[drinkCounter].strDrink
                document.querySelector('img').src = data.drinks[drinkCounter].strDrinkThumb
                document.querySelector('h3').innerText = data.drinks[drinkCounter].strInstructions
            }, 5000)
        })

}











//Try withouth a template literal:
//I did it the first time up above, it's commented out before leons code



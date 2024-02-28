//Get a dog photo from the dog.ceo api and place the photo in the DOM
let dogPic = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        let randomDrink = Math.floor(Math.random()*data.drinks.length)
        document.querySelector('img').src = data.drinks[randomDrink].strDrinkThumb
    })
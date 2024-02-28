//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twentyOne(){
    for(let i = 0; i<21; i++){
        console.log('21')
    }
}
twentyOne()
//Bonus can you make it print '21' 21 times to the dom?
let savage = document.querySelector('img')

savage.addEventListener('click', twentyOneDom)

function twentyOneDom(){
    for(let i = 0; i<21; i++){
        document.querySelector('p').innerText += `21`
    }
}
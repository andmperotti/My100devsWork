//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function twentyOne(){
    for(let i = 0; i<21; i++){
        console.log('21')
    }
}

const says = document.querySelector("#savageSays")

function twentyOneDom(){
    for(let i = 0; i<21; i++){
        says.innerText += ' 21'
    }
}
twentyOne();
twentyOneDom();
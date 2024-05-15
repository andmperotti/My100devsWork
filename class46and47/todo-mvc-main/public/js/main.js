//this is the client side js file.
//here we set up 3 variables that create nodelists for each element with the class of 'det', each span element with the class of 'not', and each span element with the class of 'completed'
const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

//here we build an array from the nodelist created above and invoke an event listener on each of those items of a click event which will invoke deleteTodo function from down below.
Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})
//likewise to the above this crates an array of the todoItem's nodelist, and creates listeners on each of these elements to invoke the markComplete method on them being clicked.
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})
//lastly, again we create an array from the todoComplete nodelist elements and invoke an event listner on them that when they're clicked on they invoke the markIncomplete function
Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

//this function sets up a variable that represenets the id value fo the dataset object of the parentNode of the element clicked on by the user. It's an asynchronous function with mkes a fetch call to the deleteTodo endpoint of the todos route with a request object with specific properties like delete to the method property and what kind of data this is via the headers property and lastly the body property will hold a json format objevct with a todoIDFromJSFile property that points at the value of the variable the function made at the start which is a data-id attribute value of the element. After it deletes that Todo it takes in the reposnse via json data and logs it and the reloads the page; here the /todo route page.
async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
//this function builds a variable that stores a value from when a user clicks on a todo list item which is a span navigates to its parent element and then looks for a 'id' value on the dataset object of it. It makes an api call which is to our server which gets routed to the todos router which triggers the markComplete method from the controller file and sends specific data with that request, a method of put which is used by the router to use a put method and what the request data is about via headers property, and the body property holds a json object that uses a property to hold onto that value from the variable we made t the start of this functoin. When the response is receveied its converted to json and then logged to the console and then the user browser is reloaded at the location they are at when they initiated this function.
async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
//This function does everything the above function does however it triggers a diffeernt method in the controller.
async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
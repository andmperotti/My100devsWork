const Todo = require('../models/Todo')

//this file defines methods to use in the todos routes
module.exports = {
    //this function builds an array and saving it as Todo by using Mongoose and its  find method , then builds another variable that is equal to the number of documents in the db that have completed property value of false. It then respondes to the clientside device via html rendered through ejs using an object with 2 properties that point to the 2 variables that this function made, again one being an array of documents in the databae and the other a integer which represents the number of documents that have completed property value of false
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    //this function is used to create a new document in the database and sets its todo property to the value found at request body todoItem which is the value the user typed into the form input element, it then console.logs on the server console that a todo has been added and sends a response to redirect the user to the todos route so they can see that their newly added document is in the database (this is a getTodos call)
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    //this function tries to find a document with the _id property value that is === the balues pulled out of the request from the body named todoIdFromJSFile, which was set when the user clicked on a todo incompleted item it made a request and specifically stated in the body of that request a variable called todoIdFromJSFile that was equal to the data-id value via dataset.id which was a specific _id value from a document that was set during views buidling the index.ejs content. When it finds the document witht he same value it changes its completed property value to true and responds with json format "Marked Complete" which will be logged to the console of the user device.
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    //this function is similar to the above but instead changes the completed property to a value of false and logs on the server Marked Incomplete and responds with the samae text which will be logged in the users console.
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    //this function first of all console.logs the value of the todoIdFromJSFile and then tries to invoke the findOneAndDelete method from mongoose on the document that has the same _id value as the one that was requested for deletion by the user, similar to above. "Deleted Todo" will be logged on the server console, and "Deleted It" will be in the response to the client device which it'll log via clientside js.
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    
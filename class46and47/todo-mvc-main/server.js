const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
//above are the imports for the modules needed for this project, also invokes express to make this an express node project

//here we import the dotenv module and tell it via config method where our env file is located
require('dotenv').config({path: './config/.env'})

//connect to the database via a method that is imported from a config folder file of database.js
connectDB()

//set the templating language
app.set('view engine', 'ejs')
//set the public folder where static files will be stored like the css and js
app.use(express.static('public'))
//instead of using bodyparser module to read the request we instead use the next two lines
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//set up the routers to be used on what route is requested
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
//listen for activitiy on the PORT variable from the .env file or .env of the provider
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
//import express
const express = require('express')
//create 'app' to represent the express runtime
const app = express()
//import the database
const connectDB = require('./config/database')
//import the routes
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

//initiate the environment
require('dotenv').config({path: './config/.env'})

//initiate the database
connectDB()

//set view engine to ejs
app.set('view engine', 'ejs')
//set up public folder for css and js files 
app.use(express.static('public'))
//setup reading the request object
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//set up routes to what router
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
const express = require('express')
const app = express()
const PORT = 8000

const rappers ={

}

app.get('/', (request, response)=>{
	response.sendFile(__dirname + '/index.html')
});
app.get('/api', (request, response)=>{
	response.json(rappers)
})
app.listen(PORT, ()=>{
	console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
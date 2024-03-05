const http = require('http') //imports https module, which allows us to access the network
const fs = require('fs') //imports file system module, which allows us to access files on the system

//create a server by using the createServer method from the http module
http.createServer((req, res) => {
  //use the readfile method from the file system module passing in a callback function which we pass a specific html file that has elements and content, which is what our server will respond with to the devices that request from our server
  fs.readFile('demofile.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'}) //expect an html file
    res.write(data) //sends the  files data to them
    res.end() //tells the requester than the response is done
  })
}).listen(8000) //this is the port this server is listening to for requests

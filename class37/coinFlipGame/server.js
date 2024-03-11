//imports of modules so you can use methods from these modules
const http = require('http');//network access
const fs = require('fs')//file system access
const url = require('url');//access urls, aka interfaces, aka buttons users use
const querystring = require('querystring');//access query parameters on requests
const figlet = require('figlet')//ascii art from strings

const server = http.createServer((req,res)=>{
    const page = url.parse(req.url).pathname
    console.log(page)
    if (page == '/'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end()
        })
    }
    else if (page == '/flipCoin'){
        // res.writeHead(200, {'Content-Type': 'text/plain'})
        // const dataReturn ={
        //     result : Math.ceil(Math.random()*2) >1 ? 'Tails' : 'Heads'
        // }
        // console.log(dataReturn.result)
        // res.end(JSON.stringify(dataReturn))

        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipRes = Math.ceil(Math.random()*2) >1 ? 'Tails' : 'Heads'
        const objToJson = {
            flip: flipRes
        }
        res.end(JSON.stringify(objToJson));
        
    }
    else{
        figlet('404!!', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          res.write(data);
          res.end();
        });
      }
})
server.listen(8000)
// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const figlet = require('figlet')

// const server = http.createServer((req, res) => {
//     const page = url.parse(req.url).pathname;
//     console.log(page);
  
//     if (page == '/') {
//       fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'}); 
//         res.write(data);
//         res.end();
//       });
//     }else if (page == '/flipCoin'){
//         // res.writeHead(200, {'Content-Type': 'text/plain'})
//         // const dataReturn ={
//         //     result : Math.ceil(Math.random()*2) >1 ? 'Tails' : 'Heads'
//         // }
//         // console.log(dataReturn.result)
//         // res.end(JSON.stringify(dataReturn))

//         res.writeHead(200, {'Content-Type': 'application/json'});
//         let flipRes = Math.ceil(Math.random()*2) >1 ? 'Tails' : 'Heads'
//         const objToJson = {
//             flip: flipRes
//         }
//         res.end(JSON.stringify(objToJson));
        
//     }else{
//         figlet('404!!', function(err, data) {
//           if (err) {
//               console.log('Something went wrong...');
//               console.dir(err);
//               return;
//           }
//           res.write(data);
//           res.end();
//         });
//       }
// })
// server.listen(8000)

//seperator from last attempt to this full new attempt


const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  console.log(page);

  if(page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'}); 
      res.write(data);
      res.end();
    });
  }else if(page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data){
      res.write(data);
      res.end()
    })
  }else if(page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data){
      res.write(data)
      res.end()
    })
  }else if(page == '/flipCoin'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    const objToJson = {
        flipResult : Math.ceil(Math.random()*2)>1? 'Tails': 'Heads'
    }
    res.end(JSON.stringify(objToJson))
  }else{ 
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
});
server.listen(8000);


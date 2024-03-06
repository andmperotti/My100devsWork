const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
//These lines above import modules for the project

//create a server...
const server = http.createServer((req, res) => {
  //pull from the request of the user of the server the url they are sending adn save the path name to the page variable
  const page = url.parse(req.url).pathname;
  //parse the url string again and save the query into a variable
  const params = querystring.parse(url.parse(req.url).query);
  //log to the constole the path name parsed from the url and saved to the 'page' variable
  console.log(page);
  //if they typed / or nothing to end the url to your server, server them the index.html file
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //if they asked for 'otherpage' then serve them otherpage.html
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //if they asked for otherotherpage then server them otherotherpage.html
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //if they input 'leon' in the input element and then initiated the event listener method by clicking the button then that async function made a fetch call which invokes this block, and student is their inputthe below code creates an object and sends it back and the data in that object fills 3 elements in the resulting html to the user
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      //when the input is not == 'leon', then the object sent back through that promise obejct and what fills the 3 elements is this object below with 3 'unknown' values.
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  //if they request the css file, serve them the css file
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
    //if they request the javascript file then serve them the javascript file
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{//in case they ask for anything else, invoke figlet module and give them a 404 error
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
//run the server on port 8000, so on our local machines when we start this server we can access it at localhost:8000
server.listen(8000);

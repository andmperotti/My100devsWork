//imports of modules so you can use methods from these modules
const http = require('http');//network access
const fs = require('fs')//file system access
const url = require('url');//access urls, aka interfaces, aka buttons users use
const querystring = require('querystring');//access query parameters on requests
const figlet = require('figlet')//ascii art from strings

//create a server by making a variable equal to the calling of createServer from the http module
const server = http.createServer((req, res) => {
  //page holds the pathname from a url, aka endpoint
  const page = url.parse(req.url).pathname;
  //params is the query parameter?
  const params = querystring.parse(url.parse(req.url).query);
  //log the page variable
  console.log(page);

  //if page requested endpoint == '/' then:
  if (page == '/') {
    //respond with index.html
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'}); //200 means ok
      res.write(data);//populate response with data from index.html
      res.end();//end the response
    });//the only 2 things that really need to be changed per each below request is the endpoint and the file you're returning
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //Here when a user enters text into input element and hits the button, the button invokes the makeReq function which calls this api using the input element value and responds with the below object 'objToJson'
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
          flipResult : Math.ceil(Math.random()*2)>1? "Tails":"Heads"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
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
  }//else if, as in not api or any above endpoints:
  //this would seem as if a user is asking for your css reply with it, but after creating my own server I ran into a problem with the css not loading even though I imported it in the index.html via a <link>, this below did load it into the dom
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
    //again you'd thing this would give the javascript file to a user if the user requests it but no this is how the server loads the js file into the dom, not the <script> at the end of the body element of my index.html file
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{ //if an endpoint is asked for but above rules don't supply it, serve a 404
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
//run this server on port 8000 aka localhost:8000
server.listen(8000);

//"page and params are deprecated now"-leon
//page used pathname to find the endpoint
//params looked at the query parameters 

//
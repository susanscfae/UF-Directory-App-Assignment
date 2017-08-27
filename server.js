/*
Assignment 1
Susanne Chan
2300-4684
*/

var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */

   //if it's a GET request
   if (request.method == 'GET'){

    //if the user is asking for listings
    if(parsedUrl.pathname == '/listings'){

    //var readStream = fs.createReadStream('listings.json');

      //callback funtion to read the file 
    //readStream.on('data', fs.readFile);
    //fs.readFile;

    //write the contents of the file to the server
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(listingData);
    response.end();

    }

   else{

    //return 404 error
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("Bad gateway error");
    response.end();

   }
}


};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
    if (err){
      throw err;
    }

   //read the json file and save it to listingData
   listingData = data;

   //start the server
   server.listen(port);

});

//create the server
server = http.createServer(requestHandler);
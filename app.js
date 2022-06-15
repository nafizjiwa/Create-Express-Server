//START A SERVER USING EXPRESS (a node module).
    FIRST(1), Import the Express library with require.
    SECOND(2), invoke EXPRESS which returns an instance of an Express application.
      //This application (and its methods) can then be used to start a server and specify server behavior.
      //The purpose of a server is to listen for requests, perform actions to satisfy the request, and then return a response.
    THIRD(3), In order for our server to start responding, we have to tell the server where to listen for new requests.
      //Provide a port number argument to a method called app.listen().
      //Invoking the app.listen() call will start a server listening on chosen port and respond to any requests that comes into it;
      //Here: PORT - 4001;  Response - 'Server is listening on port 4001' and confirms server started successfully.
    FOURTH(4), To start server listening for requests, run the command > node [app_file_name.js] to run your server in Node.
    FIFTH(5),  To tell our server how to deal with any given request, we register a series of routes. Request’s are based on path's and HTTP verb;
      //Path is part of request URL http://localhost:4001/routename (http_verb//hostname:port/path)
      //EXPRESS uses ROUTE HANDLERS app.http_verb(PATH, CALLBACK) to register routes. I TAKES 2 ARGUMENT USUALLY;
    SIXTH(6), If no routes are matched on a client request, the Express server will handle sending a 404 Not Found response to the client.
    SEVENTH(7), GET requests are requesting information from the server;
//

const express = require('express');               (1)
const app = express();                            (2)

const PORT = process.env.PORT || 4001;            (3) //where to listen to

app.use(express.static('public')); // Use static server to serve the Express Yourself Website

app.get('/PATH OR ROUTE', (req, res, next) => {CALLBACK Handles request and sends response....});
    (5) //Server recieves a GET request mathing at /ROUTE or an opened call to app.get();
app.post('/PATH OR ROUTE', (req, res, next) => {CALLBACK Handles request and sends response...});
    (5) //Server recieves a POST request mathing at /ROUTE;

app.listen(PORT, () => {                            (3)
  console.log(`Server is listening on port ${PORT}`);
});

//Load HTTP module
var http = require("http");
const port = 8080
//Create HTTP server and listen on port 8000 for requests
http.createServer(function (request, response) {
   console.log('Request:' + request.socket.remoteAddress)
   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
   // Send the response body "Hello World"
   currdate = new Date().toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
   //response.end('Hello World ' + currdate.toLocaleString() + '\n');
   response.end('Hello World ' + currdate + '\n');
}).listen(port);
// Print URL for accessing server
console.log('Server running at http://127.0.0.1:' + port)

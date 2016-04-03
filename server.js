var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(process.env.PORT || 8888);

// #!/usr/bin/env node
// var debug = require('debug')('typing');
// var app = require('./app');

// app.set('port', process.env.PORT || 8081);

// var server = app.listen(app.get('port'), function() {
//   debug('Express server listening on port ' + server.address().port);
// });

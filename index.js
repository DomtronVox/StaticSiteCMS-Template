
//runs metalsmith code to build website
var exec  = require('child_process').exec;

var child = exec('./node_modules/metalsmith/bin/metalsmith',
  function (error, stdout, stderr) {
    console.log('stdout:', stdout || "None");
    console.log('stderr:', stderr || "None");
    if (error !== null) {
      console.log('exec error:', error);

      process.exit();
    }

    console.log("\nListening on http://127.0.0.1:8080")
});


//run server for testing locally
var nodestatic = require('node-static');
var staticserver = new nodestatic.Server("./build"); //TODO need to pull this location from settings object in build.js

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        staticserver.serve(request, response);
    }).resume();
}).listen(8080);



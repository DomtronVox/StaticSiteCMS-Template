
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
});


//run server for testing locally
var StaticServer = require('static-server');
var staticserver = new StaticServer({
  rootPath: './build',            // required, the root of the server file tree
  port: 8080,               // required, the port to listen
  /*TODO implement
  templates: {
    index: 'foo.html',      // optional, defaults to 'index.html'
    notFound: '404.html'    // optional, defaults to undefined
  }*/
});

staticserver.start(function () {
  console.log('Server listening to http://127.0.0.1:'+staticserver.port);
});



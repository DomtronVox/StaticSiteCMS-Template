module.exports = plugin;


function plugin() {
    return function(files, metalsmith, done) {
        //just allows this to work like a metalsmith plugin
        setImmediate(done);

        Object.keys(files).forEach(function(file) {
            console.log(file, files[file]);
        })
        console.log("metadata", metalsmith);
    }
}

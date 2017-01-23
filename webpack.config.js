module.exports = {
    "entry" : [ 'bootstrap-loader', './app' ],

    "output" : {
        "path" : __dirname + "/docs",
        "filename" : "bundle.js"
    }
};

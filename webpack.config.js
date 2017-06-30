'use strict';

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "assets", "js", "app"),
    output: {
        path: path.resolve(__dirname,'assets','js'),
        filename: "bundle.js"
    }//,
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style!css" }
    //     ]
    // }
};

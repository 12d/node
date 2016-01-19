var path = require('path');
module.exports = {
    entry: path.join(__dirname,"../react/static/js/src/app.js"),
    output: {
        path: __dirname+"/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
           // {test: /\.js$/, loader: 'babel', query:{presets:['es2015']}}
            {test: /\.js$/, loader:'babel?presets[]=es2015',exclude: /(node_modules|bower_components|lib)/}
        ]
    }
};
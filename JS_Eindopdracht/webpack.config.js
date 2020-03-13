const path = require('path');

module.exports = {
    entry: './Js/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
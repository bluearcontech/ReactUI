var path = require('path');

var config = {
    resolve: {
        alias: {
            App: path.resolve(__dirname, 'app')
        }
    }
};

function find(alias) {
    return path.join(__dirname, '..', 'app', alias);
}

module.exports = config;
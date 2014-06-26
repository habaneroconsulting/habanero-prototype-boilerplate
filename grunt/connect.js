'use strict';

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt, options) {
    var config = require('./config.js');

    return {
        options: {
            port: 9000,
            hostname: 'localhost'
        },
        test: {
            options: {
                middleware: function (connect) {
                    return [
                        mountFolder(connect, config.test)
                    ];
                },
                open: true
            }
        },          
        prod: {
            options: {
                keepalive: true,
                middleware: function (connect) {
                    return [
                        mountFolder(connect, config.prod)
                    ];
                },
                open: true
            }
        }
    };
};
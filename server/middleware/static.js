var express = require('express'),
    path = require('path');

module.exports = function (app) {
    app.use("/public", express.static(__dirname + "/public"));
    app.use("/public", express.static(path.join(__dirname, '../../bin/public')));
    app.use("/public", express.static(path.join(__dirname, '../../client')));
}

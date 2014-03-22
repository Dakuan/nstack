var express = require('express'),
    hbs = require('express-hbs'),
    path = require('path'),
    app = express();

app.engine('hbs', hbs.express3({}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../shared/views'));

app.use("/public", express.static(__dirname + "/public"));
app.use("/js", express.static(path.join(__dirname, '../bin/public/js')));
app.use("/js", express.static(path.join(__dirname, '../client')));

app.get('/', function (req, res) {
    res.render('thing', {
        thing: 'bob',
        layout: 'layout/index'
    });
});

app.listen(5000);

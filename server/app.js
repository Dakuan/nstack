var express = require('express'),
    hbs = require('express-hbs'),
    path = require('path'),
    static = require('./middleware/static'),    
    routes = require('./routes'),
    app = express();

app.engine('hbs', hbs.express3({}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../common/views'));

// middleware
static(app);

// routes
routes(app);

app.listen(5000);

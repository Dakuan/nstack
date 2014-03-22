var indexController = require('./controllers/index');
var weatherController = require('./controllers/weather');

module.exports = function(app) {
    app.get('/', indexController.index);
    app.get('/weather', weatherController.index);
}

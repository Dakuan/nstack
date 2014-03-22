exports.index = function (req, res, next) {	
    res.render('thing', {
        thing: 'bob',
        layout: 'layout/index'
    });
}
var sinon = require('sinon'),
    expect = require('chai').expect
    subject = require('../../../../server/controllers/index');

describe('IndexController', function () {
    describe('#index', function () {
        var res = {};
        before(function () {
            res.render = sinon.spy();
        });
        it('should render some stuff', function () {
            subject.index(null, res);
            expect(res.render.calledWith('thing', {
                thing: 'bob',
                layout: 'layout/index'
            })).to.be.true;
        });
    });
});

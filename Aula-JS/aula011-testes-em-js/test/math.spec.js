const assert = require('assert'); 
const Math = require('./math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000);
        
        value = 5;
        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'David Santos'
        };

        const obj2 = {
            name: 'David Santos'
        };
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Call req with sim and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
    })
});


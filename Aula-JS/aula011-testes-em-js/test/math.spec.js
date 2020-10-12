const assert = require('assert'); 
const Math = require('./math.js');
const expect = require('chai').expect;

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

    it.only('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'David Santos'
        };

        const obj2 = {
            name: 'David Santos'
        };
        expect(obj).to.deep.equal(obj2);
    });
});


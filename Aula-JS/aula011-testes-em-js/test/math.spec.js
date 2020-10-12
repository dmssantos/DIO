const assert = require('assert'); 
const Math = require('./math.js');

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
            assert.strictEqual(value, 10);
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();
    
        assert.strictEqual(math.multiply(value, 5), 0);
    });
});


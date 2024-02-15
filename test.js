const {checkVariables} = require("./javascriptBasics");
var assert = require('assert');


describe('Test cases for Assignment 1', function () 
{
    it('test case 1:', function () 
    {
        const arrayResponse = checkVariables();
        assert.equal('number', typeof arrayResponse[0]);
    });

    it('test case 2:', function () 
    {
        const arrayResponse = checkVariables();
        assert.equal('string', typeof arrayResponse[1]);
    });

    it('test case 3:', function () 
    {
        const arrayResponse = checkVariables();
        let n = arrayResponse[2]
        assert.equal(true, typeof arrayResponse[2] === 'number' && n != "" && !isNaN(n) && Math.round(n) != n);
    });
});
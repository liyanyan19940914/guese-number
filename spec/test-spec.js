'use strict'
const main = require('../main/main.js');
describe('guess-number', ()=> {
    const input = '1234';
    it('judgeNumber', ()=> {
        const number = '1234';
        let result = main.judgeNumber(input, number);
        expect(result).toEqual('4A0B');
    });
})
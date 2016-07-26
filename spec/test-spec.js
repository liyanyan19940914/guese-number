'use strict'
const main = require('../main/main.js');
describe('guess-number', ()=> {
    const input = '1234';
    it('judgeNumber', ()=> {
        const number = '1234';
        let result = main.judgeNumber(input, number);
        expect(result).toEqual('4A0B');
    });
    it('judgeNumber', ()=> {
        const number = '4321';
        let result = main.judgeNumber(input, number);
        expect(result).toEqual('0A4B');
    });
    it('judgeNumber', ()=> {
        const number = '5678';
        let result = main.judgeNumber(input, number);
        expect(result).toEqual('0A0B');
    });
})
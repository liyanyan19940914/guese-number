'use strict'
const main = require('../main/models/compare-number');
describe('compare number', ()=> {
    const input = '1234';
    it('should compare number', ()=> {
        [
            {
                number:'1234',
                expectResult:'4A0B'},
            {
                number:'4321',
                expectResult:'0A4B'
            },
            {
                number:'5678',
                expectResult:'0A0B'
            }
        ].forEach(item=>{
            expect( main.compareNmuber(input, item.number)).toEqual(item.expectResult);
        })
    });
})

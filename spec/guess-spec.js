'use strict'
const AnswerGenerator=require('../main/models/answer-generate');
const Guess=require('../main/models/guess');
describe('Guess',()=>{
    it('should play the game',()=>{
        spyOn(AnswerGenerator,'generate').and.returnValue('1234');
        const result=Guess.guess('1234');
        expect(result).toEqual('4A0B');
    })
})
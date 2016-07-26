'use strict'
const CompareNumber=require('./compare-number');
const AnswerGenerate=require('./answer-generate');
class Guess{
    static guess(input) {
        const answer=AnswerGenerate.generate();
        return  CompareNumber.compareNmuber(answer,input);
    }
}
module.exports=Guess;
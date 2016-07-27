const Play = require('./models/play');
const AnswerGenerator = require('./models/answer-generate');

console.log('Welcome!\n');

const answer = AnswerGenerator.generate();
for (let i = 6; i > 0; i--) {
    console.log(`Please input your number(${i}):`);
    i = Play.playGame(answer, i);

    if(!i) {
        return;
    }
}

console.log(`Game Over
${answer}`);

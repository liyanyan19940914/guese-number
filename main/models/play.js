const CompareNumber = require('./compare-number');
const JudeInput = require('./jude-input');
const JudeOutput = require('./jude-output');
const Input = require('./input');

class Play {

    static playGame(answer, i) {

        const input = Input.getInput();
        if (JudeInput.jude(input)) {
            const output = CompareNumber.compareNmuber(input,answer);
            if(JudeOutput.jude(output)){
                return false;
            }
        } else {
            console.log('Cannot input duplicate numbers!\n');
            i++;
        }
        return i;
    }
}

module.exports = Play;
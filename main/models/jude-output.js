class JudeOutput {
    static jude(output) {
        if(output === '4A0B') {
            console.log('Congratulations!')
            return true;
        }

        console.log(output + '\n');
    }
}

module.exports = JudeOutput;
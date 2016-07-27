class JudeInput {
    static jude(input) {
        if(input.length != 4){
            return false;
        }
        const inputs = input.split('');

        for(const input of inputs) {

            if(inputs.indexOf(input) != inputs.lastIndexOf(input)) {
                return false;
            }
        }

        return true;
    }
}

module.exports = JudeInput;
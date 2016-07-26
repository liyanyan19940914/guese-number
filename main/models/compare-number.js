class CompareNumber {
    constructor(input, number) {
        this.input = input;
        this.number = number;
    }

    static compareNmuber(input, number) {
        const inputs = input.split('');
        const numbers = number.split('');
        let a = 0;
        let b = 0;
        numbers.map(number=> {
            const input = inputs.find(input=>input === number);
            if (input) {
                inputs.indexOf(input) === numbers.indexOf(number) ? a++ : b++
            }
        })
        return `${a}A${b}B`;
    }
}
module.exports = CompareNumber;
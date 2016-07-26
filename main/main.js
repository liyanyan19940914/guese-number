'use strict'
const result = require('./models/compare-number');
function judgeNumber(input, number) {
    const resultText = result.compareNmuber(input, number);
    return resultText;
}
exports.judgeNumber = judgeNumber;
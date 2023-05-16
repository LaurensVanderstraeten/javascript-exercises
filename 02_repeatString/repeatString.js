const errorString = 'ERROR';

const repeatString = function (string, number) {
    if(number < 0) {
        return errorString;
    }
    let resultString = '';
    for (let i = 0; i < number; i++) {
        resultString = resultString.concat(string);
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;

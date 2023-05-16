const ERRORSTRING = 'ERROR'

const sumAll = function (firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return ERRORSTRING;
    }
    if (firstNumber < 0 || (secondNumber < 0)) {
        return ERRORSTRING;
    }
    sumArray = new Array(firstNumber, secondNumber);
    sumArray.sort();
    let lowerBound = sumArray[0];
    let upperBound = sumArray[1];
    console.log(lowerBound);
    for (let inBetweenNumber = ++lowerBound; inBetweenNumber < upperBound; inBetweenNumber++) {
        sumArray.push(inBetweenNumber);
    }
    return sumArray.reduce((a, b) => a + b);
};

// Do not edit below this line
module.exports = sumAll;

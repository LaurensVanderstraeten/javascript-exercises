const UPPERCASE_CHARCODE_A = 65;
const UPPERCASE_CHARCODE_Z = 90;
const LOWERCASE_CHARCODE_A = 97;
const LOWERCASE_CHARCODE_Z = 122;

const caesar = function (string, shiftValue) {
    return string.split('').map((charString) => shiftIfNecesary(charString, shiftValue)).join('');
};

function shiftIfNecesary(charString, shiftValue) {
    let charCode = getCharCode(charString);
    if (isCharCodeOfUppercaseLetter(charCode)) {
        return convertCharCodeToString(shiftForUppercaseLetter(charCode, shiftValue));
    } else if (isCharCodeOfLowercaseLetter(charCode)) {
        return convertCharCodeToString(shiftForLowercaseLetter(charCode, shiftValue));
    } else {
        return charString;
    }
}

function getCharCode(singleCharString) {
    return singleCharString.charCodeAt(0);
}

function isCharCodeOfUppercaseLetter(charCode) {
    return ((UPPERCASE_CHARCODE_A <= charCode) && (charCode <= UPPERCASE_CHARCODE_Z));
}

function isCharCodeOfLowercaseLetter(charCode) {
    return (LOWERCASE_CHARCODE_A <= charCode) && (charCode <= LOWERCASE_CHARCODE_Z);
}

function convertCharCodeToString(charCode) {
    return String.fromCharCode(charCode);
}

function shiftForUppercaseLetter(charCode, shiftValue) {
    return shiftBetweenUpperAndLowerBound(charCode, shiftValue, UPPERCASE_CHARCODE_A, UPPERCASE_CHARCODE_Z);
}

function shiftForLowercaseLetter(charCode, shiftValue) {
    return shiftBetweenUpperAndLowerBound(charCode, shiftValue, LOWERCASE_CHARCODE_A, LOWERCASE_CHARCODE_Z);
}

function shiftBetweenUpperAndLowerBound(charCode, shiftValue, lowerBound, upperBound) {
    const range = upperBound - lowerBound + 1;
    let shiftedCharCode = charCode + shiftValue;
    while (shiftedCharCode < lowerBound) {
        shiftedCharCode += range;
    }
    while (shiftedCharCode > upperBound) {
        shiftedCharCode -= range;
    }
    return shiftedCharCode;
}



// Do not edit below this line
module.exports = caesar;

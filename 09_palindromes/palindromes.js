const palindromes = function (string) {
    parsedString = string.replace(/\W/g, '').toLowerCase();
    reverseParsedString = reverseString(parsedString);
    return parsedString === reverseParsedString;
};

function reverseString(string) {
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

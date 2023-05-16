const removeFromArray = function (array, ...elementsToRemove) {
    return array.filter(a => !elementsToRemove.includes(a));
};

// Do not edit below this line
module.exports = removeFromArray;

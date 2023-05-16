const fibonacci = function (number) {
    if(number < 0) {
        return 'OOPS';
    }
    fibonacciArray = [1, 1];
    while (fibonacciArray.length < number) {
        fibonacciArray.push(fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1]);
    }
    return fibonacciArray[fibonacciArray.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;

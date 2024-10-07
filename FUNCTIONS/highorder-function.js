// Higher Order Functions

// Takes another function as argument
function sumOfRange(startValue, endValue, operation) {
    if (startValue % 2 == 0) 
        startValue = startValue + 2; // Increment if even
    if (endValue % 2 != 0) 
        endValue = endValue - 2; // Decrement if odd
    return operation(startValue, endValue); 
}

function multiplyValues(a, b) {
    return a * b; // Example callback function for multiplication
}

console.log('answer is:', sumOfRange(12, 8, multiplyValues)); // answer is:14*8=112

// Return a function (Closure)
function createMultiplier(factor) {
    function applyMultiplier(value) {
        return value * factor;
    }
    return applyMultiplier;
}

let multiplyByFour = createMultiplier(4);
console.log(multiplyByFour(2)); // 8
console.log(multiplyByFour(4)); // 16
console.log(multiplyByFour(8)); // 32
console.log(multiplyByFour(9)); // 36
console.log(multiplyByFour(6)); // 24

let multiplyByThree = createMultiplier(3);
console.log(multiplyByThree(2)); // 6
console.log(multiplyByThree(4)); // 12
console.log(multiplyByThree(8)); // 24
console.log(multiplyByThree(9)); // 27
console.log(multiplyByThree(6)); // 18
console.log(multiplyByFour(10)); // 40

// Takes another function as argument and returns functions
function combineOperations(operationOne, operationTwo) {
    function executeOperations(inputValue) {
        return operationOne(operationTwo(inputValue));
    }

    return executeOperations;
}

const doubleValue = x => x * 2;   // Doubling the value
const tripleValue = x => x * 3;   // Tripling the value

let nestedFunction = combineOperations(doubleValue, tripleValue);
console.log(nestedFunction(12)); // 72 (12 * 3 = 36, then 36 * 2 = 72)

/* ============================================================
   JAVASCRIPT FUNCTIONS ASSIGNMENT
   ============================================================ */


/* ------------------------------------------------------------
   1. STRING MANIPULATION FUNCTIONS
   ------------------------------------------------------------ */

/**
 * Reverses a given string.
 * @param {string} str
 * @returns {string} the reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}


/**
 * Counts the number of characters in a string.
 * @param {string} str
 * @returns {number} the character count
 */
function countCharacters(str) {
    return str.length;
}


/**
 * Capitalizes the first letter of each word in a sentence.
 * @param {string} sentence
 * @returns {string} the sentence with each word capitalized
 */
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.length > 0
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            : word)
        .join(' ');
}


/* ------------------------------------------------------------
   2. ARRAY FUNCTIONS
   ------------------------------------------------------------ */

/**
 * Finds the maximum value in an array of numbers.
 * @param {number[]} arr
 * @returns {number} the maximum value
 */
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}


/**
 * Finds the minimum value in an array of numbers.
 * @param {number[]} arr
 * @returns {number} the minimum value
 */
function findMin(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}


/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr
 * @returns {number} the sum of the elements
 */
function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}


/**
 * Filters elements from an array based on a given condition (predicate function).
 * @param {Array} arr
 * @param {Function} condition - a function that returns true/false for each element
 * @returns {Array} a new array containing only the elements that satisfy the condition
 */
function filterArray(arr, condition) {
    return arr.filter(condition);
}


/* ------------------------------------------------------------
   3. MATHEMATICAL FUNCTIONS
   ------------------------------------------------------------ */

/**
 * Calculates the factorial of a given non-negative integer.
 * @param {number} n
 * @returns {number} n! (n factorial)
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


/**
 * Checks whether a given number is prime.
 * @param {number} num
 * @returns {boolean} true if num is prime, false otherwise
 */
function isPrime(num) {
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }
    // Only need to check up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


/**
 * Generates the Fibonacci sequence up to a given number of terms.
 * The Fibonacci sequence starts with 0 and 1, and each subsequent
 * term is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8, ...).
 * @param {number} numTerms - how many terms to generate
 * @returns {number[]} an array containing the Fibonacci sequence
 */
function fibonacciSequence(numTerms) {
    if (numTerms <= 0) return [];
    if (numTerms === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


/* ============================================================
   DEMO / TEST CALLS
   Run this file with Node.js (node functions.js) to see the
   output of every function printed to the console.
   ============================================================ */

console.log('--- String Manipulation Functions ---');
console.log('reverseString("Hello World"):', reverseString('Hello World'));
console.log('countCharacters("Hello World"):', countCharacters('Hello World'));
console.log('capitalizeWords("hello world from javascript"):', capitalizeWords('hello world from javascript'));

console.log('\n--- Array Functions ---');
const numbers = [4, 12, 1, 9, 23, 7];
console.log('Array:', numbers);
console.log('findMax:', findMax(numbers));
console.log('findMin:', findMin(numbers));
console.log('sumArray:', sumArray(numbers));
console.log('filterArray (even numbers):', filterArray(numbers, n => n % 2 === 0));
console.log('filterArray (greater than 8):', filterArray(numbers, n => n > 8));

console.log('\n--- Mathematical Functions ---');
console.log('factorial(5):', factorial(5));
console.log('factorial(0):', factorial(0));
console.log('isPrime(7):', isPrime(7));
console.log('isPrime(10):', isPrime(10));
console.log('fibonacciSequence(10):', fibonacciSequence(10));


/* ------------------------------------------------------------
   Export functions (useful if this file is imported as a module)
   ------------------------------------------------------------ */
module.exports = {
    reverseString,
    countCharacters,
    capitalizeWords,
    findMax,
    findMin,
    sumArray,
    filterArray,
    factorial,
    isPrime,
    fibonacciSequence
};

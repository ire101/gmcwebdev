/* ============================================================
   LEVEL 1 : BITWISE OPERATIONS
   ============================================================ */

/**
 * Calculates the bitwise AND of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} a & b
 */
function bitwiseAND(a, b) {
    return a & b;
}


/**
 * Calculates the bitwise OR of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} a | b
 */
function bitwiseOR(a, b) {
    return a | b;
}


/**
 * Calculates the bitwise XOR of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} a ^ b
 */
function bitwiseXOR(a, b) {
    return a ^ b;
}


/* ============================================================
   LEVEL 2 : A REDUNDANT FUNCTION
   ============================================================ */

/**
 * Takes a string and returns a function that, when called,
 * returns that same string (a simple closure example).
 * @param {string} str
 * @returns {Function} a function with no arguments that returns str
 */
function redundant(str) {
    return function () {
        return str;
    };
}


/* ============================================================
   LEVEL 3 : GET NOTES DISTRIBUTION
   ============================================================ */

/**
 * Takes an array of students (each with a "notes" array) and
 * returns an object representing how many times each valid note
 * (1 to 5) appears across all students. Invalid notes are ignored.
 * @param {Array<{name: string, notes: number[]}>} students
 * @returns {Object} an object mapping each valid note to its count
 */
function getNotesDistribution(students) {
    const VALID_NOTES = [1, 2, 3, 4, 5];

    return students
        .flatMap(student => student.notes)                 // combine all notes into one array
        .filter(note => VALID_NOTES.includes(note))         // keep only valid notes
        .reduce((distribution, note) => {
            distribution[note] = (distribution[note] || 0) + 1;
            return distribution;
        }, {});
}


/* ============================================================
   DEMO / TEST CALLS
   Run with: node level-functions.js
   ============================================================ */

console.log('--- Level 1: Bitwise Operations ---');
console.log('bitwiseAND(6, 23):', bitwiseAND(6, 23), '->', bitwiseAND(6, 23).toString(2).padStart(8, '0'));
console.log('bitwiseOR(6, 23):', bitwiseOR(6, 23), '->', bitwiseOR(6, 23).toString(2).padStart(8, '0'));
console.log('bitwiseXOR(6, 23):', bitwiseXOR(6, 23), '->', bitwiseXOR(6, 23).toString(2).padStart(8, '0'));
console.log('bitwiseAND(7, 12):', bitwiseAND(7, 12));
console.log('bitwiseOR(7, 12):', bitwiseOR(7, 12));
console.log('bitwiseXOR(7, 12):', bitwiseXOR(7, 12));

console.log('\n--- Level 2: A Redundant Function ---');
const f1 = redundant('apple');
console.log('f1():', f1());
const f2 = redundant('pear');
console.log('f2():', f2());
const f3 = redundant('');
console.log('f3():', JSON.stringify(f3()));

console.log('\n--- Level 3: Get Notes Distribution ---');
const students = [
    { name: 'Steve', notes: [5, 5, 3, -1, 6] },
    { name: 'John', notes: [3, 2, 5, 0, -3] }
];
console.log('getNotesDistribution(students):', getNotesDistribution(students));


/* ------------------------------------------------------------
   Export functions (useful if this file is imported as a module)
   ------------------------------------------------------------ */
module.exports = {
    bitwiseAND,
    bitwiseOR,
    bitwiseXOR,
    redundant,
    getNotesDistribution
};

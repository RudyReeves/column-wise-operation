/***
 * Given a 2D array and an operation, write a function
 * `f` that performs the given operation column-wise and
 * produces an array. For example, `f([ [1,2], [3,4]], add)`
 * should produce `[4,6]` because the inner arrays are added 
 * column-wise to produce `[1+3, 2+4]`.
 */

// Here's my solution in JavaScript:

 const f = ([firstArray, ...rest], operation) =>
 !firstArray ? [] : firstArray
     .map((_, i) => i)
     .reduce((partialResult, i) => [
             ...partialResult,
             rest.map(a => a[i])
                 .reduce(operation, firstArray[i])
         ], []);

const tests = [
    [],
    [ [1,1], [1,1] ],
    [ [1,2], [3,4] ],
    [ [0,2], [100,45], [-1, 0] ],
    [ [0,2,4], [100,45,1], [-1, 0,0] ],
    [ [0,2,4], [100,45,1] ]
];

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

for (const test of tests) {
    console.log(f(test, add));
    console.log(f(test, multiply));
}

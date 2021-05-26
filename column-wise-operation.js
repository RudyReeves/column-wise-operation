/***
 * (Problem statement omitted)
 */

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

/***
 * (Problem statement omitted)
 */

const f = (arrayOfArrays, operation) => {
    if (arrayOfArrays.length === 0) { return []; }
    const [firstArray, ...rest] = arrayOfArrays;
    const numColumns = firstArray.length;
    const result = [];
    for (let i = 0; i < numColumns; i++) {
        result.push(
            rest.map(a => a[i])
                .reduce(operation, firstArray[i])
        );
    }
    return result;
};

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

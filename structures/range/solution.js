function range(numStart, numEnd, step) {
    const result = [];
    if (arguments.length < 3) step = 1;
    const length = Math.abs(numStart - numEnd);
    for (let i = 0; Math.abs(i) < length + 1; i += step) {
        result.push(numStart + i);
    }
    return result;
}

function sum(array) {
    return array.reduce((a,b) => a + b);
}

console.log(sum(range(10, 1, -1)));
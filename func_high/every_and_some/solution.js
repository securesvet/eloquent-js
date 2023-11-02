function every(array, fn) {
    for (const e of array) {
        if (fn(e) === false) return false;
    }
    return true;
}

function some(array, fn) {
    for (const e of array) {
        if (fn(e) === true) return true;
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, 4, NaN], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
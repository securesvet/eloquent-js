function deepEqual(objectA, objectB) {
    if (objectA === objectB) return true;
    if (objectA === null || objectB === null) return false;
    let keysA = Object.keys(objectA).sort();
    let keysB = Object.keys(objectB).sort();
    if (keysA.length !== keysB.length) return false;
    console.log(keysA, keysB)
    for (let i = 0; i < keysA.length; i++) {
        if (keysA[i] !== keysB[i] || !deepEqual(objectA[keysA[i]], objectB[keysB[i]])) return false;
    }
    return true;
}

function isObject(input) {
    return typeof input === 'object';
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 'is', object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {hered: {is: "an"}, object: 2}));
// -> false
console.log(deepEqual(obj, null));
// -> false
console.log(deepEqual(null, null))
// -> false

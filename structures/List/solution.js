// var list = {
// value: 1,
// rest: {
// value: 2,
// rest: {
// value: 3,
// rest: null
// }
// }
// };

function arrayToList(array) {
    if (array.length === 0) return;
    let list = null;
    for (let i = array.length - 1; i >= 0; --i) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    if (list.length === 0) return;
    let result = [];
    while (list.rest !== null) {
        result.push(list.value);
        list = list.rest;
    }
    return result;
}

console.log(listToArray(arrayToList([10, 20, 30, 31203, 3, 12])));
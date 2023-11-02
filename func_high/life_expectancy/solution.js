import ANCESTRY_FILE from '../age_diff/ancestry.js'

let ancestry = JSON.parse(ANCESTRY_FILE);
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

let ages = {};

function getAge(person) {
    return person.died - person.born;
}

ancestry.forEach((person) => {
    let century = Math.ceil(person.died / 100)
    if (ages[century] !== undefined) {
        ages[century].push(getAge(person));
    } else {
        ages[century] = [getAge(person)];
    }
})

for (let key in ages) {
    console.log(`${key}: ${(average(value)).toFixed(1)}`);
}
// Тут ваш код
// → 16: 43.5
//17: 51.2
//18: 52.8
//19: 54.8
//20: 84.7
//21: 94
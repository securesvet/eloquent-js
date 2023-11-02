import ANCESTRY_FILE from './ancestry.js'

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

let ancestry = JSON.parse(ANCESTRY_FILE);

let byName = {};

ancestry.forEach(function(person) {
    byName[person.name] = person;
});
console.log(
    average(
        ancestry
            .filter(person => {
            return byName[person.mother] !== undefined
            })
            .map((person) => {
            return person.born - byName[person.mother].born;
            })
    )
);

const person = {
    name: 'Svet',
    age: 20,
    greet: function() {
        console.log('Greetings!');
    }
}

Object.prototype.sayHi = function() {
    console.log('Hi!');
}

//person.sayHi();

const lena = Object.create(person);
lena.name = 'Elena';
console.log(lena)

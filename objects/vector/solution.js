function isVector(obj) {
    return obj instanceof Vector;
}

function Vector(x, y) {
    this.x = x;
    this.y = y;
    Vector.prototype.length = Math.sqrt(this.x ** 2 + this.y ** 2);
}

Vector.prototype.plus = function (obj) {
    if (!isVector(obj)) return;
    return new Vector(obj.x + this.x, obj.y + this.y);
}

Vector.prototype.minus = function (obj) {
    if (!isVector(obj)) return;
    return new Vector(this.x - obj.x, this.y - obj.y);
}


Vector.prototype.toString = function toString() {
    return 'Vector { x: ' + this.x + ', y: ' + this.y + ' }';
}

// Ваш код
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
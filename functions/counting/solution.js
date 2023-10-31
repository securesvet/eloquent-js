function countChar(inputString, char) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (char === inputString.charAt(i)) {
            count++;
        }
    }
    return count;
}

console.log(countChar('Happy birthday!', 'a')) //2
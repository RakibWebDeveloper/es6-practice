function add () {
    return [...arguments].reduce((a, b) => (a + b), 0);
}

console.log(add(1,2,3,4));

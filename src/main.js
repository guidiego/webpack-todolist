const sum = (x, y) => x + y;
const numbers = [1,2,3,4];

const reduced = numbers.reduce((a,c) => sum);

console.log('Reduced numbers', reduced);

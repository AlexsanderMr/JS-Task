const stack = [];
stack.unshift(2, 3, 4);
stack.push(5, 6, 7);
const numbers = stack.slice(-3);
console.log(numbers);
console.log(stack);
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice().reverse();
console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
newNumbers = [...numbers].sort((num1, num2) => num2 - num1);

console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]

// const numbers=[1,2,3,4,5,6];

// console.log(numbers[0]);

// const num= new array(1,2,3,4,5)
// console.log(num[3]);

const num = new Array(1, 2, 3, 4, 5);
console.log(num[3]);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers[0]);



numbers.push(7);
console.log(numbers);
numbers.pop();
console.log(numbers);

numbers.unshift(9);
console.log(numbers);
numbers.shift();
console.log(numbers);

console.log(numbers.includes(9));
console.log(numbers.indexOf(3));

const newArray = numbers.join();
console.log(numbers);
console.log(newArray);

console.log("A:",numbers);
const mynew1= numbers.slice(1,3);
console.log(mynew1);
console.log("B:",numbers);
const mynew2= numbers.splice(1,3);
console.log(mynew2);
console.log(numbers);
// splice change the original array as that remove the values from the main array that is one more value
//slice do not chnage the original array



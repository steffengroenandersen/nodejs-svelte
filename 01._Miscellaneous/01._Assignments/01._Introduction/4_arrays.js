// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console

// Accessing by index
console.log(letters[1]);

// find method
const letterB = letters.find((letter) => letter === "b");
console.log(letterB);

// indexOf method
const indexOfB = letters.indexOf("b");
const newLetterB = letters[indexOfB];
console.log(newLetterB);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.

// push method
friends.push("Steffen");
friends.push("Mathias");
friends.push("Anders");

console.log(friends);

// spread method
const moreFriends = ["Morten", "Jacob"];
const newFriends = [...friends, ...moreFriends];

console.log(newFriends);

// shift method
newFriends.unshift("Lars");

console.log(newFriends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value.

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value).

// indexOf method
const indexOf1729 = significantMathNumbers.indexOf(1729);

console.log(significantMathNumbers[indexOf1729]);

// loop method

let newIndexOf1729;
for (let i = 0; i < significantMathNumbers.length; i++) {
  if (significantMathNumbers[i] === 1729) {
    newIndexOf1729 = i;
    break;
  }
}

console.log(significantMathNumbers[newIndexOf1729]);

// Find index
const newNewIndexOf1729 = significantMathNumbers.findIndex((value) => value === 1729);

console.log(significantMathNumbers[newNewIndexOf1729]);

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger", "soda", "pizza");

console.log(diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.

// pop
diet.pop();

console.log(diet);

// define new length
diet.length = diet.length - 1;

console.log(diet);

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.

const dinnerTray = [...diet];

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

// modulo method
for (let i = 0; i < lettersExpanded.length; i++) {
  if (i % 2 === 1) {
    console.log(lettersExpanded[i]);
  }
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 6 || numbers[i] < 0) {
    console.log(numbers[i]);
  } else {
    discardedNumbers.push(numbers[i]);
  }
}

console.log(discardedNumbers);

// --------------------------------------

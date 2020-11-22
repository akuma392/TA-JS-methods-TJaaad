let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr) {
  let larg = " ";
  for (let i of arr) {
    if (i.length > larg.length) {
      larg = i;
    }
  }
  return larg;
}
console.log(findLongestWord(words));
// - Convert the above array "words" into an array of length of word instead of word.

console.log(words.map((str) => str.length));

// - Create a new array that only contains word with atleast one vowel.
console.log(words.filter((str) => str.includes("a", "e", "i", "o", "u")));

// - Find the index of the word "rhythm"

console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.

console.log(
  words.filter(
    (str) =>
      str[0] != "a" &&
      str[0] != "e" &&
      str[0] != "i" &&
      str[0] != "o" &&
      str[0] != "u"
  )
);

// - Create a new array that contianse words not ending with vowel

console.log(
  words.filter(
    (str) =>
      str[str.length - 1] != "a" &&
      str[str.length - 1] != "e" &&
      str[str.length - 1] != "i" &&
      str[str.length - 1] != "o" &&
      str[str.length - 1] != "u"
  )
);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(array) {
  let sum = 0;
  for (let i of array) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumArray(numbers));

console.log(numbers.reduce((acc, current) => acc + current, 0));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

console.log(numbers.filter((num) => num % 3 == 0));

// - Create a new array that contains only even numbers

console.log(numbers.filter((num) => num % 2 == 0));

// - Create  a new array that contains only odd numbers.
console.log(numbers.filter((num) => num % 2 !== 0));

// - Create a new array that should have true for even number and false for odd numbers.

console.log(numbers.map((num) => (num % 2 == 0 ? true : false)));

// - Sort the above number in assending order.
console.log(numbers.sort((a, b) => a - b));

// - Does sort mutate the original array?

//yes it mutate the original array

// - Find the sum of the numbers in the array.

console.log(numbers.reduce((acc, current) => acc + current, 0));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr) {
  let sum = arr.reduce((acc, current) => acc + current, 0);
  console.log(sum);
  return sum / arr.length;
}
console.log(averageNumbers(numbers));

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

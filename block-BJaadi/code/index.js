// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

// - Find the index of `101` in numbers
console.log(numbers.findIndex((num) => num == 101));
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
let arr = [...strings];

console.log(arr.push("called", "sentence"));
console.log(arr);

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(arr.join(" "));
// - Remove the first word in the array (strings)
console.log(arr.shift());
console.log(arr);

// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter((str) => str.includes("is")));

// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.filter((str) => str.indexOf("is") > 0));

// - Check if all the numbers in numbers array are divisible by three use array method (every)

console.log(numbers.every((num) => num % 3 == 0));
// -  Sort Array from smallest to largest
console.log(numbers.sort((a, b) => a - b));
// - Remove the last word in strings
let newStr = [...strings];
console.log(newStr.pop());
console.log(newStr);
// - Find largest number in numbers
function largest(arr) {
  let larg = 0;
  for (let i of arr) {
    if (larg < arr[i]) {
      larg = arr[i];
    }
  }
  return larg;
}
console.log(largest(numbers));

// - Find longest string in strings

// - Find all the even numbers
console.log(numbers.filter((num) => num % 2 == 0));

// - Find all the odd numbers
console.log(numbers.filter((num) => num % 2 !== 0));

// - Place a new word at the start of the array use (upshift)
console.log(strings.unshift("new"));
console.log(strings);

// - Make a subset of numbers array [18,9,7,11]
var numbers1 = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
console.log(numbers1.indexOf(18));
console.log(numbers1.indexOf(11));

console.log(numbers1.splice(3, 4));

// - Make a subset of strings array ['a','collection']
console.log(strings.indexOf("a"));
console.log(strings.indexOf("collection"));
console.log(strings.splice(3, 2));

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word
let strLength = strings.map((str) => str.length);
console.log(strLength);

// - Find the sum of the length of words using above question
console.log(strLength.reduce((acc, num) => acc + num));

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
console.log(
  customers.forEach((str) => {
    if (str.firstname[0] == "J") {
      console.log(str);
    }
  })
);

// - Create new array with only first name
let firstName = customers.map((str) => str.firstname);
console.log(firstName);

// - Create new array with all the full names (ex: "Joe Blogs")
let fullname = customers.map((str) => `${str.firstname} ${str.lastname}`);
console.log(fullname);

// - Sort the array created above alphabetically
console.log(fullname.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.

fullname.unshift("ABhi");
console.log(
  fullname.filter(
    (str) =>
      str[0] == "A" ||
      str[0] == "E" ||
      str[0] == "I" ||
      str[0] == "O" ||
      str[0] == "U"
  )
);

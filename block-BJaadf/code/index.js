let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new element ('Papaya') into fruits array at end

console.log(fruits.push("Papaya"));
console.log(fruits);

// Remove the last element from fruits array
console.log(fruits.pop());
console.log(fruits);

// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits);

// Log the element on index 0 and 1
console.log(fruits[0], fruits[1]);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
console.log(fruits.shift("Banana"));
console.log(fruits);
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava");
console.log(fruits);

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

console.log(fruits.unshift("Dragonfruit"));
console.log(fruits);
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

// Update the value of index 1 to `Pears`
fruits[1] = "Pears";
console.log(fruits);
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
console.log(fruits.splice(1, 2, "Kiwi", "Lemon"));

// Remove (slice) all the element from index 5

console.log(fruits.slice(5));

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ["Berries", "Melon"];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
console.log(fruits.concat(moreFruits));
fruits = fruits.concat(moreFruits);

// Log the name of all fruit in console
fruits.forEach((num) => console.log(num));

// Convert each fruit name to lowercase and log it

console.log(fruits.join(" ").toLowerCase().split(" "));

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = fruits.join(" ").toLowerCase().split(" ");

console.log(lowercaseFruits);

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = fruits.join(" ").toUpperCase().split(" ");
console.log(uppercaseFruits);

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat());
console.log(numbersTwo.flat(Infinity));
console.log(numbersThree.flat(Infinity));

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
console.log(numbersTwo.flat(1));
let arr = numbersTwo.flat(1);
console.log(arr);

// Convert the numbersThree array to one level element.
console.log(numbersThree.flat());
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

// Use forEach to log all the elements of numberThree array

numbersThree.forEach((num) => console.log(num));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
numbersThree = numbersThree.flat(Infinity);
let doubleNumbers = numbersThree.map((num) => num * 2);
console.log(doubleNumbers);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

let tripleNumbers = numbersThree.map((num) => num * 3);
console.log(tripleNumbers);
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.map((num) => num * 0.5);
console.log(halfNumbers);
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

console.log(numbersThree.filter((num) => num % 2 !== 0));

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
console.log(numbersThree.filter((num) => num % 2 == 0));

// Find the index of 10 in numbersThree array
console.log(numbersThree.findIndex((num) => num == 10));

// Reverse the values of numbersThree array
console.log(numbersThree.reverse());

// Reverse the values of numbersTwo array
numbersTwo = numbersTwo.flat(Infinity);
console.log(numbersTwo.reverse());

// Join all fruits with '-', convert to uppercase and log it

console.log(fruits.join("-"));

// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join("&"));

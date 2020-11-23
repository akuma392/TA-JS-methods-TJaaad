let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map((str) => str.name);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((str) => str.grade);
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((str) => str.sex);
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(peopleName.filter((str) => str[0] == "J" || str[0] == "P"));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

console.log(peopleName.filter((str) => str[0] == "A" || str[0] == "C"));
// Log all the filtered male ('M') in persons array
console.log(peopleName.filter((str) => str.includes("M") || str.includes("m")));

// Log all the filtered female ('F') in persons array

let female = persons.filter((str) => str.sex == "F");

console.log(female.map((arr) => arr.name));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let femaleName = female.map((arr) => arr.name);

console.log(femaleName.filter((str) => str[0] == "C" || str[0] == "J"));

// Log all the even numbers from peopleGrade array

console.log(peopleGrade.filter((num) => num % 2 == 0));

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.filter((str) => str.name[0] == "J"));

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.filter((str) => str.name[0] == "P"));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((str) => str.sex == "F");
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((str) => str.sex == "M");
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc, current) => acc + current, 0);
console.log(gradeTotal);

// Find the average grade

console.log(gradeTotal / peopleGrade.length);

// Find the average grade of male
let maleGrade = persons.filter((arr) => arr.sex == "M");
maleGrade = maleGrade.map((arr) => arr.grade);
console.log(maleGrade);

console.log(
  maleGrade.reduce((acc, current) => acc + current, 0) / maleGrade.length
);

// Find the average grade of female
let femaleGrade = persons.filter((arr) => arr.sex == "F");
femaleGrade = femaleGrade.map((arr) => arr.grade);
console.log(femaleGrade);

console.log(
  femaleGrade.reduce((acc, current) => acc + current, 0) / femaleGrade.length
);

// Find the highest grade

let highest = 0;

for (i of persons) {
  if (i.grade > highest) {
    highest = i.grade;
  }
}
console.log(highest);
// Find the highest grade in male
let a = 0;
for (i of maleGrade) {
  if (i > a) {
    a = i;
  }
}
console.log(a);
// Find the highest grade in female
let b = 0;
for (i of femaleGrade) {
  if (i > b) {
    b = i;
  }
}
console.log(b);

// Find the highest grade for people whose name starts with 'J' or 'P'

let nameWithJ_P = persons.filter(
  (str) => str.name[0] == "J" || str.name[0] == "P"
);
console.log(nameWithJ_P);

let highGrade = 0;

for (let i of nameWithJ_P) {
  if (i.grade > highGrade) {
    highGrade = i.grade;
  }
}
console.log(highGrade);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log(peopleGrade.sort((a, b) => a - b));
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let peopleGrade1 = persons.map((str) => str.grade);
console.log(peopleGrade1);

let peopleGrade2 = [...peopleGrade1];

console.log(peopleGrade2.sort((a, b) => a - b));
console.log(peopleGrade1);
// Sort the array peopelName in ascending `ABCD..Za....z`

let peopelName1 = [...peopleName];
console.log(peopelName1);

console.log(peopelName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

console.log(peopleName1.sort());
console.log(peopleName);

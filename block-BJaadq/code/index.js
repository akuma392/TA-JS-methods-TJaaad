// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople(arr) {
  let totalPeople = 0;
  got.houses.forEach(
    (houses) => (totalPeople = totalPeople + houses.people.length)
  );
  return totalPeople;
}

function peopleByHouses() {
  let peoplHouses = {};
  got.houses.forEach((house) => {
    peoplHouses[house.name] = house.people.length;
  });
  return peoplHouses;
}
function everyone(str) {
  let everyPeople = [];
  got.houses.forEach((house) => {
    let peopleAll = house.people.map((perrson) => perrson.name);
    everyPeople = everyPeople.concat(peopleAll);
  });
  return everyPeople;
}
// function everyone(str) {
//   let everyPeople = [];
//   got.houses.forEach((house) => {
//     everyPeople = everyPeople.concat(
//       house.people.map((person) => {
//         person.name;
//       })
//     );
//   });
//   return everyPeople;
// }

function nameWithS() {
  let everyPeople = [];
  got.houses.forEach((house) => {
    let peopleAll = house.people.map((perrson) => perrson.name);
    everyPeople = everyPeople.concat(peopleAll);
  });
  return everyPeople.filter((str) => str.includes("S") || str.includes("s"));
}

function nameWithA(str) {
  let peopleAll = everyone(str);
  return peopleAll.filter((name) => name.includes("A") || name.includes("a"));
}

function surnameWithS(str) {
  let peopleAll = everyone(str);
  return peopleAll.filter(
    (name) =>
      name.split(" ")[1].includes("S") || name.split(" ")[1].includes("s")
  );
}

function surnameWithA() {
  let peopleAll = everyone();
  return peopleAll.filter(
    (name) =>
      name.split(" ")[1].includes("A") || name.split(" ")[1].includes("a")
  );
}

function peopleNameOfAllHouses() {
  let arr = {};
  got.houses.forEach(
    (house) => (arr[house.name] = house.people.map((str) => str.name))
  );
  return arr;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

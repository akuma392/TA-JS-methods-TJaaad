Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
  separator Optional - it can be anything like , - or any special character which will be included between n
- Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
- Example:
  ```js
  let array = [1, 2, 3, 4];
  console.log(array.join("-")); //"1-2-3-4"
  const elements = ["Fire", "Air", "Water"];
  console.log(elements.join()); //"Fire,Air,Water"
  console.log(elements.join("")); //"FireAirWater"
  ```
- `join` accepts n number of values and returns one array with all joined value. It does not change the original array.
- No it does not mutate the original array

3. `flat`

- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
  depth Optional - it decide how deep a nested array structure should be flattened. By default depth level is 1
- Return: new array with the sub-array elements concatenated into i
- Example:
  ```js
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat()); //Array [0, 1, 2, 3, 4]
  let arr = ["a", "b", "c", ["A", "B"]];
  console.log(arr.flat()); //Array ["a", "b", "c", "A", "B"]
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  console.log(arr2.flat(Infinity)); //Array [0, 1, 2, 3, 4]
  ```
- `flat` accepts n number of values and creates a new array with all sub-array elements concatenated into it.
- No it does not mutate the original array

4. `push`

- Parameter: accept n number of elements like anything number,string,boolean
- Return: new array with the elementn is added to last index of original array
- Example:
  ```js
  const animals = ["pigs", "goats", "sheep"];
  console.log(animals.push("cows")); //Array ["pigs", "goats", "sheep", "cows"]
  animals.push("chickens", "cats", "dogs");
  console.log(animals); //Array ["pigs", "goats", "sheep", "cows", "chicken","dog","cat"]
  ```
- `push` accept n number of elements and all get added to last index of array. it change the origianl array
- mutate the original array

5. `indexOf`

- Parameter:
  searchElement: Element to locate in the array.
  fromIndex Optional:By default it start locating from 0th index we can provide any other index
- Return: The first index of the element in the array; -1 if not found.
- Example:
  ```js
  const beasts = ["ant", "bison", "camel", "duck", "bison"];
  console.log(beasts.indexOf("bison")); //1
  console.log(beasts.indexOf("bison", 2)); //4
  console.log(beasts.indexOf("Bison")); //-1
  ```
- `indexOf` accept element to be serached in array and return the first index where number is present or else return -1 if it is not in array
- No it does not mutate the original array

6. `lastIndexOf`

- Parameter:
  searchElement: Element to locate in the array.
  fromIndex Optional:By default it start locating from 0th index we can provide any other index
- Return: The last index of the element in the array; -1 if not found.
- Example:
  ```js
  const beasts = ["ant", "bison", "camel", "duck", "bison"];
  console.log(beasts.lastIndexOf("bison")); //4
  const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
  console.log(animals.lastIndexOf("Dodo")); //3
  ```
- `lastIndexOf` accept element to be serached in array and return the last index where number is present or else return -1 if it is not in array
- No it does not mutate the original array

7. `includes`

- Parameter:
  valueToFind: The value to search for
  fromIndex Optional:By default it start searching from 0th index we can provide any other index
- Return: boolean value. If it is found return true ior else false
- Example:
  ```js
  const array1 = [1, 2, 3];
  console.log(array1.includes(2)); //true
  console.log(array1.includes(0)); //false
  const pets = ["cat", "dog", "bat"];
  console.log(pets.includes("cat")); //true
  ```
- `includes` accept element to be serached in array and return boolean value. If it is found then true else return false
- No it does not mutate the original array

8. `reverse`
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`

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

- Parameter: accept an array of number , string or boolean
- Return: return an array with reverse element
- Example:
  ```js
  const array1 = [1, 2, 3];
  console.log(array1.reverse()); //Array[3,2,1]
  const pets = ["cat", "dog", "bat"];
  console.log(pets.reverse());//Array["bat","dog","cat"
  let arr = ["A","B","C"]
  console.log(arr.reverse());//Array ["C", "B", "A"]
  ```
- `reverse` accept an array and reverse the element and return an array.
- mutate the original array
9. `every`

- Parameter:
         callback: A function to test for each element, taking three arguments:
         elements: The current element being processed in the array.
         index Optional: The index of the current element being processed in the array.
         array Optional: The array every was called upon
         thisArg Optional:A value to use as this when executing callback.
- Return: true if the callback function returns a truthy value for every array element. Otherwise, false
- Example:
  ```js
   const isBelowThreshold = (currentValue) => currentValue < 30;
   const array1 = [1, 30, 39, 29, 10, 13];
   console.log(array1.every(isBelowThreshold));//false
   const positiveNumber = (number) => number > 0;
   console.log(array1.every(positiveNumber));//true
  ```
- `every` accept a callback function as argument and then it will check condition that all elements of an array fulfiling the callback function condition then return true else false 
- No it does not mutate the original array
10. `shift`

- Parameter: accept no parameter
- Return: shift remove first index element and return as result
- Example:
  ```js
  const array1 = [1, 2, 3];
  onsole.log(array1.shift());//1
  let arr = ["A","B","C","D","E"]
  console.log(arr.shift());//"A"
  ```
- `shift` doesnt accept any parameter. It remove the first index of array and return the removed element 
-  mutate the original array
11. `splice`

- Parameter: it accept 3 paramter
      start:  it is first index from where we want to remove the element
      deleteCount Optional: it is optional value. it specify how many element should be remove. if it is not mentioned then entire element should be removed from start to end
      string: we can provide a string or number to which will be replaced by removed element
- Return: An array containing the deleted elements
- Example:
  ```js
    const months = ['Jan', 'March', 'April', 'June'];
    console.log(months.splice(1,2,"Oct"));//Array ["Jan", "Oct", "June"]
    let arr = [1,2,3,4,6]
    arr.splice(0,1,6);
    console.log(arr);// Array [6, 2, 3, 4, 6]
  ```
- `splice` accept two parameter which decide from which index element will be deleted and count decide how many element will be removed. It return an array with removed elements 
-  mutate the original array
12. `find`

- Parameter:
         callback: Function to execute on each value in the array, taking 3 arguments:
         element: The current element in the array.
         index Optional: The index (position) of the current element in the array.
         array Optional: The array that find was called on.
         thisArg Optional:Object to use as this inside callback.
- Return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returne
- Example:
  ```js
   const array1 = [5, 12, 8, 130, 44];
   const found = array1.find(element => element < 9);
   console.log(found);//8
   let arr = [12,0,34,-1,6]
   let negative = (number) => number < 0;
   console.log(arr.find(negative));//-1
   
  ```
- `find` The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
- No it does not mutate the original array
13. `unshift`



- Parameter: (elementN)The elements to add to the front of the arr.
- Return: The new length property of the object upon which the method was called.
- Example:
  ```js
  const array1 = [1, 2, 3];
  console.log(array1.unshift(4, 5));
  console.log(array1);//Array [4, 5, 1, 2, 3]
  let arr = ["A","B","C"]
  console.log(arr.unshift("a","b"));//5
  console.log(arr);//Array ["a", "b", "A", "B", "C"]
  ```
- `unShift` The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
-  mutate the original array
14. `findIndex`

- Parameter:
  callback : A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
  element: The current element being processed in the array.
  index Optional: ndex of the current element being processed in the array.
  array Optional: The array findIndex() was called upon.
  thisArg Optional: Optional object to use as this when executing callback
- Return: The index of the first element in the array that passes the test. Otherwise, -1.
- Example:
  ```js
   const array1 = [5, 12, 8, 130, 44];
   const isLargeNumber = (element) => element > 13;
   console.log(array1.findIndex(isLargeNumber));//3
  
  let arr = ["A","B","C","D"]
  let isC = (a) => a == "C" ;
  console.log(arr.findIndex(isC));//2
  ```
- `findIndex` The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
- No it does not mutate the original array
15. `filter`

- Parameter:
  callback : Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise
  currentValue: The current element being processed in the array.
  index otional: The index of the current element being processed in the array
  array Optional: The array findIndex() was called upon.
  thisArg Optional: Value to use as this when executing callback.
- Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned..
- Example:
  ```js
   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
   const result = words.filter(word => word.length > 6);
   console.log(result);// Array ["exuberant", "destruction", "present"]
  
  ```
- `filter` filter() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
- No it does not mutate the original array
16. `flat`
17. `forEach`

- Parameter:
  callback : Function to execute on each element. It accepts between one and three arguments:
  currentValue: The current element being processed in the array
  index otional: The index of currentValue in the array.
  array Optional: The array forEach() was called upon.
  thisArg Optional: Value to use as this when executing callback.
- Return: undefined.
- Example:
  ```js
   const array1 = ['a', 'b', 'c'];
   array1.forEach(element => console.log(element));//"a" "b" "c"
   let arr = [1,2,3,4,5];

   function eachElement(arr){
   console.log(arr)}
   console.log(arr.forEach(eachElement));//1,2,3,4,5
  
  ```
- `forEach` The forEach() method executes a provided function once for each array element.
- No it does not mutate the original array

18. `map`

- Parameter:
  callback : Function that is called for every element of arr. Each time callback executes, the returned value is added to newArray.
  currentValue: The current element being processed in the array.
  index otional: The index of the current element being processed in the array.
  array Optional: The array map was called upon
  thisArg Optional: Value to use as this when executing callback.
- Return: A new array with each element being the result of the callback function.
- Example:
  ```js
  const array1 = [1, 4, 9, 16];
  const map1 = array1.map(x => x * 2);
  console.log(map1);// Array [2, 8, 18, 32]

   let arr = [1,2,3,4]
   let square = (num) => num*num;
   let result = arr.map(square);
   console.log(result);//Array [1, 4, 9, 16]
  
  ```
- `map` The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- No it does not mutate the original array
19. `pop`
- Parameter: no parameter
- Return: it will return the removed last index element
- Example:
  ```js
  const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
   console.log(plants.pop());//"tomato"
   console.log(plants);// Array ["broccoli", "cauliflower", "cabbage", "kale"]

   let arr = [1,2,3,4]
   console.log(arr.pop())//4
   console.log(arrArray [1,2,3]
  
  ```
- `pop` The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
- No it does not mutate the original array
- mutate the original array

20. `reduce`
- Parameter:
  callback :A function to execute on each element in the array (except for the first, if no initialValue is supplied)
  accumulator: The accumulator accumulates callback's return values
  urrentValue: The current element being processed in the array
  array Optional: The array map was called upon
  index optional:The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1
  initialValue Optional: A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as     initial accumulator value and skipped as currentValue
- Return: The single value that results from the reduction.
- Example:
  ```js
   const array1 = [1, 2, 3, 4];
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   console.log(array1.reduce(reducer));//10
   console.log(array1.reduce(reducer, 5));//15
  
  ```
- `map` The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
- No it does not mutate the original array
21. `slice`

- Parameter:
  start Optional :Zero-based index at which to start extraction.
 end Optional: Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
- Return: return an array containing filtered elements
- Example:
  ```js
   const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
   console.log(animals.slice(2));//Array ["camel", "duck", "elephant"]
   console.log(animals.slice(2, 4));//Array ["camel", "duck"]
   console.log(animals.slice(1, 5));//Array ["bison", "camel", "duck", "elephant"]
  
  ```
- `slice`return sliced item into new array. It will slice item from first parameter to last parameter
- No it does not mutate the original array
22. `some`
- Parameter:
  callback :A function to test for each element, taking three arguments:
  element: The current element being processed in the array.
  array Optional: The array map was called upon
  index optional:The index of the current element being processed in the array.
  thisArgOptional : A value to use as this when executing callback.
- Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
- Example:
  ```js
    const array = [1, 2, 3, 4, 5];
   const even = (element) => element % 2 === 0;
   console.log(array.some(even));//true
   let arr = [1,2,3,0]
   console.log(arr.some((num) => num ==0));//true

  
  ```
- `some` The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
- No it does not mutate the original array

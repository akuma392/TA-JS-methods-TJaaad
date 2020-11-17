Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- Parameter: accpets string -(string data type)
- Return: string converted to upper case
- Example:
  ```Js
  let user = "abhi"
  user.toUpperCase();//"ABHI"
  let message = "hello world!";
  message.toUpperCase();//"HELLO WORLD!"
  let str = 'a';
  dtr.toUppercase();//"A"
  ```

3. `toLowerCase`

- Parameter: accpets string -(string data type)
- Return: string converted to lower case
- Example:
  ```Js
  let user = "ABHI"
  user.toLowerCase();//"abhi"
  let message = "HELLO WORLD!";
  message.toLowerCase();//"hello world!"
  let str = 'A';
  dtr.toLowercase();//"a"
  ```

4. `trim`

- Parameter:
  searchString: The characters to be searched for at the end of str.(string data type)
  length : it is used as the length of str. Defaults to str.length - Optional
- Return: True or false if searchstring is
- Example:
  ```Js
  let msg = "  hello  "
  msg.trim();//"hello"
  let greeting = "good morning   ";
  greeting.trim();//"good morning"
  let str = '  A';
  str.trim;//"A"
  ```

5. `trimEnd`

- Parameter: accpets string -(string data type)
- Return: new string representing the str stripped of whitespace from end.
- Example:
  ```Js
  let msg = "hello  "
  msg.trimEnd();//"hello"
  let greeting = "good morning   ";
  greeting.trimEnd();//"good morning"
  let str = 'A ';
  str.trimEnd();//"A"
  ```

6. `trimStart`

- Parameter: accpets string -(string data type)
- Return: new string representing the str stripped of whitespace from the begining.
- Example:
  ```Js
  let msg = "  hello"
  msg.trimStart();//"hello"
  let greeting = "  good morning";
  greeting.trimStart();//"good morning"
  let str = ' A';
  str.trimStart();//"A"
  ```

7. `concat`

- Parameter: Strings to concatenate to str -(string data type)
- Return: A new string containing the combined text of the strings provided.
- Example:

  ```Js
  const str1 = 'Hello';
  const str2 = 'World';
  console.log(str1.concat(' ', str2)); //'Hello World'
  console.log(str2.concat(', ', str1));//'WOrld, Hello'

  ```

8. `endsWith`

- Parameter:
  searchString: The characters to be searched for at the end of str.
  length - Optional :it is used as the length of str. Defaults to str.length.
- Return: true or false if searchstring is present in the string
- Example:

  ```Js
  const str1 = 'Cats are the best!';
  str1.endsWith('best');//true
  str1.endsWith('best',17);//true
  str1.endsWith('best',5);//false

  ```

9. `includes`

- Parameter:
  searchString: A string to be searched for within str.
  length - Optional :The position within the string at which to begin searching for searchString - default is 0
- Return: true if the search string is found anywhere within the given string; otherwise, false
- Example:

  ```Js
  let universalFact = "The sun rises in the East";
  universalFact.includes("in")//true

  ```

10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`

```

```

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
- `toLowerCase` accepts the string and convert all character into upper case  

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
- `toUpperCase` accepts the string and convert all character into lower case  

4. `trim`

- Parameter:
  searchString: The characters to be searched for at the end of str.(string data type)
  length : it is used as the length of str. Defaults to str.length - Optional
- Return: new string representing the str stripped of whitespace from both end.
- Example:
  ```Js
  let msg = "  hello  "
  msg.trim();//"hello"
  let greeting = "good morning   ";
  greeting.trim();//"good morning"
  let str = '  A';
  str.trim;//"A"
  ```
- `trim` accept the string and will return the new string after removing white space from both end

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
- `trimEnd` accept the string and will return the new string after removing white space from  end
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
- `trimStart` accept the string and will return the new string after removing white space from  begining
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
- `concat` accepts multiple string and return conacated string as result  
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
- `endsWith` take a searchstring as parameter and search in the string and result true if it is matched otherwise return false  

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
- `uncludes` take a searchstring as parameter and search in the string and result true if it is matched otherwise return false  

10. `indexOf`

- Parameter:
  searchValue: string will be searched in str and it will return the position. If it is not found will return -1. - default value is -1
  fromIndex Optional :An integer representing the index at which to start the search. Defaults to 0
- Return: The index of the first occurrence of searchValue, or -1 if not found
- Example:

  ```Js
  const searchTerm = 'dog';
  console.log(searchTerm.indexOf("G"));//-1
  console.log(searchTerm.indexOf("g"));//2
  const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
  console.log(paragraph.indexOf("jumps"));//20

  ```
- `indexOf` search a string and resturn the first position of searched string from main staring. if it is not matched it will return -1

11. `lastIndexOf`
- Parameter:
  searchValue: A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
  fromIndex Optional :The index of the last character in the string to be considered as the beginning of a match
- Return: The index of the last occurrence of searchValue; -1 if not found.
- Example:

  ```Js
  const searchTerm = 'dog';
  console.log(searchTerm.lastIndexOf("G"));//-1
  const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
  console.log(paragraph.lastIndexOf("y"));//81
  console.log(paragraph.lastIndexOf("dog"));//52

  ```
- `indexOf` search a string and resturn the last occurance position of searched string from main staring. if it is not matched it will return -1  
12. `padEnd`
- Parameter:
  targetLength: string will be padded by targetlength in the end. By default it will take " "(empty space)
  padString - Optional :string can be passed and it will be padded instead of empty space
- Return: A String of the specified targetLength with the padString applied at the end of the current str.
- Example:

  ```Js
  const str1 = 'Breaded Mushrooms';
  console.log(str1.padEnd(25, '.'));//"Breaded Mushrooms........"
  const str2 = '200';
  console.log(str2.padEnd(5));//"200  "
  let str = "Hello"
  console.log(str.padEnd(5,"!"));//"Hello!!!!!"

  ```
- `padEnd` accept target length and padstring as parameter. it will pad padstring in the end of string by target length times  
13. `padStart`
- Parameter:
  targetLength: string will be padded by targetlength in the begining. By default it will take " "(empty space)
  padString - Optional :string can be passed and it will be padded instead of empty space
- Return: A String of the specified targetLength with the padString applied at the begining of the current str.
- Example:

  ```Js
  const str1 = 'Breaded Mushrooms';
  console.log(str1.padStart(25, '.'));//"........Breaded Mushrooms"
  const str2 = '200';
  console.log(str2.padStart(5));//"  200"
  let str = "Hello"
  console.log(str.padStart(5,"!"));//"!!!!!Hello"

  ```
- `padStart` accept target length and padstring as parameter. it will pad padstring in the begining of string by target length times    
14. `repeat`
- Parameter: (count) integer between 0 and +Infinity, indicating the number of times to repeat the string - (string data type)
- Return: A new string containing the specified number of copies of the given string.
- Example:

  ```Js
  const chorus = 'Because I\'m happy. ';
  console.log(chorus.repeat(3));"Because I'm happy. Because I'm happy. Because I'm happy. "
  const str2 = 'World';
  console.log(str1.repeat(2)); //'WorldWorld'
  

  ```
- `repeat` accept integer as parameter and return repeated string as result  
15. `replace`
- Parameter: 
         regexp (pattern):A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified function.
         substr : A String that is to be replaced by newSubstr
         newSubstr (replacement): The String that replaces the substring specified by the specified regexp or substr parameter
         function (replacement): A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr.
- Return: A new string, with some or all matches of a pattern replaced by a replacement.
- Example:

  ```Js
  const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
  console.log(p.replace("fox","Lion"));//"The quick brown Lion jumps over the lazy dog. If the dog reacted, was it really lazy?"
  const greet = "good morning"
  console.log(greet.replace("morning","evening"));//"good evening"
  const greet = "good morning"
  console.log(greet.replace("Good","hello"));//"good morning"
  
  console.log(str1.repeat(2)); //'WorldWorld'
  

  ```
- `repeat` accept two string in parameter. It will replace the string with other string as return as output
16. `slice`
- Parameter: 
         beginIndex : The zero-based index at which to begin extraction - by default take 0
         endIndex Optional : The zero-based index before which to end extraction. The character at this index will not be included.
- Return: A new string containing the extracted section of the string.
- Example:

  ```Js
   const str = 'The quick brown fox jumps over the lazy dog.';
   console.log(str.slice(31));// "the lazy dog."
   console.log(str.slice(-2));//"g"
   console.log(str.slice(-9, -5));//"lazy"
  ```
- `repeat` accept two number as parameter. it will exclude the string from 0th index to number till provided.

17. `split`
- Parameter:
      separator Optional : The pattern describing where each split should occur
      limit Optional : A non-negative integer specifying a limit on the number of substrings to be included in the array
- Return: An Array of strings, split at each point where the separator occurs in the given string.
- Example:

  ```Js
  const chorus = 'Because I\'m happy. ';
  console.log(chorus.repeat(3));"Because I'm happy. Because I'm happy. Because I'm happy. "
  const str2 = 'World';
  console.log(str1.repeat(2)); //'WorldWorld'
  

  ```
- `repeat` accept integer as parameter and return repeated string as result
18. `substring`

- Parameter:
      indexStart : The index of the first character to include in the returned substring.
     indexEnd Optional : The index of the first character to exclude from the returned substring.
- Return: A new string containing the specified part of the given string.
- Example:

  ```Js
  const str = 'Mozilla';
  console.log(str.substring(1));//"ozilla"
  console.log(str.substring(2));//"zilla"
  console.log(str.substring(0,2));//"Mo"
  

  ```
- `repeat` accept integer as parameter and return repeated string as result

```

```

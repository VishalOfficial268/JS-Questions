// console.log("array questions:");
// left question - 18, 21, 22, 
// postpone - 28, 29, 31, 38,   

/* Q1:  What is the output of the following code? */
// const arrayOfOddNumbers = [1, 3, 5];
// arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length); // output : 101



/** Q2: How can you double elements of an array using reduce? Please note that you cannot create additional variables. */
// const arrayOfNumbers = [1, 2, 3, 4];
// const newArray = arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);
// console.log(newArray)



/** Q3: What is the output of the following code snippet? */

// let arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
// const anotherArrayOfLetters = arrayOfLetters;
// arrayOfLetters = [];
// console.log(anotherArrayOfLetters);



/** Q4: How could you print unique values from an array? */
// const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
// const set = new Set(arrOfNum);
// console.log(set);

/** Q5: Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names. For example: cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "])
should give
["avengers", "captain_america", "ironman", "black panther"] */

// function cleanNames(arr) {
//     arr.map((el) => el.trim())
// }


/** Q6: Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable. */

// function convertMileToKilometer(arr) {
//     let kilometers = arr.map((mile) => mile * 1.60);
//     let totalDistanceInKilometers = 0;
//     for (let km of kilometers) {
//         totalDistanceInKilometers += km;
//     }
//     return totalDistanceInKilometers;
// }


/** Q7: Q3 Square and sum the array elements using the arrow function and then find the average of the array. */
// let nums = [25, 45, 55, 77, 88, 99];
// let avrageOfArray = (arr) => {
//     let sqrt = arr.map((sq) => Math.pow(sq, 2));
//     let sumOfSq = arr.reduce((acc, curr, index, array) => acc + curr)
//     return sumOfSq / sqrt.length;
// }
// console.log(avrageOfArray(nums));

/** Q8: Create a new array using the map function whose each element is equal to the original element plus 4. */

// function elementWith4pluse(arr) {
//     let fourPlusElement = arr.map((el) => el + 4);
//     return fourPlusElement;
// }
// console.log(elementWith4pluse([1, 2, 3]));


/** Q9: From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods. */

// function res(arr) {
//     return arr.filter((num) => num % 2 === 0).map((ev) => ev * ev).reduce((acc, curr, index, array) => acc + curr)
// }

/** Q10: Create a new array whose elements is in uppercase of words present in the original array.*/

// let strings = ["avengers", "captain america", "ironman", "black panther"]; //given
// function upperCase(arr) {
//     return arr.map((el) => el.toUpperCase())
// }
// console.log(upperCase(strings));

/** Q11: Use the .map() method on the heros array to return a new array.
 * The new array should rename the 'name' key to 'hero'.
 * The 'name' key should not appear in the new array.
 * The new array should have a new key added called (id).
 * The key 'id' should be based on the index.
 */

/** const heros = [
  { name: 'Spider-Man' },
  { name: 'Thor' },
  { name: 'Black Panther' },
  { name: 'Captain Marvel' },
  { name: 'Silver Surfer' }
];
EXPECTED OUTPUT (array of objects):
[
  { id: 0, hero: 'Spider-Man' },
  { id: 1, hero: 'Thor' },
  { id: 2, hero: 'Black Panther' },
  { id: 3, hero: 'Captain Marvel' },
  { id: 4, hero: 'Silver Surfer' }
] */

// const heros = [
//     { name: 'Spider-Man' },
//     { name: 'Thor' },
//     { name: 'Black Panther' },
//     { name: 'Captain Marvel' },
//     { name: 'Silver Surfer' }
// ];

// m-1:
// function herosM1(arr) {
//     let counter = -1;
//     let heroArray = [];

//     for (let ob of arr) {
//         ++counter;
//         let obj = {};
//         obj.id = counter;
//         obj.hero = ob.name;
//         heroArray.push(obj);
//     }
//     return heroArray;
// }

// console.log(herosM1(heros));

// m2: 
// function herosM2(arr) {
//     return arr.map((hero, index) => { return { id: index, hero: hero.name } })
// }

// console.log(herosM2(heros));




/** Q12: Write JavaScript statements that will produce the following output: */
// need output : const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// console.log(inputWords.slice(-3))


/** Q13: Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. Use console.log to display the results */
/**
 * An array of odd numbers.
 * An array of numbers divisible by 2 or 5.
 * An array of numbers divisible by 3 and then squared those numbers.
 * The sum of the following: square the numbers divisible by 5.
 */

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // given:
// let r1 = numbers.filter((num) => num % 2 === 1);

// let r2 = numbers.filter((num) => {
//     if (num % 2 === 0 || num % 5 === 0) {
//         return num;
//     }
// });
// let r3 = numbers.filter((num) => {
//     if (num % 3 === 0) {
//         return (num);
//     }
// });
// let r4 = r3.map((num) => num * num)
// console.log(r4.reduce((acc, curr) => acc + curr, 0) / 5)


// console.log(r3);
// console.log(r4);



/** Q14: Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2. */

// function Myfunc(arr) {
//     return arr.map((num) => num * 2);
// }
// console.log(Myfunc([1, 2, 3]))

/** Q15:  Write a JavaScript function to check whether an `input` is an array or not */

// function checkArrOrNot(d) {
//     if (d && Array.isArray(d)) return true;
//     else return false;
// }
// console.log(checkArrOrNot([1, 2, 4]));

/** Q16: Write a JavaScript function to clone an array. */

// function cloneArray(arr) {
//     return [...arr];
// }
// console.log([[1, 3, 6], [2, 5, 7]]);

// let arr1 = [1, 3, 6];
// let arr2 = [[12, 22, 33], [77, 88, 99]]
// console.log(arr1.concat(arr2))

/** Q17: Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array */
// function getFirstElement(array, n) {
//     if (array === null) {
//         return void 0;
//     }
//     return array[n]
// }
// console.log(getFirstElement([1, 2, 4], 2))

/** Q18:  Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array */
// function getLastEl(arr, n) {
//     if (arr && n) {
//         return arr[n]
//     } else {
//         return arr[arr.length - 1]
//     }
// }


/** Q19:  Write a simple JavaScript program to join all elements of the following array into a string */

// function joinEl(arr) {
//     console.log(arr.toString());
//     console.log(arr.join());
//     console.log(arr.join("+"));
// }
// joinEl(["Red", "Green", "White", "Blac"])


/** Q20[imp]:  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. */

// function getDash(num) {
//     const str = num.toString();
//     console.log(str)
//     const result = [str[0]];

//     for (let x = 1; x < str.length; x++) {
//         if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
//             result.push('-', str[x]);
//         } else {
//             result.push(str[x]);
//         }
//     }
//     console.log(result.join(''));
// }
// getDash("025468");


/** Q21: Write a JavaScript program to sort the items of an array */
// sorting in assending order:
// const arr1 = [3, 8, 7, 6, 5, -4, -2, -9, 3, 2, 1]; // given:
// function sortingInAssending(arr) {
//     return arr.sort((a, b) => a - b);
// }
// console.log(sortingInAssending(arr1))



/* sorting in Decending Order: */
// const arr2 = [3, 8, 7, 6, 5, -4, -2, -9, 3, 2, 1]; // given:
// function sortingInDecending(arr) {
//     return arr.sort((a, b) => b - a);
// }
// console.log(sortingInDecending(arr2))



/** sorting in assending order */
// let arr = [1, 2, 99, 9, 8, 7, -1, -8, 6, 0, 5, 4, 3];
// function sortInAssendingOrder(arr) {
//     let length = arr.length;
//     for (let j = 0; j < length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             j = -1;
//         }
//     }
//     return arr;
// }
// arr = sortInAssendingOrder(arr);
// console.log(arr);

/** sorting in decending */
// let arr = [1, 2, 99, 9, 8, 7, -1, -8, 6, 0, 5, 4, 3];
// function sortInDecendingOrder(arr) {
//     let length = arr.length;
//     for (let j = 0; j < length - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             j = -1;
//         }
//     }
//     return arr;
// }
// arr = sortInDecendingOrder(arr);
// console.log(arr);


/** sorting in assending order: */
// function sort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let a = arr[i];
//             let b = arr[i + 1];
//             [a, b] = [b, a];
//             i = -1
//         }
//     }
//     return arr;
// }
// console.log(sort(arr), "My sorting");


/** sort in decending order: */
// function sort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//             let a = arr[i];
//             let b = arr[i + 1];
//             [a, b] = [b, a];
//             i = -1
//         }
//     }
//     return arr;
// }
// console.log(sort(arr), "My sorting");

/** Q22: Write a JavaScript program to find the most frequent item of an array. */
//var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; given
// M1;
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let obj = {}
// for (let el of arr1) {

//     if (obj.hasOwnProperty(el)) {
//         obj[el] += 1;
//     } else {
//         obj[el] = 1;
//     }
// }

// let max = 0;
// for (let v in obj) {

//     if (max < obj[v]) {
//         max = obj[v];
//     }
// }

// console.log(max);

/** Q23: Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX' */
// let str = "The Quick Brown Fox";
// let arr = str.split("");
// let output = [];
// for (let chr of arr) {
//     if (chr.toLowerCase() == chr) {
//         output.push(chr.toUpperCase())
//     } else if (chr.toUpperCase() == chr) {
//         output.push(chr.toLowerCase())
//     } else {
//         output.push(chr);
//     }
// }
// console.log(output.join(""));


/** Q24: Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1" */

// var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; //given:

// for (let i = 0; i < arr.length; i++) {
//     let insideArr = arr[i];
//     console.log(`row ${i}`);
//     for (let item of insideArr) {
//         console.log(item);
//     }
// }

/** Q25:  Write a JavaScript program to compute the sum and product of an array of integers */
// let arr = [1, 2, 3, 4, 5]
// let sumOfNumbers = 0;
// let productOfNumbers = 1;
// for (let item of arr) {
//     sumOfNumbers += item;
//     productOfNumbers *= item;
// }
// console.log(sumOfNumbers);
// console.log(productOfNumbers);


/** 26:  Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).  */
// let arr = [1, 2, 2, 3, 4, 6, 6, 5, 4]
// let set = new Set();
// for (let item of arr) {
//     set.add(item);
// }
// console.log(set)

/** Q27: Write a JavaScript program to find the leap years in a given range of years */
// function leapYear(year) {
//     if (((year / 4 === 0) && (year / 100 !== 0)) || (year / 100 === 0 && year / 400 === 0)) {
//         console.log("leap Year")
//     } else {
//         console.log("Not a leap Year")
//     }
// }
// leapYear(1994);

/** Q28:  Write a JavaScript program to shuffle an array. */
// function shuffle(arra1) {
//     var ctr = arra1.length, temp, index;

//     // While there are elements in the array
//     while (ctr > 0) {
//         // Pick a random index
//         index = Math.floor(Math.random() * ctr);
//         // Decrease ctr by 1
//         ctr--;
//         // And swap the last element with it
//         temp = arra1[ctr];
//         arra1[ctr] = arra1[index];
//         arra1[index] = temp;
//     }
//     return arra1;
// }
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));

/** Q29: Write a JavaScript program to find duplicate values in a JavaScript array */
// function findDuplicate(arr) {
//     let obj = {};
//     for (let val of arr) {
//         if (obj.hasOwnProperty(val)) {
//             obj[val] += 1;
//         } else {
//             obj[val] = 1;    
//         }
//     }

//     for (let prop in obj) {
//         if (obj[prop] > 1) {
//             console.log(prop);
//         }
//     }
// }
// var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// findDuplicate(arr)


/** Q30: Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. */
// const arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// let filtered = [];

// for (let n of arr) {
//     if (typeof n === "number") {
//         if ((n.toString() !== "NaN") && n != 0) {
//             filtered.push(n)
//         }
//     }
// }
// console.log(filtered)

/** Q31:  Write a JavaScript function to sort the following array of objects by title value. Go to the editor
Sample object : */

// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ]; //given

// console.log(library.sort((x, y) => {
//     const titleA = x.title.toLocaleLowerCase();
//     const titleB = y.title.toLocaleLowerCase();
//     if (titleA < titleB) {
//         return -1;
//     } else if (titleA > titleB) {
//         return 1;
//     } else {
//         return 0;
//     }
// }));


// const alpha = ['c', 'e', 'g', 'd', 'f', 'a', 'h', 'b']
// console.log(alpha.sort())

// const numbers = [40, 1, 5, 200];
// console.log(numbers.sort((a, b) => a - b))//sort default method:


/** Q32: Imp: Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level */
//M1:
// const arr = [1, [2], [3, [[4]]], [5, 6]];
// let res = arr.flat(Infinity);
// console.log(res)

//M2:
// function flatten(arr) {
//     const newArr = arr.reduce((acc, item) => {
//         if (Array.isArray(item)) {
//             acc = acc.concat(flatten(item));
//         } else {
//             acc.push(item);
//         }
//         return acc;
//     }, []);
//     return newArr;
// }
// const numArr = [1, [2, [3], 4, [5, 6, [7]]]];
// console.log(flatten(numArr)) // [1, 2, 3, 4, 5, 6, 7]



/** Q33: Imp :  Write a JavaScript program to compute the union of two arrays */
// const arr1 = [1, 2, 3];
// const arr2 = [100, 2, 1, 10];
// const set = new Set(arr1.concat(arr2));
// const getArr = Array.from(set)
// console.log(getArr.sort((a, b) => a - b));
// console.log(set);


/** Q34: Imp:  Write a JavaScript function to find the difference of two arrays. Go to the editor
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"] */


// function diffInArr(arr1, arr2) {
//     let __uncommon = [];
//     const f1 = arr1.flat(Infinity);
//     const f2 = arr2.flat(Infinity);
//     const flatenArr = f1.concat(f2);

//     for (let item of flatenArr) {
//         if (f1.includes(item) && f2.includes(item)) {
//             console.log("No Match...")
//         } else {
//             __uncommon.push(item);
//         }
//     }
//     console.log(__uncommon.sort((x, y) => x - y));
// }

// diffInArr([1, 2, 3], [100, 2, 1, 10])


/**Q35: Imp:  Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. */
// const numbers = [10, 20, 10, 40, 50, 60, 70]
// //Output: 2, 3, target should be target=50
// for (let i = 0; i < numbers.length; i++) {
//     let pairs = numbers[i] + numbers[i + 1];
//     if (pairs == 50) {
//         console.log(i);
//         console.log(i + 1)
//     }
// }

/** Q36: Write a JavaScript function to find the longest common starting substring in a set of strings */
// function findLongestStartStr(substr, str) {

// }

/** Q37: Write a JavaScript function to merge two arrays and removes all duplicates elements. */
// const arr1 = [1, 2, 3];  //given
// const arr2 = [2, 30, 1]; //given
// const arr = arr1.concat(arr2);
// let set = new Set();
// for (let item of arr) {
//     set.add(item)
// }
// console.log(set);

/** Write a JavaScript function to find an array contains a specific element.  */
// function findElemenetInArray(arr, el) {
//     return arr.includes(el);
// }
// console.log(findElemenetInArray([2, 5, 9, 6], 5));


/** Q38: Write a JavaScript script to empty an array keeping the original. */
// function emptyArr(arr) {
//     let temp = arr;
//     return temp = [];
// }
// console.log(emptyArr([1, 2, 3]))

/** Q39: Write a JavaScript function to get nth largest element from an unsorted array */
// function nthLargestNumFromArr(arr, nth) {
//     let sortedArr = arr.sort((a, b) => a - b);
//     let reqNum = sortedArr[nth]
//     return reqNum;
// }
// console.log(nthLargestNumFromArr([43, 56, 23, 89, 88, 90, 99, 652], 4))

/** Q40:  Write a JavaScript function to get a random item from an array.  */

// function getRandomItem(arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }
// console.log(getRandomItem([43, 56, 23, 89, 88, 90, 99, 652]))


/** Q41:  Write a JavaScript function to create a specified number of elements with pre-filled numeric value array. */
//Expected Result = (6, 0) => (0,0,0,0,0,0,) (4, 11) => (11, 11, 11, 11)

// function arrayFilled(nthTimes, val) {
//     let filledArray = [];
//     for (let i = 0; i < nthTimes; i++) {
//         filledArray.push(val);
//     }
//     return filledArray;
// }
// console.log(arrayFilled(4, 11));


/** Q42: Write a JavaScript function to filter false, null, 0 and blank values from an array. */
// const arr = [58, '', 'abcd', true, null, false, 0];
// const res = arr.filter((item) => {
//     if (item != null || item != "" || item != 0) {
//         return item;
//     }
// })
// console.log(res);

/** Q43: Write a JavaScript function to move an array element from one position to another. */
// function moveItem(arr, start, pos) {
//     let shiftedEl = arr.shift(start);
//     arr.splice(pos, 0, shiftedEl);
//     return arr;
// }
// const arr = [10, 20, 30, 40, 50];
// console.log(moveItem(arr, 0, 2));


/** Q44: Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position */

// function printRange(a, b) {
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//     }
// }
// printRange(1, 4);


/** Q45: Write a JavaScript function to generate an array between two integers of 1 step length. */

// function generateArrayByRange(start, end) {
//     let rangedArr = [];

//     //if in case the start range is greater and end is lowest:
//     if (start > end) {
//         for (let i = start; i >= end; i--) {
//             rangedArr.push(i);
//         }
//         return rangedArr;
//     } else {
//         //if in case of start is smaller than end:
//         for (let i = start; i <= end; i++) {
//             rangedArr.push(i);
//         }
//         return rangedArr;
//     }
// }

// console.log(generateArrayByRange(-4, 7));
// console.log(generateArrayByRange(7, -3));


/** Q46: Write a JavaScript function to find the unique elements from two arrays. */
// function uniqueElement(arr1, arr2) {
//     let finalArr = arr1.flat(Infinity).concat(arr2.flat(Infinity));
//     let set = new Set();
//     for (let item of finalArr) {
//         set.add(item);
//     }
//     return Array.from(set).sort((a, b) => a - b);
// }
// console.log(uniqueElement([1, 2, 3], [100, 2, 1, 10]));


/** Q47: Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip */

// function unzip(arr) {
//     let finalArr = [];
//     let singleArr = arr.flat(Infinity);
//     let strType = [];
//     let booleanType = [];
//     let numberType = [];
//     for (let item of singleArr) {
//         if (typeof item == "string") {
//             strType.push(item);
//         } else if (typeof item == "number") {
//             numberType.push(item);
//         } else if (typeof item == "boolean") {
//             booleanType.push(item);
//         }
//     }
//     finalArr.push(strType, numberType, booleanType);
//     return finalArr
// }
// console.log(unzip([['a', 1, true], ['b', 2, false]]))


/** Q48: check if the give variable is array or not */
// function checkIfArray(array) {
//     'use strict';
//     if (Object.prototype.toString.call(array) === '[object Array]') {
//         console.log('no, it is not an array', array);
//     } else {
//         console.log('yes it is an array.', array);
//     }
// }

// var array2 = 'testing';
// console.log(Array.isArray(array2));
// var array3 = [1, 2, 3, 4, 5];
// console.log(Array.isArray(array3));


// console.log("string".indexOf("i"))
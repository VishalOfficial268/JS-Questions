const { init } = require("express/lib/application");

console.log("recursion...")

//Print the numbers by the recursion:
// function countDown(num) {
//     if (num > 0) {
//         console.log(num);
//         countDown(num - 1);
//     } else {
//         return;
//     }
// }
// countDown(5);


//Print the table of 2 by recusrion:
// function tableOfTwo(numOfTime) {
//     let tbArr = []
//     if (numOfTime < 1) {
//         return;
//     } else {
//         // console.log(2 * numOfTime);
//         tbArr.push(2 * numOfTime);
//         tableOfTwo(numOfTime - 1)
//     }
//     console.log(tbArr.sort((a, b) => a - b).join(" "));
// }
// tableOfTwo(10);

// find the factorial of passed number:
// function fc(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * fc(n - 1);
//     }
// }

// console.log(fc(1))

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


/** R E C U S R I O N     W 3 R E S O U R C E S   */
/** Q1: Write a JavaScript program to calculate the factorial of a number. Go to the editor
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 */

// function factorial(n) {
//     if (n === 1 || n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(0));

/**Q2: Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers */
// function gcd(a, b) {
//     if (!b) {
//         return a;
//     } else {
//         return gcd(b, a % b);
//     }
// }
// console.log(gcd(2154, 458))


/** Q3: Write a JavaScript program to get the integers in range (x, y).  */
// function printRange(x, y) {
//     if (x === y) {
//         return y;
//     } else {
//         console.log(y);
//         printRange(x, y - 1)
//     }
// }
// console.log(printRange(2, 9));



/** Q4:  Write a JavaScript program to compute the sum of an array of integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]  */

// function sumOfNumbers(arr) {
//     if (arr.length === 1) {
//         return arr[0]
//     } else {
//         return arr.pop() + sumOfNumbers(arr);
//     }
// }
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(sumOfNumbers(arr));

/** Q5: Write a JavaScript program to compute the exponent of a number. The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.  */

// function exponentCalculation(base, ex) {
//     base = parseInt(base);
//     ex = parseInt(ex);
//     if (ex === 0 || ex === 1) {
//         return base;
//     } else {
//         return base * exponentCalculation(base, ex - 1);
//     }

// }
// console.log(exponentCalculation(9, 2));



/** Q6: Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. */

// program to generate fibonacci series up to n terms
//M1:
// const number = 8;
// function fibonacci(n) {
//     let fibArr = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
//     }
//     return fibArr;
// }
// console.log(fibonacci(number))


//M2: 
// const number2 = 8;
// let n1 = 0;
// let n2 = 1;
// let nextTerm = n1 + n2;
// console.log(n1)
// console.log(n2)
// while (nextTerm <= number2) {
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }


//M3: 
// function fibonacci(n) {
//     let arr = [0, 1];
//     if (n <= 1) return 1;
//     arr.push(n - 1, n - 2)
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(8));


/** Q7: Write a JavaScript program to check whether a number is even or not */
// function evenOdd(n) {
//     if (n % 2 === 0) {
//         return "Even Number";
//     } else {
//         return "Odd Number";
//     }
// }

// console.log(evenOdd(66))


/** Q8:  Write a JavaScript program for binary search. */

// function binarySearch(sortedArray, key) {
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (sortedArray[middle] === key) {
//             // found the key
//             return middle;
//         } else if (sortedArray[middle] < key) {
//             // continue searching to the right
//             start = middle + 1;
//         } else {
//             // search searching to the left
//             end = middle - 1;
//         }
//     }
//     // key wasn't found
//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4], 3));


// console.log("function...");

/** Q1:  Write a function to reverse a number */
//M1: 
// function reverseTheNumber(num) {
//     num = num.toString().split("").sort((a, b) => b - a)
//     let reverse = [];
//     for (let r of num) {
//         reverse.push(r);
//     }
//     return parseInt(reverse.join(""));
// }
// console.log(reverseTheNumber(12345));


//M2: 
// function reverseNum(num) {
//     let reverse = 0;
//     while (num != 0) {
//         reverse = reverse * 10;
//         reverse = reverse + num % 10;
//         num = Math.trunc(num / 10);
//     }
//     return reverse;
// }

// console.log(reverseNum(12345))


/** Q3:  Count number of Vowels in String */

// function numberOfVowels(str) {
//     let strArray = str.split("");
//     let VowelsCounter = 0;
//     for (let x of strArray) {
//         let ch = x.toLowerCase();
//         if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') VowelsCounter++;
//     }
//     return VowelsCounter;
// }

// console.log(numberOfVowels("Hello"));
// console.log(numberOfVowels("Umbrella"));


/** Q4: Flatten array of arrays using JavaScript reduce */
//M1: 
// const givenArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function falttenArray1(arr) {
//     return arr.flat(Infinity);
// }
// console.log(falttenArray1(givenArray));


//M2:
// function falttenArray2(jointArray) {
//     return jointArray.reduce((result, array) => result.concat(array));
// }
// console.log(falttenArray2(givenArray));


/** Q5:  Write a function to check if an input string is a palindrome */

// function checkPallindrome(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) != str.charAt(str.length - 1)) return false;
//         return true;
//     }
// }
// console.log(checkPallindrome("banana"));
// console.log(checkPallindrome("racecar"));
// console.log(checkPallindrome("madam"));



/** Q6: Write a function to check if a number is Prime */

// function checkPrime(num, div = 2) {
//     if (num === div) {
//         return false;
//     } else if (div * div > num) {
//         return true;
//     } else if (num % div === 0) {
//         return false;
//     } else {
//         return checkPrime(num, div + 1);
//     }
// }
// console.log(checkPrime(27))
// console.log(checkPrime(29))

/** Q7: Guess the output */
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function () {
//         return this._name;
//     }
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity());  //output: undefined, becuase this will execute in the global object where as it is not available
// console.log(hero.getSecretIdentity()); //output: John Doe


/** Q8: Guess the output */
// function greet() {
//     console.log(this.name);
// }
// const sayHello1 = greet.bind({ name: "Tom Cruise" });
// sayHello1();
// const sayHello2 = sayHello1.bind({ name: "Zac Efron" });
// sayHello2();

// Explaination : Binding an already bound function does not change the execution context.


/** Q9: What will be logged to the console? */

// function Employee(name) {
//     this.name = name;
// }
// Employee.prototype.getName = () => {
//     return this.name;
// };
// const jason = new Employee('Jason');
// console.log(jason.getName());

//Explanation: The reason is that the snippet above is using an arrow function for getName. Arrow functions cannot create a context and therefore this will be the global object in non-strict mode.


/**Q10:  write a function to a get all the values by calculated */
// function addAllNumbers([...args]) {
//     return args.reduce((acc, curr) => acc + curr)
// }
// console.log(addAllNumbers([1, 2, 3, 4, 5]))


/** Q11: write a function which get all the value of range */
// function printRange(start, end) {
//     while (start <= end) {
//         console.log(start);
//         start++;
//     }
// }
// console.log(printRange(2, 10));

/** Q11: Write a  function which get the random numbers within range */
// function randomNumberInRange(min, max) {
//     let num = Math.floor(Math.random() * (max - min + 1)) + 1;
//     return num;
// }
// console.log(randomNumberInRange(1, 10))
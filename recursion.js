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


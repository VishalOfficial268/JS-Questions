// console.log("object_____");
/** Q1: Write a JavaScript program to list the properties of a JavaScript object */
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// }; // given:

//M1:
// for (let item in student) {
//     console.log(item);
// }

//M2:
// console.log(Object.getOwnPropertyNames(student))

/** Q2: . Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. */

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };//given

// delete student.rollno;
// console.log(student)


/**Q3: Write a JavaScript program to get the length of a JavaScript object. */
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };//given:

//M1:
// let ObjArr = Object.getOwnPropertyNames(student);
// console.log(ObjArr.length);

//M2: 
// let keyCount = 0;
// for (let key in student) {
//     keyCount++;
// }
// console.log(keyCount);


/** Q4:Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. */
// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// for (let item of library) {
//     if (item.readingStatus) {
//         console.log(`Author Name : ${item.author}`);
//         console.log(`Book Name : ${item.title}`);
//     }
// }


/** Q5: Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes */
//M1: 
// function valumeOfCylender(r, h) {
//     r = r / 2
//     let res = Math.PI * (r * r * h);
//     return res.toFixed(4);
// }
// console.log(valumeOfCylender(4, 7));

//M2:
// class GetVolumeOfCylender {
//     constructor(height, diameter) {
//         this.cyl_height = height;
//         this.radius = diameter / 2;
//     }
//     // defined the method of Volueme:
//     getVolume() {
//         let resultant = Math.PI * (this.cyl_height * this.radius * this.radius);
//         return resultant.toFixed(4);
//     }
// }

// let Cylender = new GetVolumeOfCylender(7, 4);
// console.log(Cylender.getVolume());



/** Q6: Write a JavaScript program which returns a subset of a string. */
// function subset(str) {
//     let subset = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++) {
//             subset.push(str.slice(i, j))
//         }
//     }
//     console.log(subset)
// }
// subset("dog");


/** Q7: Write a JavaScript program to create a Clock. */
// function printTime() {
//     setInterval(() => {
//         let d = new Date()
//         let h = d.getHours();
//         let m = d.getMinutes();
//         let s = d.getSeconds();
//         let clock = h + " : " + m + " : " + s
//         console.log(clock)
//     }, 1000)
// }
// printTime();

/**Q9: Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user. */

// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//     }

//     areaOfCircle() {
//         let PI = Math.PI;
//         let area = PI * this.radius * this.radius;
//         return area.toFixed(2);
//     }


//     perimeterOfCircle() {
//         let PI = Math.PI;
//         let perimeter = 2 * PI * this.radius;
//         return perimeter.toFixed(2);
//     }
// }


// let circle = new Circle(3);
// console.log("Area Of the Circle : " + circle.areaOfCircle());
// console.log("Perimeter Of the Circle : " + circle.perimeterOfCircle());



/** Q10: Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
Sample Object : */
// const library = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }
// ]; //given:

// const res = library.sort((x, y) => {
//     if (x > y) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(res);

/** Q11: Write a JavaScript function to print all the methods in an JavaScript object. */

// const target = Array;
// const target2 = Array.prototype;
// const listOfMethods = Object.getOwnPropertyNames(target).filter((x) => {
//     return typeof target[x] === 'function';
// });
// console.log(listOfMethods);

// const listOfProto = Object.getOwnPropertyNames(target2).filter((x) => {
//     return typeof target2[x] === 'function';
// })
// console.log(listOfProto);


/** Q12:  Write a JavaScript function to parse an URL */
// function parseUrl() {
//     const url = "https://geeksforgeeks.org:3000/pathname/?search=12333";
//     const parser = new URL(url);
//     console.log(parser.searchParams)
// }
// parseUrl();


/** Q14: Write a JavaScript function to retrieve all the values of an object's properties */
//passing object - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}

// function printValuesOfObject(Obj) {
//     for (let key in Obj) {
//         console.log(Obj[key])
//     }
// }
// printValuesOfObject({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })

/** Q15: Write a JavaScript function to convert an object into a list of `[key, value]` pairs. */
// const obj = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
// console.log(Object.entries(obj));

/** Q16:  Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys */
// const obj = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
// let reverseObj = {};
// for (let key in obj) {
//     let val = obj[key];
//     reverseObj[val] = key;
// }
// console.log(reverseObj);


/** Q17: Write a JavaScript function to check whether an object contains given property. */
// const obj = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
// function checkProperty(obj, prop) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(prop)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// console.log(checkProperty(obj, "green"));

/**     S W A L O W     VS     D E E P   C O P P Y */

/** Swallow copy an Object vs Deep copy and Object */
/* "use strict"; */
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };
//M1: using spread syntax:
// let copiedPerson = { ...person }; //coppy the object or clone the object(swallow coppy)
// copiedPerson.address.city = "Billoo City";
// console.log(person) //connected with associative values:

//M2: using assign method:
// let copiedPerson = Object.assign({}, person); //swallow coppy
// copiedPerson.address.city = 'Faltu City'
// console.log(copiedPerson);


//M3: using JSON methods:
// let copiedPerson = JSON.parse(JSON.stringify(person));  //deep coppy
// copiedPerson.address.city = "REplce city";
// console.log(copiedPerson); // not connected with any properties
// console.log(person);


// C O D E B U R S T
/** Q1: What is the output of the following code?
var dwayne = {}, daniel = { firstName: 'Daniel'}, jason = {key: 'jason'};

dwayne[daniel]=123;
dwayne[jason]=456;

console.log(dwayne[daniel]); // output 456
 */


/**  Q2: What will be the output of the following code?*/
// const func = (function (a) {
//     delete a;
//     return a;
// })(5);

// console.log(func); //output: 5 (without strict mode and in stric mode it will give an error)


/** Q3: What is the output of the following code snippet? */
// console.log({ a: 1 } == { a: 1 }); //output: false (because of diffrent diffrent refrencess)
// console.log({ a: 1 } === { a: 1 }); //output: false (because of diffrent diffrent refrencess)


/** Q4: what will be the output */
// function solve(arr, rotations) {
//     if (rotations == 0) return arr;
//     for (let i = 0; i < rotations; i++) {
//         let element = arr.pop();
//         arr.unshift(element);
//     }
//     return arr;
// }
// console.log(solve([44, 1, 22, 111], 5))





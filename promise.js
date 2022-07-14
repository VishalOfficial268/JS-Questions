// console.log("promise...");
/**  Q1: What is the output of the following code? */
// const promise = new Promise((resolve, reject) => {
//     reject(Error('Some error occurred'));
// })
// promise.catch(error => console.log(error.message));
// promise.catch(error => console.log(error.message));

// Explaination - both time the error will print by the error message:

// const promise = new Promise((resolve, reject) => {
//     reject(Error('Testing the error with then'));
// })
// promise.catch(error => console.log(error.message))
//     .then(x => console.log(x))
//     .finally(console.log("Testing the finally block"));


/** Q2: How can I write a sleep function using a promise? */
// function sleep(ms) {
//     return new Promise((res) => {
//         setTimeout(res, ms);
//     })
// }
// console.log(sleep(200));


/** Q3: What is the output of the following code? */
// const promise = new Promise((resolve, reject) => {
//     reject(Error('Some Error Occurred'));
// })
//     .catch(error => console.log(error)) // erro message will print
//     .then(error => console.log(error)); //undefined in Browser


/** Q3: What is the output of the following code? */
// const promise = new Promise(res => res(2));
// promise.then(v => {
//     console.log(v); //2
//     return v * 2; //4
// })
//     .then(v => {
//         console.log(v); //4
//         return v * 2; //8
//     })
//     .finally(v => {
//         console.log(v); //undefined
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v); //8
//     });


//Testing:
// const testPromise = new Promise((resolve) => resolve(3));
// testPromise.then(v1 => {
//     console.log(v1);
//     return v1 * 2;
// }).then(v2 => {
//     console.log(v2);
//     return v2 * 2;
// }).then(v3 => {
//     console.log(v3);
//     return v3 * 2;
// }).finally(v4 => {
//     console.log(v4);
//     console.log("End of the handler chanining...")
// }).catch(error => console.log(error));

//Explanation: The finally block doesn’t receive any value, and anything returned from finally is not considered in the then block so the output from the last then is used.


/** Q4: What will be the output? */
// function job(state) {
//     return new Promise((resolve, reject) => {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     })
// }

// let promise = job(true);
// promise.then((d) => {
//     console.log(d);
//     return job(true);
// }).then((data) => {
//     console.log(data, "checking this");
//     return job(true)
// }).then((newdata) => {
//     console.log(newdata, "checking new data");
//     return job(false)
// }).catch((error) => {
//     console.log(error);
// }).finally((nodata) => {
//     console.log(nodata, "from finally block");
// })


/** Q5: What will be the output? */


// function job() {
//     return new Promise(function (resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

//     .then(function () {
//         console.log('Success 1');
//     })

//     .then(function () {
//         console.log('Success 2');
//     })

//     .then(function () {
//         console.log('Success 3');
//     })

//     .catch(function () {
//         console.log('Error 1');
//     })

//     .then(function () {
//         console.log('Success 4');
//     });



/** Q6: What will be the output? */

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

//     .then(function (data) {
//         console.log(data); //success
//         return job(false);
//     })

//     .catch(function (error) {
//         console.log(error); //error
//         return 'Error caught'; // error caught
//     })

//     .then(function (data) {
//         console.log(data);
//         return job(true);
//     })

//     .catch(function (error) {
//         console.log(error);
//     });


/** Q7: What will be the output? */

function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

    .then(function (data) {
        console.log(data); //success
        return job(true);
    })

    .then(function (data) {
        if (data !== 'victory') {
            throw 'Defeat';  //Defeate
        }
        return job(true);
    })

    .then(function (data) {
        console.log(data); //success
    })

    .catch(function (error) {
        console.log(error);

        return job(false);
    })

    .then(function (data) {
        console.log(data); //success

        return job(true);
    })

    .catch(function (error) {
        console.log(error);

        return 'Error caught';
    })

    .then(function (data) {
        console.log(data); //success

        return new Error('test');
    })

    .then(function (data) {
        console.log('Success:', data.message); //success
    })

    .catch(function (data) {
        console.log('Error:', data.message);
    });
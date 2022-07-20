//Q:1 Insert the element on the given position and the exiting element should not be replaced:
// const arr = [1, 2, 3, 5, 6, 7, 8, 9];
// const position = 3; // given
// const element = 4;  //given
//M1:
// arr.splice(position, 0, element);
// console.log(arr);

//M2:
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i >= position) {
//         arr[i + 1] = arr[i];
//         if (i == position) {
//             arr[i] = element;
//         }
//     }
// }
// console.log(arr);


//Q2: delete and array element from the specific position:
// program to insert an item at a specific index into an array
function insertElement() {
    let array = [1, 2, 4, 5];
    let index = 2;
    let element = 3;

    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1];
    }
    array[index] = element;
    console.log(array);
}

insertElement();





// console.log("call-apply-bind...");
let user1 = {
    firstname: "Vishal",
    lastname: "Gupta",
    role: "Software Engineer"
}

let user2 = {
    firstname: "Deepshikha",
    lastname: "Gupta"
}

let friends = ['a', 'b', 'c'];

let getFullName = function (...args) {
    fullname = this.firstname + " " + this.lastname;
    if (args) {
        return fullname + " " + args;
    }
    return fullname;
}

//use: call, apply, bind
// let data1 = getFullName.call(user1, friends);
// let data2 = getFullName.apply(user2, friends);
// let data3 = getFullName.bind(user1)
// console.log(data3()) //bind called:



/** _____________________________________________________________________________________________________ */
let carObj = {
    name: "MBW",
    seriesname: "X1",
    automatic: true,
    price: 2400000,
}



function Item(name, price) {
    this.name = name;
    this.price = price;
    this.description = `${this.name}, ${this.price}€`;
}

function Car(name, price) {
    Item.call(this, name, price);
    // You can add other car specific fields here
}

function Fruit(name, price) {
    Item.call(this, name, price);
    // You can add other fruit specific fields here
}

const bmw = new Car("BMW", 120000);
const banana = new Fruit("Banana", 1);

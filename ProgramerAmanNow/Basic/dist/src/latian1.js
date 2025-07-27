"use strict";
function greeting(name, age) {
    return `hello ${name}, my age is ${age}`;
}
;
console.info(greeting("haikal", 20));
;
const products = [
    { id: 1, name: "keybord", price: 10000 },
    { id: 2, name: "moouse", price: 1340000 },
    { id: 3, name: "monitor", price: 1432300 }
];
products.forEach((product) => {
    console.log(product.name);
});

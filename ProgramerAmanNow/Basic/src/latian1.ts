function greeting(name: string, age: number): string{
    return `hello ${name}, my age is ${age}`
};

console.info(greeting("haikal",20));


interface Product {
    id : number,
    name : string,
    price : number,
    category? : string
};

const products: Product[]= [
    {id: 1, name: "keybord", price: 10000},
    {id: 2, name: "moouse", price: 1340000},
    {id: 3, name: "monitor", price: 1432300}
];

products.forEach((product) => {
    console.log(product.name);
})
// js
// let m1 = "hello world";
// var m2 = "hello world";
// const m3 = "hello world";

// ts
let messsage: string = 'Hello World';
type User = { name: string, age: number };
let data: User = {
    name: 'John',
    age: 30,
};
const greet2 = (user: User) => {
    return 'Hello World';
}

console.log(greet2(data));


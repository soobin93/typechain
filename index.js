"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Soobin Son",
    age: 27,
    gender: "male"
};
const sayHi = ({ name, age, gender }) => {
    console.log(`Hello ${name}, you are ${age} years old, and you are a ${gender}`);
};
sayHi(person);
//# sourceMappingURL=index.js.map
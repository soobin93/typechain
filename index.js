"use strict";
// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const soobin = new Human('Soobin', 27, 'male');
const sayHi = ({ name, age, gender }) => {
    console.log(`Hello ${name}, you are ${age} years old, and you are a ${gender}`);
};
sayHi(soobin);
//# sourceMappingURL=index.js.map
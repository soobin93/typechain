// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const soobin = new Human('Soobin', 27, 'male');

const sayHi = ({ name, age, gender }: Human) => {
    console.log(`Hello ${name}, you are ${age} years old, and you are a ${gender}`);
};

sayHi(soobin);

export {};

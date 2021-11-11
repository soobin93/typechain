interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "Soobin Son",
    age: 27,
    gender: "male"
};

const sayHi = ({ name, age, gender }: Human) => {
    console.log(`Hello ${name}, you are ${age} years old, and you are a ${gender}`);
};

sayHi(person);

export {};

"use strict";

class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    *[Symbol.iterator]() {
        for (const property of Object.keys(this)) {
          yield `${property} is ${this[property]}`;
        }
      }
}

const person = new Person("John Doe", 30, "male");

for (const property of person) {
    console.log(property);
}

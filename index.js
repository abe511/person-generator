const faker = require('faker');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.interval = setInterval(() => {++this.age}, 1000);
  }
}

const person1 = new Person("Jennie Jameson", 23);
const person2 = new Person("Jessica Jefferson", 18);
const person3 = new Person("Jane Johnson", 26);
const person4 = new Person("Joanne Jackson", 32);

let group = [person1, person2, person3, person4];
let counter = 1;

// array of Person objects filtered and printed out each second
const ageFilter = () => {
  const filterInterval = setInterval(() => {
    console.log(`----------- gen ${counter++} -----------`);
    const ageFiltered = group.filter((el) => {
        if(el.age >= 40) clearInterval(el.interval);
        return el.age < 40;
    });
    group = ageFiltered;
    group.forEach(el => console.log(el.name, el.age));
    if(!group.length) clearInterval(filterInterval);
  }, 1000);
}

// new instance of Person object added to the array every 2 seconds
const personGenerator = () => {
  const generatorInterval = setInterval(() => {
    const newPerson = new Person(faker.name.findName(), Math.ceil(Math.random() * 51));
    group.push(newPerson);
  }, 2000);
}

ageFilter();
personGenerator();
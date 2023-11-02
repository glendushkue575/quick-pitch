/* 
Filename: complex_code.js
Content: Complex Code Example
*/

// Class definition for a Person
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.occupation}.`);
  }

  birthday() {
    this.age++;
    console.log(`Happy birthday ${this.name}! You are now ${this.age} years old.`);
  }
}

// Class definition for an Animal
class Animal {
  constructor(type, habitat, sound) {
    this.type = type;
    this.habitat = habitat;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.type} goes "${this.sound} ${this.sound}"!`);
  }

  changeHabitat(newHabitat) {
    this.habitat = newHabitat;
    console.log(`The ${this.type} now lives in ${this.habitat}.`);
  }
}

// Create instances of Person and Animal
const john = new Person("John", 30, "Software Engineer");
const cat = new Animal("Cat", "House", "Meow");

// Demonstrate the functionality of the classes
john.greet();
cat.makeSound();
john.birthday();
cat.changeHabitat("Garden");

// Other code...

// More complex logic...

// Function to calculate the Fibonacci sequence up to a given number
function fibonacci(n) {
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

console.log(fibonacci(10));

// More code...

// Another complex function...
function calculatePrimeNumbers(limit) {
  let primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(calculatePrimeNumbers(100));

// More code...

// Final complex code...

// Class implementation for a ComplexDataStructure
class ComplexDataStructure {
  constructor() {
    this.data = [];
  }

  insert(element) {
    this.data.push(element);
    console.log(`Element ${element} inserted successfully.`);
  }

  remove(element) {
    const index = this.data.indexOf(element);
    if (index > -1) {
      this.data.splice(index, 1);
      console.log(`Element ${element} removed successfully.`);
    } else {
      console.log(`Element ${element} not found.`);
    }
  }

  print() {
    console.log(this.data);
  }
}

// Usage of the ComplexDataStructure class
const complexStructure = new ComplexDataStructure();
complexStructure.insert(5);
complexStructure.insert(10);
complexStructure.insert(3);
complexStructure.print();
complexStructure.remove(10);
complexStructure.print();

// Rest of the code...

// More complex and elaborate functionality...

// End of the complex code example
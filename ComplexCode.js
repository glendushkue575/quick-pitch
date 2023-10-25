/* Filename: ComplexCode.js
   Content: A complex code demonstrating various JavaScript concepts and techniques. */

// Class representing a car
class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.currentSpeed = 0;
    this.isEngineOn = false;
  }
  
  turnEngineOn() {
    this.isEngineOn = true;
    console.log(`The engine of ${this.brand} ${this.model} is now on.`);
  }
  
  turnEngineOff() {
    this.isEngineOn = false;
    console.log(`The engine of ${this.brand} ${this.model} is now off.`);
  }
  
  accelerate(speed) {
    if (this.isEngineOn) {
      this.currentSpeed += speed;
      console.log(`${this.brand} ${this.model} is now moving at ${this.currentSpeed} km/h.`);
    } else {
      console.log(`Cannot accelerate. Start the engine of ${this.brand} ${this.model} first.`);
    }
  }
  
  brake() {
    if (this.currentSpeed > 0) {
      this.currentSpeed -= 10;
    }
    console.log(`${this.brand} ${this.model} is now slowing down. Current speed: ${this.currentSpeed} km/h.`);
  }
  
  static compareCars(car1, car2) {
    if (car1.year < car2.year) {
      return `${car1.brand} ${car1.model} is older than ${car2.brand} ${car2.model}.`;
    } else if (car1.year > car2.year) {
      return `${car1.brand} ${car1.model} is newer than ${car2.brand} ${car2.model}.`;
    } else {
      return `${car1.brand} ${car1.model} and ${car2.brand} ${car2.model} are of the same year.`;
    }
  }
}

// Creating car objects
const car1 = new Car('Toyota', 'Corolla', 2018, 'Silver');
const car2 = new Car('Honda', 'Civic', 2020, 'Red');

// Turning on car engines
car1.turnEngineOn();
car2.turnEngineOn();

// Accelerating cars
car1.accelerate(50);
car2.accelerate(70);

// Comparing cars
console.log(Car.compareCars(car1, car2));

// Function to generate Fibonacci series
function generateFibonacciSeries(n) {
  const series = [0, 1];
  
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  
  return series;
}

console.log(generateFibonacciSeries(10));

// Function to check if a number is prime
function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

console.log(isPrimeNumber(37));

// Recursive function to calculate factorial
function calculateFactorial(number) {
  if (number <= 1) {
    return 1;
  }
  
  return number * calculateFactorial(number - 1);
}

console.log(calculateFactorial(5));

// Async function to fetch data from an API
async function fetchDataFromAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  
  return data;
}

fetchDataFromAPI('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// ... continue with more code, complex algorithms, etc.

// Note: This is just a sample code to demonstrate complexity and is not fully exhaustive.
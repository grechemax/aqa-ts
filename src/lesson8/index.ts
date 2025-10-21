import { Engine, Car } from './abstraction';

const petrolEngine = new Engine(150, 'petrol');
const dieselEngine = new Engine(90, 'diesel');

const japaneseCar = new Car('Toyota', petrolEngine, 4);
const germanCar = new Car('VW', dieselEngine, 5);


console.log(japaneseCar.drive());
console.log(germanCar.drive());

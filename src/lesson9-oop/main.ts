import { Drivable } from './interfaces/i-drivable';
import { Tesla } from './electric-car/tesla';
import { Bmw } from './combustion-car/bmw';

export function driveVehicle(vehicle: Drivable, amount: number): void {
    vehicle.start();
    vehicle.accelerate(amount);
}

const bmw = new Bmw('coupe', 'M4', 0);
const tesla = new Tesla('SUV', 'Model X', 0);

console.log('---------BMW--------');
bmw.refuel(50);
bmw.checkOilLevel();
driveVehicle(bmw, 160);

console.log('--------Tesla-------');
tesla.charge(80);
tesla.getRange();
driveVehicle(tesla, 50);



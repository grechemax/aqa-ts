import { Drivable } from './i-drivable';
import { Tesla } from './electric-car/tesla';
import { Bmw } from './combustion-car/bmw';

function driveVehicle(vehicle: Drivable, amount: number): void {
    vehicle.start();
    vehicle.accelerate(amount);
}

const teslaModelX = new Tesla('sedan', 'Model X', 0);
const bmw3 = new Bmw('SUV', 'X5', 0);

console.log('--------Tesla-------');
teslaModelX.charge(80);
teslaModelX.getRange();
driveVehicle(teslaModelX, 50);

console.log('---------BMW--------');
bmw3.refuel(50);
driveVehicle(bmw3, 160);

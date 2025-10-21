import { Vehicle } from '../vehicle';

export abstract class CombustionCar extends Vehicle {
    protected fuelLevel = 0;
    public constructor(type: string, speed: number) {
        super(type, speed, 'gas');
    }

    public refuel(fuelLevel: number): void {
        if (fuelLevel < 0 || fuelLevel > 100) {
            throw new Error('Fuel level must be between 0 and 100');
        }
        this.fuelLevel = fuelLevel;
    }
}

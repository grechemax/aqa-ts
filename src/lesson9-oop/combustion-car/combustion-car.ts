import { IFuelable } from '../interfaces/i-fuelable';
import { Vehicle } from '../vehicle';

export abstract class CombustionCar extends Vehicle implements IFuelable {
    protected fuelLevel = 0;
    public constructor(type: string, speed: number) {
        super(type, speed, 'gas');
    }

    // Forces subclasses to implement
    public refuel(fuelLevel: number): void {
        this.fuelLevel = fuelLevel;
    }

    // Forces subclasses to implement
    public abstract checkOilLevel(): void;
}

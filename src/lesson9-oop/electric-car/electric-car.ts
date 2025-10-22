import { IChargeable } from '../interfaces/i-chargeable';
import { Vehicle } from '../vehicle';

export abstract class ElectricCar extends Vehicle implements IChargeable {
    protected batteryLevel = 0;
    public constructor(type: string, speed: number) {
        super(type, speed, 'electric');
    }

    public charge(batteryLevel: number): void {
        this.batteryLevel = batteryLevel;
    }

    // Forces subclasses to implement
    public abstract getRange(): number;
}

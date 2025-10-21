import { Vehicle } from '../vehicle';

export abstract class ElectricCar extends Vehicle {
    protected batteryLevel = 0;
    public constructor(type: string, speed: number) {
        super(type, speed, 'electric');
    }

    public start(): void {
        console.log(`${this.type} starts silently ⚡`);
    }

    public charge(batteryLevel: number): void {
        this.batteryLevel = batteryLevel;
    }

    public abstract getRange(): number; // Forces subclasses to implement
}

import { Drivable } from './i-drivable';

export abstract class Vehicle implements Drivable {
    public readonly type: string; // visible to all, cannot change after creation
    protected speed: number; // subclasses can modify
    private fuelType: string; // hidden — use getter if needed

    protected constructor(type: string, speed: number, fuelType: string) {
        this.type = type;
        this.speed = speed;
        this.fuelType = fuelType;
    }

    public setFuelType(fuelType: string): void {
        const allowedTypes = ['gas', 'electric'];
        if (!allowedTypes.includes(fuelType)) {
            throw new Error('Invalid fuel type');
        }
        this.fuelType = fuelType;
    }

    public getFuelType(): string {
        return this.fuelType;
    }

    // concrete method shared by all subclasses
    public accelerate(amount: number): void {
        if (amount < 0) {
            throw new Error('Acceleration amount cannot be negative');
        }
        this.speed += amount;
    }

    public start(): void{
        console.log(this.type + ' car started');
    }
}

import { Drivable } from './interfaces/i-drivable';

/** Abstract base class for all vehicles */
export abstract class Vehicle implements Drivable {
    public readonly type: string;
    protected speed: number;
    protected readonly fuelType: string;

    protected constructor(type: string, speed: number, fuelType: string) {
        this.type = type;
        this.speed = speed;
        const allowedTypes = ['gas', 'electric'];
        if (!allowedTypes.includes(fuelType)) {
            throw new Error('Invalid fuel type');
        }
        this.fuelType = fuelType;
    }

    public getFuelType(): string {
        return this.fuelType;
    }

    public accelerate(amount: number): void {
        if (amount < 0) {
            throw new Error('Acceleration amount cannot be negative');
        }
        this.speed += amount;
    }

    public abstract start(): void; // Force subclasses to define start behavior
}

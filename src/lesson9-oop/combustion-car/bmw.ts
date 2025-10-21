import { CombustionCar } from './combustion-car';

export class Bmw extends CombustionCar {
    public model: string;
    public constructor(type: string, model: string, speed: number) {
        super(type, speed);
        this.model = model;
    }

    public start(): void {
        console.log(`BMW ${this.model} car started with a roar \n`);
    }

    public override accelerate(amount: number): void {
        super.accelerate(amount);
        console.log(`BMW ${this.model} accelerates to ${this.speed} km/h \n`);
    }

    public override refuel(fuelLevel: number): void {
        super.refuel(fuelLevel);
        console.log(`BMW ${this.model} refueled to ${this.fuelLevel} liters \n`);
    }
}

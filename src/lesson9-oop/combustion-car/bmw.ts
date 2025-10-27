import { CombustionCar } from './combustion-car';

export class Bmw extends CombustionCar {
    public model: string;
    public constructor(type: string, model: string, speed: number) {
        super(type, speed);
        this.model = model;
    }

    public override start(): void {
        console.log(`BMW ${this.model} car started with a roar \n`);
    }

    public override accelerate(amount: number): number {
        super.accelerate(amount);
        console.log(`BMW ${this.model} accelerates to ${this.speed} km/h \n`);
        return this.speed;
    }

    public override refuel(fuelLevel: number): void {
        console.log(`BMW ${this.model}/${this.type} refueled to ${fuelLevel} liters \n`);
    }

    public override checkOilLevel(): number {
        const oilLevel = Math.floor(Math.random() * 101);
        const status = oilLevel < 40 ? 'Low' : oilLevel < 70 ? 'Medium' : 'Optimal';
        console.log(`BMW ${this.model} oil level: ${oilLevel}% (${status})\n`);
        return oilLevel;
    }
}

import { ElectricCar } from './electric-car';

export class Tesla extends ElectricCar {
    public model: string;
    public constructor(type: string, model: string, speed: number) {
        super(type, speed);
        this.model = model;
    }

    public override start(): void {
        console.log(`Tesla ${this.model}/${this.type} started silently \n`);
    }

    public accelerate(amount: number): void {
        super.accelerate(amount); // base logic: change speed
        console.log(`Tesla ${this.model} drives at ${this.speed} km/h \n`); // extra detail
    }

    public override charge(batteryLevel: number): void {
        super.charge(batteryLevel); // base logic: change battery level
        console.log(`Tesla ${this.model} battery charged to ${batteryLevel}% \n`); // extra detail
    }

    public override getRange(): number {
        const range = this.batteryLevel * 5;
        console.log(`Tesla ${this.model} range: ${range} km \n`);
        return range;
    }
}


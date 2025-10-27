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

    public override charge(chargeTimeMins: number): number {
        // Every 30 mins add 10% battery
        if (chargeTimeMins > 300) {
            throw new Error('Tesla battery cannot be charged more than 300 minutes');
        } else {
            this.batteryLevel = (chargeTimeMins / 30) * 10;
            console.log(`Tesla charged ${chargeTimeMins} minutes and battery level is ${this.batteryLevel}% \n`);
        }
        return this.batteryLevel;
    }

    public override getRange(): number {
        const range = this.batteryLevel * 5;
        console.log(`Tesla ${this.model} range: ${range} km \n`);
        return range;
    }
}


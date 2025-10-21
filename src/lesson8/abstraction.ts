abstract class Vehicle {
    public constructor(public brand: string, public engine: Engine) {}

    public abstract drive(): string;

    public getEngineInfo(): string {
        // This method delegates part of its behavior to a composed object (Engine),
        // demonstrating composition: the Vehicle "has an" Engine and uses its method.
        return this.engine.getEngineInfo();
    }
}

class Engine {
    public constructor(public horsepower: number, public type: string) {}

    public getEngineInfo(): string {
        return `${this.horsepower}HP ${this.type} engine`;
    }
}

class Car extends Vehicle {
    public constructor(brand: string, engine: Engine, public doors: number) {
        super(brand, engine);
    }

    // Overriding the drive() method
    public drive(): string {
        return `${this.brand} car drives with ${this.getEngineInfo()}`;
    }
}


export { Engine, Vehicle, Car };

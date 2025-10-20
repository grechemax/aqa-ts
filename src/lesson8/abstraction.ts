abstract class Vehicle {
  constructor(public brand: string, public engine: Engine) {}

  abstract drive(): string;

  getEngineInfo(): string {
  // This method delegates part of its behavior to a composed object (Engine),
  // demonstrating composition: the Vehicle "has an" Engine and uses its method.
  return this.engine.getEngineInfo();
}
}

class Engine {
  constructor(public horsepower: number, public type: string) {}

  getEngineInfo(): string {
    return `${this.horsepower}HP ${this.type} engine`;
  }
}

class Car extends Vehicle {
  constructor(brand: string, engine: Engine, public doors: number) {
    super(brand, engine);
  }

  // Overriding the drive() method
  drive(): string {
    return `${this.brand} car drives with ${this.getEngineInfo()}`;
  }
}


export { Engine, Vehicle, Car };
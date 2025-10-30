import { driveVehicle } from '../../../src/lesson9-oop/main';
import { Tesla } from '../../../src/lesson9-oop/electric-car/tesla';
import { Bmw } from '../../../src/lesson9-oop/combustion-car/bmw';

jest.mock('../../../src/lesson9-oop/electric-car/tesla', () => {
    return {
        Tesla: jest.fn().mockImplementation((type, model, batteryLevel) => {
            let currentBattery = batteryLevel;

            return {
                type,
                model,
                start: jest.fn(),
                accelerate: jest.fn(),
                getFuelType: jest.fn().mockReturnValue('electric'),
                getBatteryLevel: jest.fn().mockImplementation(() => currentBattery), // reads live value
                getRange: jest.fn().mockImplementation(() => currentBattery * 5), // 1% = 5 km
                charge: jest.fn().mockImplementation((minutes) => {
                    // 30 mins = 10% charge
                    const chargePercent = (minutes / 30) * 10;
                    currentBattery = Math.min(100, currentBattery + chargePercent);
                })
            };
        })
    };
});

jest.mock('../../../src/lesson9-oop/combustion-car/bmw', () => {
    return {
        Bmw: jest.fn().mockImplementation(() => ({
            start: jest.fn(),
            accelerate: jest.fn(),
            refuel: jest.fn(),
            checkOilLevel: jest.fn().mockReturnValue(50),
            getFuelType: jest.fn().mockReturnValue('gas')
        }))
    };
});

describe('driveVehicle with Tesla', () => {
    let mockedTesla: Tesla;

    beforeEach(() => {
        jest.clearAllMocks();
        mockedTesla = new Tesla('SUV', 'Model X', 0);
    });

    test('should be electric and empty battery', () => {
        expect(mockedTesla.getFuelType()).toBe('electric');
        expect(mockedTesla.getBatteryLevel()).toBe(0);
    });

    test('should charge and have range', () => {
        mockedTesla.charge(30); // charge for 30 mins
        expect(mockedTesla.getBatteryLevel()).toBe(10); // 30 mins = 10% charge
        expect(mockedTesla.getRange()).toBe(50); // 10% * 5 km/% = 50 km
    });

    test('should start and accelerate a Tesla', () => {
        driveVehicle(mockedTesla, 150);
        expect(mockedTesla.start).toHaveBeenCalledWith();
        expect(mockedTesla.accelerate).toHaveBeenCalledWith(150);
    });
});

describe('driveVehicle with BMW', () => {
    let mockedBmw: Bmw;

    beforeEach(() => {
        jest.clearAllMocks();
        mockedBmw = new Bmw('sedan', '320', 0);
    });

    test('should have gas engine and some oil level', () => {
        expect(mockedBmw.getFuelType()).toBe('gas');
        expect(mockedBmw.checkOilLevel()).toBe(50);
    });

    test('should refuel a BMW', () => {
        mockedBmw.refuel(50);
        expect(mockedBmw.refuel).toHaveBeenCalledWith(50);
    });

    test('should start and accelerate a BMW', () => {
        driveVehicle(mockedBmw, 220);
        expect(mockedBmw.start).toHaveBeenCalledWith();
        expect(mockedBmw.accelerate).toHaveBeenCalledWith(220);
    });
});

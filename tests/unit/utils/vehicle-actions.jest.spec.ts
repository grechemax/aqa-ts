import { driveVehicle } from '../../../src/lesson9-oop/main';
import { Tesla } from '../../../src/lesson9-oop/electric-car/tesla';

describe('driveVehicle with Tesla', () => {
    let tesla: Tesla;

    beforeEach(() => {
        tesla = new Tesla('SUV', 'Model X', 0);
    });

    it('should charge and have some range', () => {

        expect(tesla.getFuelType()).toBe('electric');
        expect(tesla.getBatteryLevel()).toBe(0); // initial battery level
        tesla.charge(30); // 30 mins = 10% of battery
        expect(tesla.getRange()).toBe(50); // 10% * 5 = 50 km

    });

    it('should start and accelerate a Tesla', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        driveVehicle(tesla, 70);

        expect(logSpy).toHaveBeenCalledWith('Tesla Model X/SUV started silently \n');
        expect(logSpy).toHaveBeenCalledWith('Tesla Model X drives at 70 km/h \n');

        logSpy.mockRestore();
    });
});

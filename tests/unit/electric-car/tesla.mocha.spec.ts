import { assert, expect } from 'chai';
import { Tesla as Tesla } from '../../../src/lesson9-oop/electric-car/tesla';

describe('Test Tesla', () => {
    let tesla: Tesla;

    beforeEach(() => {
        tesla = new Tesla('sedan', 'model S', 0);
    });

    it('Should be electric and empty battery', () => {
        assert.equal(tesla.getFuelType(), 'electric');
        assert.equal(tesla.getBatteryLevel(), 0);
    });

    it('Should get charged correctly', () => {
        // 60 mins = 20% battery
        tesla.charge(60);
        expect(tesla.getBatteryLevel()).to.equal(20);
    });

    it('Can not be overcharged', () => {
        expect(() => tesla.charge(500)).to.throw('Tesla battery cannot be charged more than 300 minutes');
    });

    it('Should have valid range', () => {
        tesla.charge(60);
        const range = tesla.getRange();
        expect(range).to.be.a('number').and.to.be.greaterThan(0);
    });
});

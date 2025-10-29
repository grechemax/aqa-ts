import assert from 'assert';
import { Bmw as BMW } from '../../../src/lesson9-oop/combustion-car/bmw';

describe('Test BMW', () => {
    let bmw: BMW;

    beforeEach(() => {
        bmw = new BMW('SUV', 'X5', 0);
    });

    it('Should has gas engine', () => {
        assert.equal(bmw.getFuelType(), 'gas'); //uses Mocha's assert
    });
    it('Should have some oil level', () => {
        const oilLevel = bmw.checkOilLevel();
        assert.ok(oilLevel > 0); //uses Mocha's assert
    });
});

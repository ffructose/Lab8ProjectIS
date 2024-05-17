import { IUnit } from './iunit';
import { Infantry } from './infantry';

describe('Infantry Testing', () => {
    let infantry: Infantry;

    beforeEach(() => {
        infantry = new Infantry(10, 5);
    });
    
    it("Creating class ex", () => {
        expect(infantry).toBeTruthy();
    });

    it("Damage of 5", () => {
        infantry.harm(5);
        let health = 5;
        expect(infantry.health.toFixed(2)).toBe(health.toFixed());
    });

    it("Нанесення шкоди 15 одиниць", () => {
        infantry.harm(5);
        let health = 0;
        expect(infantry.health.toFixed(2)).toBe(health.toFixed(2));
    });

    it("Healing after damage 5 of heal 3", () => {
        infantry.harm(5);
        infantry.trust(3);
        let health = 8;
        expect(infantry.health.toFixed(2)).toBe(health.toFixed(2));
    });

    it("Healing healthy", () => {
        infantry.trust(3);
        let health = 10;
        expect(infantry.health.toFixed(2)).toBe(health.toFixed(2));
    });

});
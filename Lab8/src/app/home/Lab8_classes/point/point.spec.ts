import { IPoint } from './ipoint';
import { Point } from './point';

describe('----------- Point Testing -----------', () => {
    let point: Point;

    beforeEach(() => {
        point = new Point(10, 5);
    });
    
    it("Creating class ex", () => {
        expect(point).toBeTruthy();
    });
}); 
 

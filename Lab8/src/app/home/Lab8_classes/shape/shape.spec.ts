import { Point } from "../point/point";
import { Shape } from "./shape";

describe('----------- Shape Testing -----------', () => {
    let shape: Shape;
    let shapeForRotate: Shape;
    let p1: Point, p2: Point, p3, p4: Point;


    beforeEach(() => {
        p1 = new Point(-3, -1);
        p2 = new Point(-2, 2);
        p3 = new Point(2, 2);
        p4 = new Point(3, -1);
        shape = new Shape(p1, p2, p3, p4, "pink");
    });

    it("Creating class ex", () => {
        expect(shape).toBeTruthy();
    });

    it("MOVE", () => {
        console.log("MOVE" )

        let checkp1 = new Point(2, -3);
        let checkp2 = new Point(3, 0);
        let checkp3 = new Point(7, 0);
        let checkp4 = new Point(8, -3);
        shape.move(5, -2);

        expect(shape.botL.x).toBe(checkp1.x);
        expect(shape.botL.y).toBe(checkp1.y);
        console.log("x=" + shape.botL.x + "; y=" + shape.botL.y)

        expect(shape.topL.x).toBe(checkp2.x);
        expect(shape.topL.y).toBe(checkp2.y);
        console.log("x=" + shape.topL.x + "; y=" + shape.topL.y)

        expect(shape.topR.x).toBe(checkp3.x);
        expect(shape.topR.y).toBe(checkp3.y);
        console.log("x=" + shape.topR.x + "; y=" + shape.topR.y)

        expect(shape.botR.x).toBe(checkp4.x);
        expect(shape.botR.y).toBe(checkp4.y);
        console.log("x=" + shape.botR.x + "; y=" + shape.botR.y)
    });

    it("RESIZE", () => {
        console.log("RESIZE")
        let checkp1 = new Point(-8, -6);
        let checkp2 = new Point(-7, 7);
        let checkp3 = new Point(7, 7);
        let checkp4 = new Point(8, -6);
        shape.resize(5);

        expect(shape.botL.x).toBe(checkp1.x);
        expect(shape.botL.y).toBe(checkp1.y);
        console.log("x=" + shape.botL.x + "; y=" + shape.botL.y)

        expect(shape.topL.x).toBe(checkp2.x);
        expect(shape.topL.y).toBe(checkp2.y);
        console.log("x=" + shape.topL.x + "; y=" + shape.topL.y)

        expect(shape.topR.x).toBe(checkp3.x);
        expect(shape.topR.y).toBe(checkp3.y);
        console.log("x=" + shape.topR.x + "; y=" + shape.topR.y)

        expect(shape.botR.x).toBe(checkp4.x);
        expect(shape.botR.y).toBe(checkp4.y);
        console.log("x=" + shape.botR.x + "; y=" + shape.botR.y)
    });

    it("RECOLOR", () => {
        let color = "green";
        shape.recolor("green")
        expect(shape.color).toBe(color);
    });

    it("ROTATE", () => {
        console.log("ROTATE")

        p1 = new Point(-2, -1);
        p2 = new Point(-2, 1);
        p3 = new Point(2, 1);
        p4 = new Point(2, -1);
        shapeForRotate = new Shape(p1, p2, p3, p4, "pink");
        
        let checkp1 = new Point(-1, 2);
        let checkp2 = new Point(1, 2);
        let checkp3 = new Point(1, -2);
        let checkp4 = new Point(-1, -2);
        shapeForRotate.rotate(90);

        expect(shapeForRotate.botL.x).toBe(checkp1.x);
        expect(shapeForRotate.botL.y).toBe(checkp1.y);
        console.log("x=" + shapeForRotate.botL.x + "; y=" + shapeForRotate.botL.y)

        expect(shapeForRotate.topL.x).toBe(checkp2.x);
        expect(shapeForRotate.topL.y).toBe(checkp2.y);
        console.log("x=" + shapeForRotate.topL.x + "; y=" + shapeForRotate.topL.y)

        expect(shapeForRotate.topR.x).toBe(checkp3.x);
        expect(shapeForRotate.topR.y).toBe(checkp3.y);
        console.log("x=" + shapeForRotate.topR.x + "; y=" + shapeForRotate.topR.y)

        expect(shapeForRotate.botR.x).toBe(checkp4.x);
        expect(shapeForRotate.botR.y).toBe(checkp4.y);
        console.log("x=" + shapeForRotate.botR.x + "; y=" + shapeForRotate.botR.y)
    });
}); 
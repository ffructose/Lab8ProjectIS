import { Shape } from "./shape";
import { Point } from "../point/point";

describe('----------- Shape Testing -----------', () => {
    let shape: Shape;
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

    it("Sorting points", () => {
        console.log("_____________________________________________________________________________________________"
            + "Sorting points" +
            "_____________________________________________________________________________________________"
        )
        let checkp1 = new Point(-3, -1);
        let checkp2 = new Point(-2, 2);
        let checkp3 = new Point(2, 2);
        let checkp4 = new Point(3, -1);

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

    it("MOVE", () => {
        console.log("_____________________________________________________________________________________________"
            + "MOVE" +
            "_____________________________________________________________________________________________"
        )

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
        console.log("_____________________________________________________________________________________________"
        + "RESIZE" +
        "_____________________________________________________________________________________________"
    )
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

    // it("ROTATE", () => {
    //     let checkp1 = new Point(2, -3);
    //     let checkp2 = new Point(3, -1);
    //     let checkp3 = new Point(7, -1);
    //     let checkp4 = new Point(8, -3);
    //     shape.rotate(90);

    //     expect(shape).toBeTruthy();
    // });

}); 
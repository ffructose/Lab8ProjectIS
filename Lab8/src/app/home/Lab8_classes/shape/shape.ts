import { IShape } from "./ishape";
import { Point } from "../point/point";

export class Shape implements IShape {
    botL: any;
    topL: any;
    topR: any;
    botR: any;
    color: string;

    constructor(p1: Point, p2: Point, p3: Point, p4: Point, color: string) {


        this.color = color;

        this.botL = p1;
        this.topL = p2;
        this.topR = p3;
        this.botR = p4;
    }

    move(x: number, y: number) {
        this.botL.x += x;
        this.topL.x += x;
        this.topR.x += x;
        this.botR.x += x;

        this.botL.y += y;
        this.topL.y += y;
        this.topR.y += y;
        this.botR.y += y;
    }

    resize(sizechange: number) {
        this.botL.x -= sizechange;
        this.botL.y -= sizechange;

        this.topL.x -= sizechange;
        this.topL.y += sizechange;

        this.topR.x += sizechange;
        this.topR.y += sizechange;

        this.botR.x += sizechange;
        this.botR.y -= sizechange;
    }

    recolor(color: string) {
        this.color = color;
    }

    rotate(angle: number): void {
        const centerX = (this.botL.x + this.topR.x) / 2;
        const centerY = (this.botL.y + this.topR.y) / 2;
        const rad = angle * (Math.PI / 180); // Перетворення кута з градусів в радіани

        this.botL = this.rotatePoint(this.botL, centerX, centerY, rad);
        this.topL = this.rotatePoint(this.topL, centerX, centerY, rad);
        this.topR = this.rotatePoint(this.topR, centerX, centerY, rad);
        this.botR = this.rotatePoint(this.botR, centerX, centerY, rad);
    }

    private rotatePoint(point: Point, centerX: number, centerY: number, angle: number): Point {
        const x = centerX + (point.x - centerX) * Math.cos(angle) - (point.y - centerY) * Math.sin(angle);
        const y = centerY + (point.x - centerX) * Math.sin(angle) + (point.y - centerY) * Math.cos(angle);
        return { x, y };
    }

}
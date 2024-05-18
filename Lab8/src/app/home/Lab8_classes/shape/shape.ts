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
        const center = this.getCenter();

        this.botL = this.rotatePoint(this.botL, angle, center);
        this.topL = this.rotatePoint(this.topL, angle, center);
        this.topR = this.rotatePoint(this.topR, angle, center);
        this.botR = this.rotatePoint(this.botR, angle, center);
    }

    // Обчислення центра фігури
    private getCenter(): Point {
        const centerX = (this.botL.x + this.topL.x + this.topR.x + this.botR.x) / 4;
        const centerY = (this.botL.y + this.topL.y + this.topR.y + this.botR.y) / 4;
        return new Point(centerX, centerY);
    }

    // Обертання точки на заданий кут навколо центра
    private rotatePoint(p: Point, angle: number, center: Point): Point {
        const rad = -angle * (Math.PI / 180); // Конвертація кута в радіани
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        // Переносимо точку так, щоб центр був в (0, 0)
        const translatedX = p.x - center.x;
        const translatedY = p.y - center.y;

        // Обертаємо точку
        const rotatedX = translatedX * cos - translatedY * sin;
        const rotatedY = translatedX * sin + translatedY * cos;

        // Переносимо точку назад
        const finalX = rotatedX + center.x;
        const finalY = rotatedY + center.y;

        return new Point(Math.round(finalX), Math.round(finalY));
    }

}
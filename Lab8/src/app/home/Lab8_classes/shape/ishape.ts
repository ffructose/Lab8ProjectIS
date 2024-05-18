export interface IShape {
    color: string;

    move(x: number, y: number): void;
    resize(sizechange: number): void;
    recolor(color: string): void;
    rotate(angle: number): void;

} 


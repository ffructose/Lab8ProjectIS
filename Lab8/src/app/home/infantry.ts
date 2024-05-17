import { IUnit } from './iunit';

export class Infantry implements IUnit {
    health: number;
    maxhealth: number; 
    damage: number;
    constructor(health: number, damage: number) {
        this.health = health;
        this.damage = damage;
        this.maxhealth = health;
    }
    harm(damage: number) {
        if (damage <= this.health)
            this.health = this.health - damage;
        else
            this.health = 0;
    }
    trust(health: number) {
        this.health += health;
        if (this.health > this.maxhealth) this.health = this.maxhealth;
    }
} 
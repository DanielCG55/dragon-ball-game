import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { converAngleToRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';

interface InitialCarProps {
    position: Point;
    size: Size;
    color?: string;
    speed?: number;
    acceleration?: number;
    angle?: number;
    angleSpeed?: number;
}

export class Car extends Actor {
    // Atributos
    size: Size;
    color: string;
    speed: number;
    acceleration: number;
    angle: number;
    angleSpeed: number;

    constructor(props: InitialCarProps) {
        // Posición inicial del Car
        super(props.position);
        // Dimensiones del Pacman
        this.size = props.size;
        this.color = props.color || '#d62828';
        this.speed = props.speed || 0;
        this.acceleration = props.acceleration || 0;
        this.angle = props.angle || 0;
        this.angleSpeed = props.angleSpeed || 0;
    }

    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(converAngleToRad(this.angle));

        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size.w / 2, -this.size.h / 2, this.size.w, this.size.h);
        ctx.fillStyle = '#202020';
        ctx.fillRect(-this.size.w / 2 + this.size.w - 20, -this.size.h / 2 + this.size.h - 35, 15, 30);
    }

    update(delta: number): void {
        this.angle += this.angleSpeed;
        this.angleSpeed *= 0.95;
        this.speed = (this.speed + this.acceleration) * 0.95;

        const boostedDelta = delta * 10;
        let newPos: Point = {
            x: this.position.x + this.speed * boostedDelta * Math.cos(converAngleToRad(this.angle)),
            y: this.position.y + this.speed * boostedDelta * Math.sin(converAngleToRad(this.angle)),
        };
        checkLimits(newPos) ? (this.position = newPos) : (this.speed = 0);
    }

    keyboardEventDown(key: string): void {
        switch (key) {
            case 'ArrowRight':
                this.acceleration === 0 ? (this.angleSpeed = 0) : (this.angleSpeed += 2);
                break;
            case 'ArrowLeft':
                this.acceleration === 0 ? (this.angleSpeed = 0) : (this.angleSpeed -= 2);

                break;
            case 'ArrowUp':
                this.acceleration = 2;

                break;
            case 'ArrowDown':
                this.acceleration = -2;
                break;
            default:
                console.log('unvalid key');
                break;
        }
    }

    keyboardEventUp(key: string): void {
        switch (key) {
            case 'ArrowUp':
                this.acceleration = 0;

                break;
            case 'ArrowDown':
                this.acceleration = 0;
                break;
            default:
                console.log('unvalid key');
                break;
        }
    }
}

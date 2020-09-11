import Shape from './Shape.js';

export default class Circle extends Shape {
  constructor (options) {
    super(options.color);
    this.x = options.x;
    this.y = options.y;
    this.radius = options.radius;
  }

  draw() {
    super.draw(this.color);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

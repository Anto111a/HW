import Shape from './Shape.js';

export default class Square extends Shape {
  constructor (options) {
    super(options.color);
    this.x = options.x;
    this.y = options.y;
    this.size = options.size;
  }

  draw() {
    super.draw(this.color);
    this.ctx.fillRect(this.x, this.y, this.size, this.size,);
  }
}

import Shape from './Shape.js';

export default class Triangle extends Shape {
  constructor (options) {
    super(options.color);
    this.pointAx = options.pointAx;
    this.pointAy = options.pointAy;
    this.pointBx = options.pointBx;
    this.pointBy = options.pointBy;
    this.pointCx = options.pointCx;
    this.pointCy = options.pointCy;
    
  }

  draw() {
    super.draw(this.color);
    this.ctx.beginPath();
    this.ctx.moveTo(this.pointAx, this.pointAy);
    this.ctx.lineTo(this.pointBx,this.pointBy);
    this.ctx.lineTo(this.pointCx,this.pointCy);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

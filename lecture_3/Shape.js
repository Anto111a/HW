export default class Shape {
  constructor(color) {
    this.draw = this.draw.bind(this);
    this.color = color;
    
  }

  canvasId  = 'canvasId';

  createCanvas() {
    const canv = document.createElement('canvas');
    canv.setAttribute('id', `${this.canvasId}`);
    canv.setAttribute('width', '500');
    canv.setAttribute('height', '500');
    document.body.appendChild(canv);
  }

  getCanvas(canvasId){
    return document.querySelector(`#${canvasId}`)
  }

  draw(color) {
    if (!this.getCanvas(this.canvasId)) {
      this.createCanvas();
    }

    this.ctx = this.getCanvas(this.canvasId).getContext('2d');
    this.ctx.fillStyle = color;
  }
  
}

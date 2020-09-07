/*Написать класс Shape  в котором будет реализована логика создания канваса и добавления в дом.
Создать 3 класа (Square, Circle, Triangle) которые будут наследоватся от Shape. 
В каждого будет метод draw который нужно будет вызвать что бы отрисовать в доме нужную фигуру (квадрат, круг, треугольник).
В результате html страничка на которой нарисовано канвасом 3 фигуры.*/

class Shape {
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

class Square extends Shape {
  draw(options) {
    super.draw(options.color);
    this.ctx.fillRect(options.x, options.y, options.size, options.size);
  }
}

class Circle extends Shape {
  draw(options) {
    super.draw(options.color);
    this.ctx.beginPath();
    this.ctx.arc(options.x, options.y, options.radius, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

class Triangle extends Shape {
  draw(options) {
    super.draw(options.color);
    this.ctx.beginPath();
    this.ctx.moveTo(options.pointAx, options.pointAy);
    this.ctx.lineTo(options.pointBx,options.pointBy);
    this.ctx.lineTo(options.pointCx,options.pointCy);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

const square1 = new Square();
square1.draw({
  x:50,
  y:100,
  size:200,
  color:'#FF4F00'
});

const circle1 = new Circle();
circle1.draw({
  x:150,
  y:170,
  radius:50,
  color:'aqua'
});

const triangle1 = new Triangle();
triangle1.draw({
  pointAx:150,
  pointAy:50,
  pointBx:270,
  pointBy: 100,
  pointCx: 30,
  pointCy: 100,
  color:'#d02510'
});

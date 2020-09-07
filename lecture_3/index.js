/*Написать класс Shape  в котором будет реализована логика создания канваса и добавления в дом.
Создать 3 класа (Square, Circle, Triangle) которые будут наследоватся от Shape. 
В каждого будет метод draw который нужно будет вызвать что бы отрисовать в доме нужную фигуру (квадрат, круг, треугольник).
В результате html страничка на которой нарисовано канвасом 3 фигуры.*/

class Shape {
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
    } else {
      console.log(this.getCanvas(this.canvasId));
    }

    this.ctx = this.getCanvas(this.canvasId).getContext('2d');
    this.ctx.fillStyle = color;
  }
  
}

class Square extends Shape {
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

class Circle extends Shape {
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

class Triangle extends Shape {
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

const square1 = new Square({
  x:50,
  y:100,
  size:200,
  color:'#FF4F00'
});
square1.draw();

const circle1 = new Circle({
  x:150,
  y:170,
  radius:50,
  color:'aqua'
});
circle1.draw();

const triangle1 = new Triangle({
  pointAx:150,
  pointAy:50,
  pointBx:270,
  pointBy: 100,
  pointCx: 30,
  pointCy: 100,
  color:'#d02510'
});
triangle1.draw();

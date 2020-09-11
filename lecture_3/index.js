/*Написать класс Shape  в котором будет реализована логика создания канваса и добавления в дом.
Создать 3 класа (Square, Circle, Triangle) которые будут наследоватся от Shape. 
В каждого будет метод draw который нужно будет вызвать что бы отрисовать в доме нужную фигуру (квадрат, круг, треугольник).
В результате html страничка на которой нарисовано канвасом 3 фигуры.*/

import Circle from './Circle.js';
import Square from './Square.js';
import Triangle from './Triangle.js';

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

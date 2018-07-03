export class Point {
  //PASSING x? TELLS CONSTRUCTOR THIS IS OPTIONAL
  //PRIVATE VALUE IS NOT AVAILABLE ANYWHERE ELSE THAN CLASS POINT
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('X: ' + this._x + ' y: ' + this._y);
  }
  get x() {
    return this._x;
  }
  set x(value){
    if(value < 0) {
      throw new Error('Value cannot be less than 0');
    }
    this._x = value;
  }
}

let point = new Point();
point.x = 10;
let x = point.x;
point.draw();
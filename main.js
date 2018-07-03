var Point = /** @class */ (function () {
    //PASSING x? TELLS CONSTRUCTOR THIS IS OPTIONAL
    //PRIVATE VALUE IS NOT AVAILABLE ANYWHERE ELSE THAN CLASS POINT
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ' y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point();
point.x = 10;
var x = point.x;
point.draw();

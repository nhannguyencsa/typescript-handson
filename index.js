var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
}; //like enums
var eDirection = 0 /* EDirection.Up */;
var direction = Direction.Right;

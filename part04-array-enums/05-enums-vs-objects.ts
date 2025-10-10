enum Direction {
  Up,
  Down,
  Left,
  Right
}

const enum EDirection {
  Up,
  Down,
  Left,
  Right
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
} as const; //like enums


let eDirection = EDirection.Up;
let direction = Direction.Right;


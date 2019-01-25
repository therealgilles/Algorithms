/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 1) return points.length;

  let max = 2;
  for (let i = 0; i < points.length; i += 1) {
    let lines = new Map();
    let samePoint = 0;
    let currentMax = 1;

    for (let j = i+1; j < points.length; j += 1) {
      let x = points[j].x - points[i].x;
      let y = points[j].y - points[i].y;

      if (x === 0 && y === 0) {
        samePoint += 1;
        continue;
      }

      let g = gcd(x, y);
      if (g !== 0) {
        x = parseInt(x / g);
        y = parseInt(y / g);
      }

      let idx = x + ' ' + y;
      if (!lines.has(idx)) {
        lines.set(idx, 2);
      } else {
        lines.set(idx, lines.get(idx) + 1);
      }
      currentMax = Math.max(currentMax, lines.get(idx));

    }
    currentMax += samePoint;
    max = Math.max(max, currentMax);
  }

  return max;
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

// [[0,0],[94911151,94911150],[94911152,94911151]]
const points = [ new Point(0,0), new Point(94911151,94911150), new Point(94911152,94911151) ];
// const points = [ new Point(0,0), new Point(1,1), new Point(0,0) ];

console.log(maxPoints(points));


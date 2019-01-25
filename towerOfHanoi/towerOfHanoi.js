const A = [4, 3, 2, 1];
const B = [];
const C = [];

const towerOfHanoi = (n, source, target, spare) => {
  if (n > 0) {
    towerOfHanoi(n - 1, source, spare, target);
    target.push(source.pop());
    console.log(A, B, C);
    towerOfHanoi(n - 1, spare, target, source);
  }
};

console.log(A, B, C);
towerOfHanoi(4, A, C, B);

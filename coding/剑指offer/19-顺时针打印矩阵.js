// 牛客网：https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a?tpId=13&tqId=11172&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

function printMatrix(matrix) {
  let left = 0,
    top = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1,
    array = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      array.push(matrix[top][i]);
    }
    if (top === bottom) {
      return array;
    }
    for (let i = top + 1; i <= bottom; i++) {
      array.push(matrix[i][right]);
    }
    if (left === right) {
      return array;
    }
    for (let i = right - 1; i >= left; i--) {
      array.push(matrix[bottom][i]);
    }
    for (let i = bottom - 1; i > top; i--) {
      array.push(matrix[i][left]);
    }
    left += 1;
    right -= 1;
    top += 1;
    bottom -= 1;
  }
  return array;
}

let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
let o = printMatrix(array);
console.log(o);